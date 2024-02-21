import { Text, Button, Box, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/eHacksLogo.png";
import OCILogo from "../../assets/sponsors/ObjectComputingLight.webp"
import { getRegistrationCount } from "../../data/firestoreOps";
import { CAPACITY, DEADLINE, SOFTDEADLINE } from "../../config";
import SocialLinks from "./SocialLinks.jsx";

const Home = () => {
  const [capacityMet, setCapacityMet] = useState(true);
  const [loading, setLoading] = useState(true);
  // deadline must be set to CST or CDT according to daylight savings time
  useEffect(() => {
    getRegistrationCount().then((count) => {
      console.log(count)
      if (count >= CAPACITY) {
        setCapacityMet(true);
      } else {
        setCapacityMet(false);
      }
      setLoading(false);
    });
  }, []);

  // renders the register button based on the deadline and capacity
  const RegisterButton = () => {
    if (DEADLINE > new Date()) {
      if (loading) {
        return (
          <Button colorScheme="Black" variant="outline">
            Loading...
          </Button>
        );
      } else {
        if (capacityMet) {
          return (
            <Button colorScheme="Black" variant="outline">
              Capacity Met
            </Button>
          );
        } else {
          return (
            <Link to="/register">
              <Button colorScheme="Black" variant="outline">
                Register to Participate
              </Button>
            </Link>
          );
        }
      }
    } else {
      return (
        <Button colorScheme="Black" variant="outline">
          Deadline Passed
        </Button>
      );
    }
  };

  return (
    <Box
      height="100vh"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="75px"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <a href="https://objectcomputing.com/" rel="external">
        <Image
            src={OCILogo}
            alt="Object Computing"
            width="38vw"
            maxW="373px"
            mt="0"
          />
        </a>
        <Text mt="0px" mb="3vh" fontSize="xl" fontFamily="monospace" as="i">
          presents
        </Text>
        <Image 
          src={logo}
          alt="eHacks Logo"
          width="35vw"
          maxW="253px"
          mb="2vmin"
        />
        <Text mt="0px" mb="3vh" fontSize="xl" fontFamily="monospace">
          March 1st-3rd, 2024
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          @ T-Rex Innovation Center, St. Louis, MO
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          Hosted by Southern Illinois University Edwardsville
        </Text>
      </Box>
      <RegisterButton/>
      <Box
        mt="10px"
        mb="3vh"
        maxW="70vw"
        fontSize="xl"
        fontFamily="monospace"
      >
        <Text as={DEADLINE > new Date() ? "" : "s"}>
          Soft Deadline for Shirts: {SOFTDEADLINE.toLocaleString()}
        </Text>
        <Text as={DEADLINE > new Date() ? "" : "s"}>
          Registration Deadline: {DEADLINE.toLocaleString()}
        </Text>
        <Text as={capacityMet ? "s" : ""}>
          Max Capacity: {CAPACITY} Participants
        </Text>
      </Box>
      <SocialLinks />
    </Box>
  );
};

export default Home;
