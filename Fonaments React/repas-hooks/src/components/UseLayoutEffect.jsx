import { useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    //console.log("useLayoutEffect:", divRef.current.innerHTML);
    divRef.current.innerHTML = "************** Pere Layout *************";
  }, []);

  useEffect(() => {
    //console.log("useEffect");
    divRef.current.innerHTML = "Ramon Effect";
  }, []);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <hr />
      <div ref={divRef}></div>
    </div>
  );

  
};

export default UseLayoutEffect;
