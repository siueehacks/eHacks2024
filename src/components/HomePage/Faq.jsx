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
          <FaqItem question="When and where is eHacks?">
            The event will take place at the T-Rex Innovation Center in downtown STL.
            The event will start at 4:30 PM on March 1st and end at noon on March 3rd.
            More information about specific bus times will be sent out closer to the event.
          </FaqItem>
          <FaqItem question="What is a hackathon?">
            A hackathon is an event where people come together to create
            something new. It is a place where you can meet new people and
            learn new skills!
          </FaqItem>
          <FaqItem question="How much coding experience do I need to participate?">
            Absolutely none! eHacks is open to participants of all skill levels as long as they
            are college students. We will have mentors available to help you with any questions you may have.
          </FaqItem>
          <FaqItem question="Who can participate?">
            Anyone age 18 or older who is currently enrolled in a US college is able to attend. Applying to
            participate does not guarantee your application is accepted until we review it. You will receive
            an email if you are accepted.
          </FaqItem>
          {/* <FaqItem question="What does priority application mean?">
            Priority application means you will be guaranteed a free t-shirt and
            potentially other goodies if you are accepted.
          </FaqItem> */}
          <FaqItem question="Am I guaranteed to participate if I apply by the deadline?">
            While eHacks is open to anyone who is currently enrolled in a US college,
            we still need to review your application to verify your eligibility, though it
            is highly likely if you are a US college student. We will notify you if you are accepted.
          </FaqItem>
          <FaqItem question="Why do you require resumes?">
            eHacks starts out with a career fair. We collect resumes to share them with the sponsors, and
            potentially help you land a job or internship!
          </FaqItem>
          <FaqItem question="Will there be food?">
            Yes! All of the meals will be provided at no charge to the participants over the course of the weekend.
            There will also be plenty of snacks and drinks available throughout as well.
          </FaqItem>
          <FaqItem question="What should I bring?">
            You should bring a laptop/something to code on, any chargers you might need, and anything you would bring
            on a two day trip (clothes, toiletries, etc.). We also recommend that you bring stuff to sleep on.
          </FaqItem>
          <FaqItem question="Will sleeping accommodations be provided?">
            Unfortunately, we will not be able to provide any sleeping accommodations. We recommend that if you plan on
            spending the night at the venue, that you bring sleeping bags and pillows.
          </FaqItem>
          <FaqItem question="Do I need to stay the whole time?">
            You are allowed to leave the venue at any time.
            However, there will only transportation provided to and from SIUE at the start and end of the event.
          </FaqItem>
          <FaqItem question="Will there be showers/hygiene options?">
            There are no showers available at the venue. However, there will be a few bathrooms available for
            use. We recommend that you bring a change of clothes or two and any other hygiene products you need to
            freshen up through the weekend.
          </FaqItem>
          <FaqItem question="Will there be travel reimbursements?">
            We are unfortunately not able to provide travel reimbursements.
          </FaqItem>
          <FaqItem question="What if I don't have a team?">
            You can form a team using the #form-team channel in our Discord server.
            We can also help put you on a team the day of the event.
          </FaqItem>
          <FaqItem question="How big can my team be?">
            We do not put a restriction on team size, but we give out prizes in sets of four.
            If you want, you can also work by yourself.
          </FaqItem>
          <FaqItem question="What should I take away from this experience?">
            Attending eHacks will enhance your collaborative problem-solving skills through real-
            world projects. Simultaneously, you will build connections with recruiters and peers from
            various fields, building your network and opportunities for your future.
          </FaqItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
