import { Text, Box, Flex, Image } from "@chakra-ui/react";
import darla1 from "../../assets/press/SheCode-Darla.jpg";
import darla2 from "../../assets/press/SheCode-Darla2.jpg";
import dennis from "../../assets/press/SheCode-Dennis.jpg";
import participants from "../../assets/press/SheCode-Participants.jpg";

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
          take place March 3-5. It will be a fully in person event that will take place at the
          T-Rex innovation center in St. Louis, MO.
        </Text>
        <Flex wrap="wrap" justify="center" maxW="90%" gap="2vw">
          <Image src={darla1} objectFit='cover' alt="Organizers & Students"/>
          <Image src={dennis} objectFit='cover' alt="Organizers & Students"/>
          <Image src={participants} objectFit='cover' alt="Organizers & Students"/>
          <Image src={darla2} objectFit='cover' alt="Organizers & Students"/>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
