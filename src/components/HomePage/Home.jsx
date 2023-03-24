import { Text, Button, Box, Flex, Image } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import logo from "../../assets/shecodeWhiteGlow.png";

const Home = () => {
  const earlyDeadline = new Date("April 8, 2023 12:00:00");
  const deadline = new Date("April 15, 2023 12:00:00");

  return (
    <Box
      height="100vh"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image src={logo} alt="SheCode Logo" maxW="80%"/>
        <Text mt="0px" mb="3vh" fontSize="xl" fontFamily="monospace">
          April 22, 2023
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          Southern Illinois University Edwardsville
          <br />
          Edwardsville, IL
        </Text>
      </Box>
      {/*}
      <Link to="/register">
        {deadline > new Date() ? (
          <Button
            colorScheme="Black"
            variant="outline"
            onClick={handleRegister}
          >
            Apply to Participate
          </Button>
        ) : (
          <Button colorScheme="Black" variant="outline">
            Deadline Passed
          </Button>
        )}
      </Link>
      */}
      <Button colorScheme="Black" variant="outline">
        Registration Coming Soon
      </Button>
      <Box>
        <Text
          mt="10px"
          mb="3vh"
          maxW="70vw"
          fontSize="xl"
          fontFamily="monospace"
        >
          <Text as={earlyDeadline > new Date() ? "" : "s"}>Priority Application Deadline: TBA</Text>
          <Text as={deadline > new Date() ? "" : "s"}>Final Application Deadline: TBA</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
