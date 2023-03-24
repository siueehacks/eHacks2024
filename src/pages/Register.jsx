import { Flex, Button, Text, Center } from "@chakra-ui/react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Register = () => {
  const [file, setFile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Submit");
  const navigate = useNavigate();
  
  // Handles input change event and updates state
  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(file);
  }

  async function handleSubmit() {
    if (!file) {
      alert("Please choose a file first!");
    }
    const date = new Date();

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      submissionTime: date.toLocaleString(),
      resume: `${lastName}${firstName}ConsentForm_${date}.${file.name
        .split(".")
        .pop()}`,
    };

    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
      console.log("Document written with ID: ", docRef.id);
      const consentRef = ref(
        storage,
        `/resumes/${lastName}${firstName}ConsentForm_${date}.${file.name
          .split(".")
          .pop()}`
      );
      uploadBytesResumable(consentRef, file);
    } catch (e) {
      console.error(e);
      setMessage("Error submitting form. Please try again.");
    }
    setButtonLabel("Submitted!");
    navigate("/")
  }

  return (
    <div className="Page">
      <div className="ContentBox">
        <Center>
          <Flex
            direction="column"
            align="left"
            padding="2vmax"
            gap="2vmax"
            maxW="80%"
          >
            <Flex gap="2vw" direction="column">
              <Flex align="left">
                <label htmlFor="firstName">First Name: </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="TextField"
                  required
                />
              </Flex>
              <Flex align="left">
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="TextField"
                  required
                />
              </Flex>
              <Flex align="left">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="TextField"
                  required
                />
              </Flex>
            </Flex>
            <label align="left" htmlFor="lastName">
              Upload Signed Consent
            </label>
            <input
              type="file"
              id="consent"
              accept="image/*,application/pdf"
              onChange={handleChange}
              required
            />
            <Button
              colorScheme="Black"
              variant="outline"
              onClick={handleSubmit}
            >
              {buttonLabel}
            </Button>
            <Text color="red">{message}</Text>
            <p>Website made with {"\u2764"} by SIUE Student Morgan Jackson</p>
          </Flex>
        </Center>
      </div>
    </div>
  );
};

export default Register;
