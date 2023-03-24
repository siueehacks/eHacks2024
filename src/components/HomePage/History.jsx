import { Text, Box, Flex, Image } from "@chakra-ui/react";
import darla1 from "../../assets/press/SheCode-Darla.jpg";
import darla2 from "../../assets/press/SheCode-Darla2.jpg";
import dennis from "../../assets/press/SheCode-Dennis.jpg";
import participants from "../../assets/press/SheCode-Participants.jpg";
import rachel from "../../assets/press/SheCode-Rachel.jpg";
import "./Basics.css"


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
          History
        </Text>
        <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="xl"
          fontFamily="monospace"
        >
          Past Press:
          <Text color="#9FDFFF">
            <a href="https://www.siue.edu/news/2020/03/SIUESheCodeEngagesYoungWomeninComputerScience.shtml">2020 Press Release</a><br/>
            <a href="https://www.siue.edu/news/2018/12/SIUE-SheCode-Event-Engages-Young-Women-in-Computer-Science.shtml">2018 Press Release</a>
          </Text>
          <br/>
          Photos:
        </Text>
        <Flex wrap="wrap" justify="center" maxW="90%" gap="2vw">
          <Image src={darla1}/>
          <Image src={dennis}/>
          <Image src={participants}/>
          <Image src={darla2}/>
          <Image src={rachel}/>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
