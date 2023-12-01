import { Flex, Button, Text, Center, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { getRegistrationCount } from "../data/firestoreOps.js";
import { CAPACITY, DEADLINE } from "../config.js";
import Waves from "../components/Waves.jsx"

const Register = () => {
  const [file, setFile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [guardianFirstName, setGuardianFirstName] = useState("");
  const [guardianLastName, setGuardianLastName] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [allergies, setAllergies] = useState("");
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
      guardianFirstName === "" ||
      guardianLastName === "" ||
      guardianPhone === ""
    ) {
      setMessage("Please fill out all required fields.");
      return;
    }
    let waiverName = "";
    if (file === "") {
      waiverName = "No Waiver";
    } else {
      waiverName = `${lastName}${firstName}Waiver_${date}.${file.name
        .split(".")
        .pop()}`;
    }

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      allergies: allergies,
      guardianFirstName: guardianFirstName,
      guardianLastName: guardianLastName,
      guardianEmail: guardianEmail,
      guardianPhone: guardianPhone,
      submissionTime: date.toLocaleString(),
      waiver: waiverName,
    };

    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
      console.log("Document written with ID: ", docRef.id);
      if (file !== "") {
        const waiverRef = ref(
          storage,
          `/waivers/${lastName}${firstName}Waiver_${date}.${file.name
            .split(".")
            .pop()}`
        );
        uploadBytesResumable(waiverRef, file);
      }
    } catch (e) {
      console.error(e);
      setMessage("Error submitting form. Please try again.");
    }
    navigate("/thankyou");
  }

  function downloadWaiverForm() {
    const link = document.createElement("a");
    link.href = "/SheCode2023Forms.pdf";
    link.setAttribute("download", "SheCode2023Waiver.pdf");
    document.body.appendChild(link);
    link.click();
  }

  return (
    <div className="Page">
      <Waves />
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
              <Flex w="100%" gap="2vw" wrap="wrap" mb="4vh">
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
                <Flex gap="2vw" direction="column" textAlign="left">
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="guardianFirstName">
                      Guardian First Name:{" "}
                    </label>
                    <Input
                      type="text"
                      id="guardianFirstName"
                      value={guardianFirstName}
                      onChange={(e) => setGuardianFirstName(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="guardianLastName">
                      Guardian Last Name:{" "}
                    </label>
                    <Input
                      type="text"
                      id="guardianLastName"
                      value={guardianLastName}
                      onChange={(e) => setGuardianLastName(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="guardianEmail">Guardian Email: </label>
                    <Input
                      type="email"
                      id="guardianEmail"
                      value={guardianEmail}
                      onChange={(e) => setGuardianEmail(e.target.value)}
                      className="TextField"
                    />
                  </Flex>
                  <Flex align="center" textAlign="left" h="25%">
                    <label htmlFor="guardianPhone">Guardian Phone: </label>
                    <Input
                      type="text"
                      id="guardianPhone"
                      value={guardianPhone}
                      onChange={(e) => setGuardianPhone(e.target.value)}
                      className="TextField"
                      required
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Text maxW="100vh">
                The following waiver is REQUIRED to participate. Download and
                either submit a signed copy of the waiver (Photo or PDF) with
                this form or bring a printed, signed copy to the event.
              </Text>
              <Button m="1vh" variant="outline" onClick={downloadWaiverForm}>
                Download Waiver
              </Button>
              <br />
              <label style={{ marginRight: "auto" }} htmlFor="lastName">
                Upload Signed Waiver
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
    </div>
  );
};

export default Register;
