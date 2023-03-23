import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Schedule from "../components/Schedule";
import Navbar from "../components/Navbar";
import "./Home.css";

const Register = () => {
  return (
    <div className="Page">
      <div className="ContentBox">
        <form>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        </form>

        <p>Website made with {"\u2764"} by SIUE Student Morgan Jackson</p>
        <br />
      </div>
    </div>
  );
};

export default Register;
