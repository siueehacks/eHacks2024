import { Text, Box, Flex, Image, Icon } from "@chakra-ui/react";
import { creators } from "./Creators.js";
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box>
      <Box
        mb="100vh"
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
        </Box>

        <Text
            mt="-5px"
            ml="5vmin"
            mr="5vmin"
            fontSize="3xl"
            fontFamily="monospace"
            padding="25px"
            paddingBottom="0"
          >
            Event Organizers:
        </Text>
        <Flex wrap="wrap" justify="center" maxW="90%" gap="2vw">
          {creators.map((creator) => (
            <Flex
              key={creator.id}
              direction="column"
              align="center"
              textAlign="center"
              mb={{ base: "4", md: "0" }}
            >
              <Image
                src={creator.image}
                objectFit="cover"
                alt={`${creator.role} ${creator.name}`}
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
            </Flex>
          ))}
        </Flex>
        <Text
            mt="-5px"
            ml="5vmin"
            mr="5vmin"
            fontSize="3xl"
            fontFamily="monospace"
            padding="25px"
            paddingBottom="0"
          >
            Not Pictured:
        </Text>
        <Box>
          <ul style={{ fontFamily: "monospace", fontSize: "1.4rem" }}>
            <li>Simran Patel</li>
            <li>Joseph Haenel</li>
            <li>Zakery Hickey</li>
            <li>Edward Prenzler</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
