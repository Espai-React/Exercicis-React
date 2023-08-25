import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const nomRef = useRef(null);

  const handleClick = () => {
    nomRef.current.innerHTML = inputRef.current.value;
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div>
      <h2>useRef</h2>
      <hr />
      <p ref={nomRef}>Pedro</p>
      <input type="text" placeholder="Name. . ." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default UseRef;
