import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, "", 2));
    console.log(JSON.stringify(profile, "", 2));
  };

  return (
    <div>
      <h4>Edit Profile</h4>
      <form onSubmit={handleSubmit}>
        <input
          style={{ display: "block", margin: "5px auto" }}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={profile.firstName || ""}
          onChange={handleChange}
        />
        <input
          style={{ display: "block", margin: "5px auto" }}
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={profile.lastName || ""}
          onChange={handleChange}
        />
        <input
          style={{ display: "block", margin: "5px auto" }}
          type="date"
          name="bday"
          value={profile.bday || ""}
          onChange={handleChange}
        />
        <input
          style={{ display: "block", margin: "5px auto" }}
          type="password"
          placeholder="password"
          name="password"
          value={profile.password || ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
