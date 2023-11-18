import Home from "../components/HomePage/Home";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Faq from "../components/HomePage/Faq";
import History from "../components/HomePage/History";
import Schedule from "../components/HomePage/Schedule";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/HomePage/ComingSoon";
import "./Home.css";


const HomePage = () => {
  return (
    <div className="Page">
      {/* <div>
        <Navbar/>
      </div> */}
      <div className="ContentBox">
        <section className="Anchor" id="comingSoon">
          <ComingSoon />
        </section>
        {/* <section className="Anchor" id="home">
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
        <p>Website made with {'\u2764'} by SIUE Student Morgan Jackson</p> */}
        <br/>
      </div>
    </div>
  );
};

export default HomePage;
