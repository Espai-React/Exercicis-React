import { useState, useEffect } from 'react';
import './MouseColor.css'

const MouseColor = () => {
  console.log("Pintem el quadrat");
  const [color, setColor] = useState("orange");
  console.log(color);

  useEffect(() => {
    const mouse = (e) => {
      if (e.clientX < window.innerWidth / 2) return setColor("orange");
      setColor("blue");
    };
    window.addEventListener("mousemove", mouse);
    console.log("Esdeveniment actiu");    
    return () => {
      console.log("Esdeveniment esborrat");
      window.removeEventListener("mousemove", mouse);
    };
  }, []);

  return <div className={`quadrat ${color}`}></div>;
};

export default MouseColor;
