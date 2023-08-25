import { useEffect, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const User = ({ age }) => {

  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  
  const user = useMemo(() => ({ name, age }), [name, age])
  const buttonStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  useEffect(() => {
    // console.log(user);
  }, [user]);

  return (
    <div>
      <h3>User</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}>
        <label htmlFor="inputText">
          Input text:{" "}
          <input
            type="text"
            id="inputText"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button style={buttonStyle} onClick={() => setDark(!dark)}>
          Canvi de Tema
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  age: PropTypes.number,
};

export default User;
