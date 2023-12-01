import "./NavBar.css";
import nav from "./nav.json";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import getRandomRGBColor from "./Colors.jsx";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      { window.innerWidth >= window.innerHeight &&
        <div className="NavBar" style={{'background-color': getRandomRGBColor()}}>
        {nav.components.map((anchor) => (
          <HashLink to={anchor.id}>{anchor.name}</HashLink>
        ))}
        </div>
      }
      {
        window.innerWidth < window.innerHeight &&
        <div className="NavButtonBar">
          <button className="NavButton" onClick={() => setExpanded(!expanded)}>
            <img src="Burger.webp" alt="Menu"/>
          </button>
        </div>
      }
      {
        window.innerWidth < window.innerHeight && expanded &&
        <div className="NavBurger">
          {nav.components.map((anchor) => (
          <HashLink to={anchor.id} onClick={() => setExpanded(false)}>{anchor.name}</HashLink>
          ))}
        </div>
      }
    </div>
  );
}