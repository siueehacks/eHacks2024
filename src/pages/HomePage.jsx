import Home from "../components/HomePage/Home";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Faq from "../components/HomePage/Faq";
import History from "../components/HomePage/History";
import Schedule from "../components/HomePage/Schedule";
import Navbar from "../components/Navbar";
import Waves from "../components/Waves";
import { Button, Flex, Text, Box } from "@chakra-ui/react";
import "./Home.css";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="Page">
      <div>
        <Navbar/>
      </div>
        <Waves />
      <div className="ContentBox">
        <section className="Anchor" id="home">
          <Home />
        </section>
        <section className="Anchor" id="about">
          <About />
        </section>
        <section className="Anchor" id="history">
          <History/>
        </section>
        <section className="Anchor" id="schedule">
          <Schedule />
        </section>
        <section className="Anchor" id="faq">
          <Faq />
        </section>
        <section className="Anchor" id="contact">
          <Contact />
        </section>
        <Flex direction="row" align="center" justify="space-between">
          <Flex align="center" justify="left" w="30%">
            <Link to="/dashboard">
              <Button
                variant="outline"
                className="Button"
                _hover={{ bg: '#969696' }}
                >
                Dashboard
              </Button>
            </Link>
          </Flex>
          <Box>
          <Text>Website made with {'\u2764'} by eHacks volunteers and alumni.</Text>
          </Box>
          <Box w="30%"></Box>
        </Flex>
        <br/>
      </div>
    </div>
  );
};

export default HomePage;
