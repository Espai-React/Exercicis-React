import React, { useState, useEffect } from "react";

function PageTitle() {
  const [name, setName] = useState("");
  useEffect(() => {document.title = `Hi, ${name}`},[name]);

  return (
    <div>
      <p>Use, {name} the input field below to rename this page!</p>
      <input
        type="text"
        placeholder="Webpage name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
  );
}
export default PageTitle;
