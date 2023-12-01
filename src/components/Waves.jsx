import { useReducer, useState } from "react";
import getRandomRGBColor from "./Colors.jsx"
import "./Waves.css";

export default function Waves() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const maxWaveMagnitude = 30;

    function getRandWaveMagnitude(baseVal) {
        const value = Math.random() * 2 * maxWaveMagnitude - maxWaveMagnitude + baseVal;
        return value;
    }

    const defaultWaveProps = {
        baseMagnitude: 0,
        color: null,
        animationSpeed: "10s",
    };

    function Wave(props = defaultWaveProps) {
        const [color, setColor] = useState((props.color) ? props.color : getRandomRGBColor());
        const [magnitude, setMagnitude] = useState(getRandWaveMagnitude(props.baseMagnitude));

        return (
        <svg className="wave" version="1.0" xmlns="http://www.w3.org/2000/svg" height="100%" width="200%" viewBox="0 0 200 100" preserveAspectRatio="none" style={{animation: `wave-side ${props.animationSpeed} linear infinite`}}>
            <path d={`M 0 100 L 0 50 Q 25 ${Number(magnitude)} 50 50 T 100 50 T 150 50 T 200 50 L 200 100 Z`} stroke-width="0.1" fill={color} />
        </svg>);
    }

    return(
        <div className="wave-container" onClick={forceUpdate}>
            <Wave baseMagnitude={0} animationSpeed="8s"/>
            <Wave baseMagnitude={50} animationSpeed="10s"/>
            <Wave baseMagnitude={100} animationSpeed="12s"/>
        </div>
    );
}