import React, { useEffect, useState } from "react";
import "./nightEffect.css"; // Import your CSS file

const TextShadowComponent = () => {
  const [dotsText, setDotsText] = useState("");
  const [numDots, setNumDots] = useState(0);
  const maxDots = 5;
  const [increasing, setIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (increasing) {
        if (numDots < maxDots) {
          setNumDots(numDots + 1);
        } else {
          setIncreasing(false);
        }
      } else {
        if (numDots > 0) {
          setNumDots(numDots - 1);
        } else {
          setIncreasing(true);
        }
      }

      let dots = "";
      for (let i = 0; i < numDots; i++) {
        dots += ".";
      }
      setDotsText(dots);
    }, 500); // Adjust typing speed (in milliseconds)

    return () => clearInterval(interval);
  }, [numDots, increasing]);

  return (
    <div className="sec12">
      <h1 className="textshadow hep12">Working on them{dotsText}</h1>
      <div className="tags">
        <p className="textshadow hep12"><span className="span12">showcasing them pretty soon {dotsText} </span></p>
      </div>
    </div>
  );
};

export default TextShadowComponent;
