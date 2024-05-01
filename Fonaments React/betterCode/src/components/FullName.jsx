import { useState } from "react";

const FullName = () => {
  const [nom, setNom] = useState("");
  const [cognom, setCognom] = useState("");
	// const [nomComplert, setNomComplert] = useState("");
	const nomComplert = nom + " " + cognom;

  /* useEffect(() => {
    setNomComplert(nom + " " + cognom);
  }, [nom, cognom]); */

  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  };

  return (
    <div>
      <h3>Full Name</h3>
      <div style={flex}>
        <label htmlFor="nomInput">
          Nom{" "}
          <input
            type="text"
            id="nomInput"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </label>
        <label htmlFor="cognomInput">
          Cognom{" "}
          <input
            type="text"
            id="cognomInput"
            value={cognom}
            onChange={(e) => setCognom(e.target.value)}
          />
				</label>
      </div>
				<p>El nom complert és: {nomComplert}</p>
    </div>
  );
};

export default FullName;
