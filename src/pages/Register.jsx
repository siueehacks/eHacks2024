import { Flex, Button, Text, Center, Input, RadioGroup, Stack, Radio, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { changeCountBy, getRegistrationCount } from "../data/firestoreOps.js";
import { CAPACITY, DEADLINE } from "../config.js";
import Waves from "../components/Waves.jsx"
import { ExternalLinkIcon } from "@chakra-ui/icons";

const RegistrationForm = () => {
  const [file, setFile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [allergies, setAllergies] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [school, setSchool] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [major, setMajor] = useState("");
  const [needsTransport, setNeedsTransport] = useState("no");
  const [message, setMessage] = useState("");
  const [atCapacity, setAtCapacity] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getRegistrationCount().then((count) => {
      if (count >= CAPACITY) {
        setAtCapacity(true);
      }
    });
  }, []);

  // Handles Input change event and updates state
  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(file);
  }

  async function handleSubmit() {
    const date = new Date();

    if (date > DEADLINE) {
      setMessage("Registration deadline has passed, sorry!");
      return;
    }

    if (atCapacity) {
      setMessage("Event has reached participant capacity, sorry!");
      return;
    }

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      file === "" ||
      shirtSize === "" ||
      school === "" ||
      schoolYear === "" ||
      needsTransport === "" ||
      major === ""
    ) {
      setMessage("Please fill out all required fields.");
      return;
    }
    let resumeName = "";
    if (file === "") {
      resumeName = "No Resume";
    } else {
      resumeName = `${lastName}${firstName}Resume_${date}.${file.name
        .split(".")
        .pop()}`;
    }

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      allergies: allergies,
      shirtSize: shirtSize,
      school: school,
      schoolYear: schoolYear,
      submissionTime: date.toLocaleString("en-US"),
      resume: resumeName,
      needsTransport, needsTransport,
      major: major
    };

    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
      changeCountBy(1);
      console.log("Document written with ID: ", docRef.id);
      if (file !== "") {
        const resumeRef = ref(
          storage,
          `/resumes/${lastName}${firstName}Resume_${date}.${file.name
            .split(".")
            .pop()}`
        );
        uploadBytesResumable(resumeRef, file);
      }
    } catch (e) {
      console.error(e);
      setMessage("Error submitting form. Please try again.");
    }
    navigate("/thankyou");
  }

  return (
      <div className="ContentBox">
        <Center minH="100vh">
          <Flex
            direction="column"
            align="center"
            padding="2vmax"
            gap="1vh"
            maxW="100%"
            h="100%"
          >
            <Text fontSize="4xl" mb="2vw">
              eHacks 2024 Registration
            </Text>
            <form onSubmit={handleSubmit}>
              <Flex w="100%" gap="2vw" wrap="wrap" mb="2vh">
                <Flex gap="2vw" direction="column" maxW="100%">
                  <Flex align="center" textAlign="left" h="25%" mt="0.5vh" mb="0.5vh">
                    <label htmlFor="firstName">First Name: <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                    <Input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                  <Flex align="center" textAlign="left" h="25%" mt="0.5vh" mb="0.5vh">
                    <label htmlFor="lastName">Last Name: <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                    <Input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                </Flex>
                <Flex gap="2vw" direction="column" textAlign="left">
                  <Flex align="center" textAlign="left" h="25%" mt="0.5vh" mb="0.5vh">
                    <label htmlFor="email">Email: <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                  <Flex align="center" textAlign="left" h="25%" mt="0.5vh" mb="0.5vh">
                    <label htmlFor="allergies">Allergies / Dietary Restrictions: </label>
                    <Input
                      type="allergies"
                      id="allergies"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Flex align="center" textAlign="left" h="25%">
                <label htmlFor="school">University/Institution Name: <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                <Input
                  type="school"
                  id="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="TextField"
                  required
                />
              </Flex>
              <Box mb="2vh">
                <RadioGroup onChange={setSchoolYear} value={schoolYear} name="schoolYear">
                  <Flex align="center" justifyContent="space-between">
                    <label htmlFor="schoolYear">Select your ranking: <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                    <Stack display="inline" direction="row">
                      <Radio value='freshman'>Freshman</Radio>
                      <Radio value='sophomore'>Sophomore</Radio>
                      <Radio value='junior'>Junior</Radio>
                      <Radio value='senior'>Senior</Radio>
                      <Radio value='grad'>Grad</Radio>
                    </Stack>
                  </Flex>
                </RadioGroup>
                <Flex align="center" textAlign="left" h="25%">
                  <label htmlFor="major">Major: <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                  <Input
                    type="major"
                    id="major"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    className="TextField"
                    required
                  />
                </Flex>
                <br/>
                <RadioGroup onChange={setNeedsTransport} value={needsTransport} name="needsTransport">
                  <Flex align="center" justifyContent="space-between">
                    <label htmlFor="needsTransport">Riding bus (SIUE students only): <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                    {/* <Stack direction='row'>
                      <Radio value='yes'>Yes</Radio>
                      <Radio value='no'>No</Radio>
                    </Stack> */}
                    <Text pl="5px" textColor="red" fontWeight="bold">Bus capacity has been met! If you are unable to find transport reach out to siue.ehacks@gmail.com and we will find accommodations.</Text>
                  </Flex>
                </RadioGroup>
                <br/>
                <RadioGroup onChange={setShirtSize} value={shirtSize} name="shirtSize">
                  <Flex align="center" justifyContent="space-between">
                    <label htmlFor="shirtSize">Select Your (Free!) Shirt Size: <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text></label>
                    <Stack direction='row' wrap='wrap'>
                      <Radio value='small'>Small</Radio>
                      <Radio value='medium'>Medium</Radio>
                      <Radio value='large'>Large</Radio>
                      <Radio value='xl'>XL</Radio>
                      <Radio value='xxl'>XXL</Radio>
                    </Stack>
                  </Flex>
                </RadioGroup>
              </Box>
              <Text maxW="100vh">
                Upload your resume below for employers at eHacks career fair.
                It is required to attend the event.
              </Text>
              <br />
              <label style={{ marginRight: "auto" }} htmlFor="lastName">
                Upload Resume <Text color="red" display="inline">{(message !== "") ? "Required!" : ""}</Text>
              </label>
              <Input
                style={{ marginRight: "auto" }}
                type="file"
                id="waiver"
                accept="image/*,application/pdf"
                onChange={handleChange}
              />
            </form>
            <Text>
              By registering, you are agreeing to the following:<br/>
              <br/>
              I acknowledge that professional photographs taken of participants during eHacks may be included in eHacks publications, news releases, articles, or any other eHacks communications and/or websites.<br/>
              <br/>
              I hereby indemnify and hold eHacks, its organizers, and agents of the facility utilized for the eHacks event harmless from all liability (including attorneys’ fees) or injury (including death).
            </Text>
            <Button
              colorScheme="Black"
              variant="outline"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Text color="red">{message}</Text>
          </Flex>
        </Center>
      </div>
  );
};

const Register = () => {
  return (
    <div className="Page">
      <Waves static="true"/>
      <RegistrationForm />
    </div>
  );
}

export default Register;
