import { Text, Box, Flex, Image } from "@chakra-ui/react";
import careerPrepTalk from "../../assets/press/career-prep.jpg";
import gitHubActionTalk from "../../assets/press/github-actions.jpg";
import group1Working from "../../assets/press/group1Working.jpg";
import group2Working from "../../assets/press/group2Working.jpg";
import nightShot from "../../assets/press/nightShot.jpg";
import softEngPanel from "../../assets/press/softEngPanel.jpg";

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
          eHacks is Southern Illinois University Edwardsville's annual hackathon. It is a 36-hour, weekend long event where participants come
          together to create innovative projects. eHacks provides a great opportunity for students
          to learn new skills, network with other students, and have fun! This year, eHacks will
          take place March 1-3 and will be a fully in person event. Below are some photos from eHacks 2023.
        </Text>
        <Flex wrap="wrap" justify="center" maxW="90%" gap="2vw">
          <Image src={careerPrepTalk} objectFit='cover' alt="Tech Talk on Career Prep"/>
          <Image src={group1Working} objectFit='cover' alt="Participants Working in a Group"/>
          <Image src={group2Working} objectFit='cover' alt="Participants Working in a Group"/>
          <Image src={nightShot} objectFit='cover' alt="Participants Working in a Group"/>
          <Image src={gitHubActionTalk} objectFit='cover' alt="Tech Talk on GitHub Actions"/>
          <Image src={softEngPanel} objectFit='cover' alt="QnA With Panel of Software Engineers"/>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
