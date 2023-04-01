import { Text, Box } from "@chakra-ui/react";

const About = () => {
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
          About
        </Text>
        <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="xl"
          fontFamily="monospace"
        >
          SheCode is a one day event hosted by SIUE for high school girls to
          learn the basics of coding. This is our first time returning since
          before COVID. See the "History" section for press from past events. We
          hope to see you there!
        </Text>
      </Box>
    </Box>
  );
};

export default About;
