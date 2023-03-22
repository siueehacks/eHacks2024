import { Text, Button, Box, Flex, Image } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";
import ObjectComputingPresents from "../assets/sponsorLogos/ObjectComputingLight.webp";

const Home = () => {
  const deadline = new Date("February 21, 2023 12:00:00");
  const handleRegister = () => {
    console.log("Register Button clicked");
  };

  return (
    <Box
      height="100vh"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <a href="https://www.objectcomputing.com/" rel="external">
          <Image
            src={ObjectComputingPresents}
            alt="Object Computing"
            maxW="20vmax"
            maxH="13vh"
            mt="8vmin"
          />
        </a>
        <Text fontSize="xl" fontFamily="monospace" ml="2vw">
          Presents
        </Text>
        <Text fontSize="7xl" fontFamily="monospace">
          {"{"}eHacks{"}"}
        </Text>
        <Text mt="0px" mb="3vh" fontSize="xl" fontFamily="monospace">
          March 3-5, 2023
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          T-Rex Innovation Center
          <br />
          St. Louis, MO
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
      <Button colorScheme="Black" variant="outline">
        Event At Full Capacity
      </Button>
      <Box>
        <Text
          mt="10px"
          mb="3vh"
          maxW="70vw"
          fontSize="xl"
          fontFamily="monospace"
        >
          <Text as="s">Priority Application Deadline: 2/15/2023</Text>
          <br />
          {deadline > new Date() ? (
            <Text>Final Application Deadline: 2/24/2023</Text>
          ) : (
            <Text as="s">Final Application Deadline: 2/24/2023</Text>
          )}
          <Text>Event Has Met Full Capacity</Text>
        </Text>
      </Box>
      <SocialLinks />
    </Box>
  );
};

export default Home;
