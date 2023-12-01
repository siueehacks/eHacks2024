import "./Home.css";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import {
  Flex,
  Center,
  Button,
  Input,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import Waves from "../components/Waves.jsx"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function checkSignedIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in");
        navigate("/dashboard");
      } else {
        console.log("logged out");
      }
    })
  }

  useEffect(() => {
    checkSignedIn()
  }, []);

  async function handleLogin() {
      await setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((e) => {
      setError("Bad Credentials");
    });
  }

  return (
    <div className="Page">
      <Waves static="true"/>
      <div className="ContentBox">
      <Flex justify="left" ml="2vw">
          <Link to="/#">
            <Button variant="outline" _hover={{ bg: '#969696' }}>Return to Homepage</Button>
          </Link>
        </Flex>
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
                _hover={{ bg: '#969696' }}
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
