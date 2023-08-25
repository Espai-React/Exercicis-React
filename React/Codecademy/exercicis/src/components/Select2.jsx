import React from "react";

const Select = ({ setName }) => {

  return (
    <div>
      <select id="great-names" onChange={e => setName({ nameIni: e.target.value})}>
        <optgroup label="Great Names">
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Select;
