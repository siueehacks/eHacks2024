import { Text, Box, Flex, Image, Icon } from "@chakra-ui/react";
import LogLug from "../../assets/press/LogLug.jpg";
import Jared from "../../assets/press/Jared.jpg";
import { creators } from "./Creators.js";
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box
      mb="80vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          Contact Us!
        </Text>
        <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="xl"
          fontFamily="monospace"
        >
          <a href="mailto:siue.ehacks@gmail.com">siue.ehacks@gmail.com</a>
        </Text>

        <Flex wrap="wrap" justify="center" maxW="90%" gap="2vw">
          {creators.map((creator) => (
            <Box
              key={creator.id}
              textAlign="center"
              width={{ base: "100%", md: "calc(50% - 1vw)" }}
              mb={{ base: "4", md: "0" }}
            >
              <Image
                src={creator.name === "Camden McKay" ? LogLug : Jared}
                objectFit="cover"
                alt={`Webmaster ${creator.name}`}
                maxW="400px"
                maxH="400px"
                w="auto"
                h="auto"
                padding="50px"
              />
              <Flex justify="center" align="center">
                <Text fontSize="lg" fontFamily="monospace">
                  {creator.name}{" "}
                </Text>
                <a href={creator.linkedin} style={{ fontSize: "24px", marginLeft: "5px" }}>
                  <Icon as={FaLinkedin} boxSize={8} />
                </a>
              </Flex>
              <Text fontSize="lg" fontFamily="monospace">
                {creator.role}
              </Text>
            </Box>
          ))}
        </Flex>

      </Box>
      <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="3xl"
          fontFamily="monospace"
          padding="25px"
        >
          Event Organizers:
      </Text>
      <Box>
        <ul style={{ fontFamily: "monospace", fontSize: "1.4rem" }}>
          <li>Scott DeLozier</li>
          <li>Joseph Haenel</li>
          <li>Zakery Hickey</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Contact;
