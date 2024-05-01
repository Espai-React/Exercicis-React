import React, { useState } from 'react';
import Select2 from './Select2';
import Select2Sibling from './Select2Sibling';


const CanviNom2 = () => {

  const [name, setName] = useState({ nameIni: "Frarthur" });

  return (
    <div>
      <br></br>
      <Select2Sibling name={name.nameIni} />
      <Select2 setName={setName} />
    </div>
  );
}

export default CanviNom2;
