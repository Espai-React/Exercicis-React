import { useState, useEffect } from "react";

const Pausa = () => {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (!play) return;
    setCount(0);
    const interval = setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => clearInterval(interval);
  }, [play]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setPlay(!play)}>{play ? "Play" : "Pausa"}</button>
    </div>
  );
};

export default Pausa;
