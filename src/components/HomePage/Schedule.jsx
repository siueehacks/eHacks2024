import { Text, Box, Flex } from "@chakra-ui/react";

const Schedule = () => {
  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxW="80vw"
    >
      <Box display="flex" flexDirection="column" alignItems="center" maxW="100%">
        <Text fontSize="6xl" fontFamily="monospace">
          Schedule
        </Text>
        <Text fontSize="xl" fontFamily="monospace" mb="4vh">
          All times are in CST
        </Text>
        <Flex display="flex" flexDirection="row" alignItems="top" wrap="wrap" maxW="100%" justify="center">
          <Box minW="25vw">
            <Text
              mt="-5px"
              mb="3vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="xl"
              fontFamily="monospace"
            >
              Morning - Code Basics
              <br />
              Midday - Lunch
              <br />
              Afternoon - Code Project
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Schedule;
