import { Text, Button, Box, Flex, Image } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

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
        <Text fontSize="7xl" fontFamily="monospace">
          {"{"}SheCode{"}"}
        </Text>
        <Text mt="0px" mb="3vh" fontSize="xl" fontFamily="monospace">
          April 22, 2023
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          SIUE
          <br />
          Edwardsville, IL
        </Text>
      </Box>
      {/*}
      <a href="https://formfacade.com/public/110443485080613872121/all/form/1FAIpQLSdJ9sqC-8eBCka37qTaIphhABF4cL9wvk7mzyDcXS0coLOpkQ">
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
      </a>
      */}
      <Link to="/register">
        <Button colorScheme="Black" variant="outline">
          Registration Coming Soon
        </Button>
      </Link>
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
