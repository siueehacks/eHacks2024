import { Button, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Home.css";

const ThankYou = () => {
  return (
    <div className="Page">
      <div className="ContentBox">
        <Flex direction="column" justify="center" gap="2vh" h="100vh">
          <Text>Thank you for registering for eHacks 2024!</Text>
          <Text>Your registration is accepted, conditional on a valid waiver.</Text>
          <Text>If you did not submit a waiver, you must bring a signed copy in person to the event.</Text>
          <Text>We will be in touch if there are issues with your registration info!</Text>
          <Link to="/">
            <Button variant="outline">Return to Homepage</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default ThankYou;
