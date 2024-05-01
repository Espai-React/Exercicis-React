import { useEffect } from "react";

const UseCallbackFill = ({ repComentari }) => {
 /*  useEffect(() => {
    console.log("Funció cridada");
  }, [repComentari]); */

  return (
    <div>
      {repComentari("Jordi")}
    </div>
  )
}

export default UseCallbackFill;
