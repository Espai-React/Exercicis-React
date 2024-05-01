import React, { useState } from "react";

export default function Login() {
  const [formState, setFormaState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormaState((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  
  return (
    <div>
      <h4>Login</h4>
      <form>
        <input
          style={{ display: "block", margin: "auto" }}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          style={{ display: "block", margin: "5px auto" }}
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
