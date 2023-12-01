import Home from "../components/HomePage/Home";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Faq from "../components/HomePage/Faq";
import History from "../components/HomePage/History";
import Schedule from "../components/HomePage/Schedule";
import Navbar from "../components/Navbar";
import Waves from "../components/Waves";
import "./Home.css";


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
        <p>Website made with {'\u2764'} by eHacks volunteers and alumni.</p>
        <br/>
      </div>
    </div>
  );
};

export default HomePage;
