import "./Home.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";
import { ref } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig.js";
import { Flex, Center, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="Page">
      <div className="ContentBox">
        <Center>
          <Flex
            direction="column"
            align="left"
            h="50vh"
            padding="2vmax"
            gap="2vmax"
            w="60%"
            maxW="50vmin"
          >
            <Flex gap="2vw" direction="column" justify="center" h="100%">
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
              <Flex align="left">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="TextField"
                  required
                />
              </Flex>
            </Flex>
            <Button
              colorScheme="blue"
              onClick={handleLogin}
              className="Button"
              type="submit"
            >
              Login
            </Button>
            <Text color="red">{error}</Text>
          </Flex>
        </Center>
      </div>
    </div>
  );
};

export default Login;
