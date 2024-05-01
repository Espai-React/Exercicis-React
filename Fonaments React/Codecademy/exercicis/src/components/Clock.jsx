import React from "react";
import { useState } from "react";

const Clock = () => {
  const [valor, setValor] = useState({ data: new Date() });
  
  const componentDidMount = () => {
    setInterval(
      () => {
        setValor({ data: new Date() });
      },
      1000
      );
  }
  componentDidMount();
    return (
      <div>
        <h4>{valor.data.toLocaleString()}</h4>
      </div>
    );
};

export default Clock;
