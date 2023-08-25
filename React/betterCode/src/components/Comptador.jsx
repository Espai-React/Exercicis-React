import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const Comptador = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  // console.count("count al principi", count);

  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // console.log("count a incrementar", count);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    //  console.log("count a decrement", count);
  };

  useEffect(() => {
   // console.count("count a useEffect", count);
  }, [count]);

  return (
    <div>
      <h3>Comptador</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}>
        <button onClick={increment}>Increment</button>
        <span>{count}</span>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

Comptador.propTypes = {
  initialCount: PropTypes.number,
};

export default Comptador;
