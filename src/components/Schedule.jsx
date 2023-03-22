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
              mb="0vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="3xl"
              fontFamily="monospace"
            >
              Friday
            </Text>
            <Text
              mt="-5px"
              mb="3vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="xl"
              fontFamily="monospace"
            >
              5:00pm Check-In
              <br />
              6:00pm Career Fair
              <br />
              6:00pm Dinner Begins
              <br />
              7:00pm Opening Ceremony
              <br />
              7:20pm Team Formation
              <br />
              7:30pm Hacking Begins
              <br />
              10:00pm Late Night Snack
            </Text>
          </Box>
          <Box minW="25vw">
            <Text
              mt="-5px"
              mb="0vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="3xl"
              fontFamily="monospace"
            >
              Saturday
            </Text>
            <Text
              mt="-5px"
              mb="3vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="xl"
              fontFamily="monospace"
            >
              8:00am Breakfast
              <br />
              12:00pm Lunch
              <br />
              4:00pm Dev Post Due
              <br />
              6:00pm Dinner
              <br />
              10:00pm Late Night Snack
              <br />
              11:00pm Ping Pong Tournament
            </Text>
          </Box>
          <Box minW="25vw">
            <Text
              mt="-5px"
              mb="0vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="3xl"
              fontFamily="monospace"
            >
              Sunday
            </Text>
            <Text
              mt="-5px"
              mb="3vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="xl"
              fontFamily="monospace"
            >
              8:00am Breakfast
              <br />
              10:00am Hacking Ends
              <br />
              10:30am Judging Begins
              <br />
              12:00pm Closing/Awards
              <br />
              12:45pm SIUE Bus Departs
            </Text>
          </Box>
        </Flex>
        <Text fontSize="4xl" fontFamily="monospace" mb="4vh">
          Tech Talks
        </Text>
        <Flex display="flex" flexDirection="row" alignItems="top" wrap="wrap" maxW="100%" justify="center">
          <Box minW="25vw">
            <Text
              mt="-5px"
              mb="0vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="3xl"
              fontFamily="monospace"
            >
              Friday
            </Text>
            <Text
              mt="-5px"
              mb="3vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="xl"
              fontFamily="monospace"
            >
              8:00pm Intro to TrinoDB
              <br />
              8:45pm Intro to TypeScript
            </Text>
          </Box>
          <Box minW="25vw">
            <Text
              mt="-5px"
              mb="0vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="3xl"
              fontFamily="monospace"
            >
              Saturday
            </Text>
            <Text
              mt="-5px"
              mb="3vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="xl"
              fontFamily="monospace"
            >
              10:00am TBA
              <br />
              2:30pm TBA
            </Text>
          </Box>
          <Box minW="25vw">
            <Text
              mt="-5px"
              mb="0vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="3xl"
              fontFamily="monospace"
            >
              Sunday
            </Text>
            <Text
              mt="-5px"
              mb="3vh"
              ml="5vmin"
              mr="5vmin"
              fontSize="xl"
              fontFamily="monospace"
            >
              TBD
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Schedule;
