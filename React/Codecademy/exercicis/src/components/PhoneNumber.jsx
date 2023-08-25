import React, { useState } from "react";

const PhoneNumber = () => {
  const validPhoneNumber = /^\d{1,10}$/;
  const [phone, setPhone] = useState();

  const handleChange = (event) => {
    const newPhone = document.getElementById("phone-input").value;
    console.log(newPhone);
    const isValid = validPhoneNumber.test(newPhone);
    isValid && setPhone(newPhone);
  };

  return (
    <div>
      <label name="phone-input">Phone: </label>
      <input
        type="number"
        id="phone-input"
      />
      <button onClick={handleChange}>Clica!</button>
      <p>Nou telèfon: {phone}</p>
    </div>
  );
};

export default PhoneNumber;
