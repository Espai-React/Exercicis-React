import { useState, useEffect } from "react";

const useEfect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Botó comptador +1</button>
      <button onClick={() => setCount(count + 2)}>Botó comptador +1</button>
      <h3>{count}</h3>
    </div>
  );
};

export default useEfect;
