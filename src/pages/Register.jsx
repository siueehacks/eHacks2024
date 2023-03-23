import { Flex, Button, Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { ref, uploadBytesResumable } from "firebase/storage";
import storage from "../firebaseConfig.js";
import "./Home.css";

const Register = () => {
  const [file, setFile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Submit");

  // Handles input change event and updates state
  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(file);
  }

  function handleSubmit() {
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

    const formRef = ref(
      storage,
      `/formData/${lastName}${firstName}FormData_${date}.json`
    );

    const consentRef = ref(
      storage,
      `/Resumes/${lastName}${firstName}ConsentForm_${date}.${file.name
        .split(".")
        .pop()}`
    );
    uploadBytesResumable(
      formRef,
      new Blob([JSON.stringify(formData)], { type: "application/json" })
    );
    uploadBytesResumable(consentRef, file);
    setButtonLabel("Submitted!");
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
            <p>{message}</p>
            <p>Website made with {"\u2764"} by SIUE Student Morgan Jackson</p>
          </Flex>
        </Center>
      </div>
    </div>
  );
};

export default Register;
