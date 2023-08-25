import { useRef } from "react";
import Botofill from "./UseImpBoto";

const UseImperativeHandle = () => {
  const botoRef = useRef(null);

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <hr />
      <button onClick={() => botoRef.current.canviCommuta()}>Botó pare</button>
      <Botofill ref={botoRef} />
    </div>
  );
};

export default UseImperativeHandle;
