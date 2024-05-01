import { useState, useEffect } from "react";

const Interval = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

const Cleanup2 = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Interval />}
      <button onClick={() => setShow(!show)}>Mostrar / Ocultar</button>
    </div>
  );
};

export default Cleanup2;
