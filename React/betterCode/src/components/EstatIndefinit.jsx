import { useState } from "react";

const EstatIndefinit = () => {
  const [usuari] = useState(null);
  const [usuari2, setUsuari2] = useState({
    nom: "Pep",
    usuari: "pepet",
    correu: "pepet@pepet",
  });
  const [inputValor, setInputValor] = useState("");
  const [formulari, setFormulari] = useState({
    nom: "",
    usuari: "",
    correu: "",
	});
	// console.log("formulari", formulari);
	

  const handleFormulari = (e) => {
		const prop = e.target.id.split("Input")[0];
		console.log(prop);		
    setFormulari({ ...formulari, [prop]: e.target.value });
  };

  return (
    <div>
      <h3>Estat indefinit amb ?</h3>
      <p>Usuari: {usuari?.nom}</p>
      <p>Correu: {usuari?.correu}</p>
      <p>Imatges: {usuari?.imatges[1]}</p>
      <hr />
      <h3>Canvia valors d&apos;estat en un objecte</h3>
      <input
        type="text"
        placeholder="Nom nou . . . "
        value={inputValor}
        onChange={(e) => setInputValor(e.target.value)}
      />
      <button onClick={() => setUsuari2({ ...usuari2, nom: inputValor })}>
        Canvia el nom
      </button>
      <p>El nom és: {usuari2.nom}</p>
      <hr />
      <h3>Formulari en objecte en un sol estat</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="nomInput">
          Nom usuari:{" "}
          <input
            type="text"
            id="nomInput"
            value={formulari.nom}
            onChange={handleFormulari}
          />
        </label>
        <label htmlFor="usuariInput">
          Nom d&apos;usuari:
          <input
            type="text"
            id="usuariInput"
            value={formulari.usuari}
            onChange={handleFormulari}
          />
        </label>
        <label htmlFor="correuInput">
          Correu:
          <input
            type="text"
            id="correuInput"
            value={formulari.correu}
            onChange={handleFormulari}
          />
        </label>
      </div>
      <p>Nom Usuari: {formulari.nom}</p>
      <p>Nom d&apos;usuari: {formulari.usuari}</p>
      <p>Correu: {formulari.correu}</p>
    </div>
  );
};

export default EstatIndefinit;
