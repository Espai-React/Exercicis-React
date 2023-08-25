import { useState, useCallback } from "react";
import UseCallbackFill from "./UseCallbackFill";

const UseCallback = () => {
  const [commuta, setCommuta] = useState(false);
  const [dades, setDades] = useState("Hola a tothom! I també al ");

  const repComentari = useCallback((nom) => {
    return dades + nom;
  }, [dades]);

  //console.log(repComentari);

  return (
    <div>
      <h2>useCallback</h2>
      <hr />
      <div>
        <UseCallbackFill repComentari={repComentari} />
        <button onClick={() => setCommuta(!commuta)}> Clica!</button>
        <p>&nbsp;{commuta && <span>Ha commutat!</span>}</p>
      </div>
    </div>
  );
};

export default UseCallback;
