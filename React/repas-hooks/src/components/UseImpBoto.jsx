import { forwardRef, useImperativeHandle } from "react";
import { useState } from "react";

const Botofill = forwardRef((props, botoRef) => {
  const [commuta, setCommuta] = useState(false);
  useImperativeHandle(botoRef, () => ({
    canviCommuta: () => setCommuta(!commuta)
  }))
  return (
    <>
      <button onClick={() => setCommuta(!commuta)}>Botó fill</button>
      {commuta ? <p>Ha commutat a A!</p> : <p>Ha commutat a B!</p>}
    </>
  );
});

export default Botofill;
