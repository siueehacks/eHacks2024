import { Text, Box } from "@chakra-ui/react";

const Schedule = () => {
  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          Schedule
        </Text>
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
          5pm Check-In
          <br />
          6pm Career Fair
          <br />
          7pm Opening Ceremony
        </Text>
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
          Hacking Continues...
        </Text>
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
          10am Hacking Ends
          <br />
          11am Judging
          <br />
          12pm Closing/Prizes
        </Text>
      </Box>
    </Box>
  );
};

export default Schedule;
