import { useState, useEffect } from "react";

const IntervalEffect = () => {
  const [number, setNumber] = useState(0);

	useEffect(() => {
		// console.log("Seconds");		
    const intervalId = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h3>Interval Effect</h3>
      {number} segons
    </div>
  );
};

export default IntervalEffect;
