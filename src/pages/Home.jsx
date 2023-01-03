import { Text, Button, Box } from "@chakra-ui/react";

const Home = () => {
  const handleClick = () => {
    console.log("Register Button clicked")
  }

  return (
    <Box
      height="100vh"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          eHacks
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          create awesome
        </Text>
      </Box>
      <Button colorScheme="Black" variant="outline">Register</Button>
    </Box>
  );
};

export default Home;
