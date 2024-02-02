import { Text, Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import darla1 from "../../assets/press/SheCode-Darla.jpg";
import darla2 from "../../assets/press/SheCode-Darla2.jpg";
import dennis from "../../assets/press/SheCode-Dennis.jpg";
import participants from "../../assets/press/SheCode-Participants.jpg";
import rachel from "../../assets/press/SheCode-Rachel.jpg";
import "./Basics.css";

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
          Sponsors
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
          <Text color="teal.200">
            <ChakraLink
              href="https://www.siue.edu/news/2020/03/SIUESheCodeEngagesYoungWomeninComputerScience.shtml"
              isExternal
            >
              2020 Press Release
              <ExternalLinkIcon mx="4px" />
            </ChakraLink>
            <br />
            <ChakraLink
              href="https://www.siue.edu/news/2018/12/SIUE-SheCode-Event-Engages-Young-Women-in-Computer-Science.shtml"
              isExternal
            >
              2018 Press Release
              <ExternalLinkIcon mx="4px" />
            </ChakraLink>
          </Text>
          <br />
          Photos:
        </Text>
        <Flex wrap="wrap" justify="center" maxW="90vw" gap="2vw">
          <Image src={darla1} objectFit='cover' alt="Organizers & Students"/>
          <Image src={dennis} objectFit='cover' alt="Organizers & Students"/>
          <Image src={participants} objectFit='cover' alt="Organizers & Students"/>
          <Image src={darla2} objectFit='cover' alt="Organizers & Students"/>
          <Image src={rachel} objectFit='cover' alt="Organizers & Students"/>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
