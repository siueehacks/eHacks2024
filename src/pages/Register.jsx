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

const RegistrationForm = () => {
  const [file, setFile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [allergies, setAllergies] = useState("");
  const [shirtSize, setShirtSize] = useState("medium")
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
      email === ""
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
      submissionTime: date.toLocaleString(),
      resume: resumeName,
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
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="firstName">First Name: </label>
                    <Input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="lastName">Last Name: </label>
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
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="email">Email: </label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="allergies">Allergies: </label>
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
              <Box mb="2vh">
                <RadioGroup onChange={setShirtSize} value={shirtSize} name="shirtSize">
                  <Stack direction='row'>
                    <label htmlFor="shirtSize">Select Your Shirt Size:</label>
                    <Radio value='small'>Small</Radio>
                    <Radio value='medium'>Medium</Radio>
                    <Radio value='large'>Large</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <Text maxW="100vh">
                Upload your resume below for employers attending the event.
                It is not required but strongly recommended.
              </Text>
              <br />
              <label style={{ marginRight: "auto" }} htmlFor="lastName">
                Upload Resume
              </label>
              <Input
                style={{ marginRight: "auto" }}
                type="file"
                id="waiver"
                accept="image/*,application/pdf"
                onChange={handleChange}
              />
            </form>
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
