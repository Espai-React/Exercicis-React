import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const resultRef2 = useRef(null);

  const estil = {
    display: "block",
    margin: "15px auto",

  }

  const makeThings = () => {
    alert(inputRef.current.value);
    resultRef.current.innerHTML = inputRef.current.value;
    resultRef2.current.value = inputRef.current.value;
  };

  return (
    <div>
      <br />
      <input style={estil} type="text" ref={inputRef} />
      <button style={estil} onClick={makeThings}>
        Fer coses
      </button>
      <input styel={estil} type="text" ref={resultRef2} />
      <p>
        Resultat: <span ref={resultRef}></span>{" "}
      </p>
    </div>
  );
}

export default UseRef;
