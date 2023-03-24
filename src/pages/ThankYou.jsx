import { Button, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

const ThankYou = () => {
  return (
    <div className="Page">
      <div className="ContentBox">
        <Flex direction="column" justify="center" gap="2vh" h="100%">
          <Text>Thank you for registering for SheCode 2023!</Text>
          <Link to="/">
            <Button variant="outline">Return to Homepage</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default ThankYou;
