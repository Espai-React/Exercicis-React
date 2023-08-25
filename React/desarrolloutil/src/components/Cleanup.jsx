import { useState, useEffect } from "react";

const Clicker = () => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    console.log("useFX");
    const handleClick = () => setClick((prev) => prev + 1);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <p>{click}</p>;
};

const Cleanup = () => {
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      {mostrar && <Clicker />}
      <button onClick={() => setMostrar(!mostrar)}>Mostrar / Ocultar</button>
    </div>
  );
};

export default Cleanup;
