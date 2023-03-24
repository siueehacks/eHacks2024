import "./Home.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import {
  Flex,
  Center,
  Button,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
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
      setError("Bad Credentials");
    }
  }

  return (
    <div className="Page">
      <div className="ContentBox">
        <Center>
          <Flex
            direction="column"
            align="left"
            h="80vh"
            padding="2vmax"
            gap="2vmax"
            w="60%"
            maxW="50vmin"
          >
            <Flex gap="2vw" direction="column" justify="center" h="100%">
              <Flex align="center">
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
              <Flex align="center">
                <label htmlFor="password">Password: </label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="TextField"
                  required
                />
              </Flex>
              <Button
                variant="outline"
                onClick={handleLogin}
                className="Button"
                type="submit"
              >
                Login
              </Button>
              <Alert status="error" variant="solid" opacity={error ? "100%" : "0%"} borderRadius="1vmin">
                <AlertIcon />
                {error}
              </Alert>
            </Flex>
          </Flex>
        </Center>
      </div>
    </div>
  );
};

export default Login;
