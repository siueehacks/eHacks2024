import React from 'react';
import Confetti from "react-confetti";
import { Button, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="Page">
      <Confetti />
      <div className="ContentBox">
        <Flex direction="column" justify="center" gap="2vh" h="100vh">
          <Text>Thank you for registering for eHacks 2024!</Text>
          <Text>We will be in touch if there are issues with your registration info!</Text>
          <Text><ChakraLink href="https://discord.gg/PRzCKeRQ" target="_blank" textDecoration="underline">Click to join</ChakraLink> the event Discord server so you don't miss any announcements!</Text>
          <Text>If you have any questions check out our <ChakraLink href="/#faq" textDecoration="underline">FAQ</ChakraLink> or reach out at <ChakraLink href="mailto:siue.ehacks@gmail.com">siue.ehacks@gmail.com</ChakraLink></Text>
          <Link to="/">
            <Button variant="outline">Return to Homepage</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default ThankYou;