import { Text, Box, Flex } from "@chakra-ui/react";

const Schedule = () => {

  const ScheduleItem = ({ time, event }) => {
    return (
      <Flex direction="row">
        <Text
          ml="4vh"
          mb="1vh"
          mr="1vmin"
          fontSize="xl"
          fontFamily="monospace"
          align="right"
          width="25%"
        >
          {time}
        </Text>
        <Text
          mr="4vh"
          mb="1vh"
          ml="5vmin"
          fontSize="xl"
          fontFamily="monospace"
          align="left"
          width="75%"
        >
          {event}
        </Text>
      </Flex>
    );
  }


  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxW="80vw"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="100%"
        
      >
        <Text fontSize="6xl" fontFamily="monospace">
          Schedule
        </Text>
        <Text fontSize="xl" fontFamily="monospace" mb="4vh">
          All times are in CST
        </Text>
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="top"
          wrap="wrap"
          maxW="100%"
          justify="center"
        >
          <Box minW="36vw">
            <ScheduleItem time="10:00 AM" event="Check-In Begins" />
            <ScheduleItem time="10:15 AM" event="Fun & Games" />
            <ScheduleItem time="10:30 AM" event="Welcome & Introductions" />
            <ScheduleItem time="10:45 AM" event="Begin Working On Projects" />
            <ScheduleItem time="12:15 PM" event="Lunch On Us" />
            <ScheduleItem time="12:45 PM" event="Resume Working On Projects" />
            <ScheduleItem time="2:15 PM" event="Coming To A Close" />
            <ScheduleItem time="2:30 PM" event="Event Ends" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Schedule;
