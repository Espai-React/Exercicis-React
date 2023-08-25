import React, { useState } from "react";
import Select from "./Select";

const CanviNom = () => {
  const [name, setName] = useState({ nameIni: "Frarthur" });
  const canviaNom = (nouNom) => setName({ nameIni: nouNom });

  return (
    <div>
      <Select nom={name.nameIni} siCanvia={canviaNom} />      
    </div>
  );
};

export default CanviNom;
