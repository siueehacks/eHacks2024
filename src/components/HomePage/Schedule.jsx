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

  const Day = (props) => {
    return (
      <Box
        minW="36vw"
        maxW="60%"
      >
        <Text fontSize="4xl" fontFamily="monospace" mb="4vh">
          {props.is}
        </Text>
        {props.children}
      </Box>
    );
  }


  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
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
          <Day is="Friday">
            <ScheduleItem time="4:30 PM" event="Bus Leaves SIUE" />
            <ScheduleItem time="5:00 PM" event="Check-In Begins" />
            <ScheduleItem time="6:00 PM" event="Dinner" />
            <ScheduleItem time="7:00 PM" event="Opening Ceremony" />
            <ScheduleItem time="7:30 PM" event="Hack Begins" />
            <ScheduleItem time="8:00 PM" event="Tech Talk: Git/Version Control" />
            <ScheduleItem time="8:45 PM" event="Tech Talk: Writing Readable Software" />
            <ScheduleItem time="10:00 PM" event="Snack" />
          </Day>
          <Day is="Saturday">
            <ScheduleItem time="8:00 AM" event="Breakfast" />
            <ScheduleItem time="9:15 AM" event="Tech Talk: Making HTML More Expressive - Road to Less JavaScript" />
            <ScheduleItem time="10:00 AM" event="AMA: What is Real Dev Life?" />
            <ScheduleItem time="12:00 PM" event="Lunch" />
            <ScheduleItem time="2:30 PM" event="Tech Talk: Cloud Computing" />
            <ScheduleItem time="6:00 PM" event="Dinner" />
            <ScheduleItem time="10:00 PM" event="Snack" />
            <ScheduleItem time="11:00 PM" event="Ping-Pong Tournament" />
          </Day>
          <Day is="Sunday">
            <ScheduleItem time="8:00 AM" event="Breakfast" />
            <ScheduleItem time="10:00 AM" event="Hack Ends" />
            <ScheduleItem time="11:45 AM" event="Lunch" />
            <ScheduleItem time="12:00 PM" event="Closing Ceremony" />
            <ScheduleItem time="1:00 PM" event="Bus Leaves T-Rex" />
          </Day>
        </Flex>
      </Box>
    </Box>
  );
};

export default Schedule;
