import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Faq = () => {
  const FaqItem = (props) => {
    return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize="xl">
              {props.question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="left" fontSize="lg">
          {props.children}
        </AccordionPanel>
      </AccordionItem>
    );
  };

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
          FAQ
        </Text>
        <Accordion
          allowToggle
          allowMultiple
          width="70vw"
          fontFamily="monospace"
        >
          <FaqItem question="When and where is SheCode?">
            SheCode will be held on Saturday, April 22th, 2023 in{" "}
            <ChakraLink href="https://goo.gl/maps/y6jrS4WREQ72" color='teal.200' isExternal>
              Southern Illinois University Edwardsville's Engineering Building
            </ChakraLink>
            .
          </FaqItem>
          <FaqItem question="Where do I park?">
            Parking is available for free in{" "}
            <ChakraLink href="https://goo.gl/maps/fDcNmuUBf769yZJG7" color='teal.200' isExternal>Visitor Lot B</ChakraLink> near
            the Engineering Building.
          </FaqItem>
          <FaqItem question="Who can participate?">
            This event is geared towards female high school students. However,
            mentors will be available for each team to help.
          </FaqItem>
          <FaqItem question="What does this event cost?">
            Nothing! This event is totally free thanks to the generosity of our
            sponsors. There will be a lunch provided for each person.
          </FaqItem>
          <FaqItem question="What do I need to bring?">
            You should bring your cell phone (iOS or Android), and a phone
            charger.
          </FaqItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
