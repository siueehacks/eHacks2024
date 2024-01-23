import { Text, Box, Flex, Image } from "@chakra-ui/react";
import darla2 from "../../assets/press/SheCode-Darla2.jpg";
import participants from "../../assets/press/SheCode-Participants.jpg";
import careerPrepTalk from "../../assets/press/career-prep.jpg";
import gitHubActionTalk from "../../assets/press/github-actions.jpg";

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
          eHacks is Southern Illinois University Edwardsville's annual hackathon, making our
          return from pre-pandemic. It is a 36-hour, weekend long event where participants come
          together to create innovative projects. eHacks provides a great opportunity for students
          to learn new skills, network with other students, and have fun! This year, eHacks will
          take place March 1-3 and will be a fully in person event.
        </Text>
        <Flex wrap="wrap" justify="center" maxW="90%" gap="2vw">
          <Image src={careerPrepTalk} objectFit='cover' alt="Tech Talk on Career Prep"/>
          <Image src={participants} objectFit='cover' alt="Organizers & Students"/>
          <Image src={gitHubActionTalk} objectFit='cover' alt="Tech Talk on GitHub Actions"/>
          <Image src={darla2} objectFit='cover' alt="Organizers & Students"/>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
