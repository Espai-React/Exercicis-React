import { useState } from "react";

const ControlProductes = () => {
  const [productes, setProductes] = useState([
    { id: 1, nom: "sabates", quantitat: 24 },
    { id: 2, nom: "pantalons", quantitat: 12 },
    { id: 3, nom: "mitjons", quantitat: 19 },
  ]);
  const [idSeleccionat, setIdSeleccionat] = useState(null);
  const producteSeleccionat = productes.find(
    (producte) => producte.id === idSeleccionat
  );
  const {
    nom: nomSeleccionat = "sense nom",
    quantitat: quantitatSeleccionat = 0,
  } = producteSeleccionat || {};

  /* console.log(
    "idSeleccionat",
    idSeleccionat,
    "producteSeleccionat",
    producteSeleccionat
  ); */
	
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleTria = (idProducte) => {
    setIdSeleccionat(idProducte);
  };

  const variacio = (idProducte, operacio) => {
    setProductes((prev) =>
      prev.map((producte) =>
        producte.id === idProducte
          ? {
              ...producte,
              quantitat: producte.quantitat + (operacio === "+" ? 1 : -1),
            }
          : producte
      )
    );
  };

  return (
    <div>
      <h3>Control productes</h3>
      {productes.map(({ id, nom, quantitat }) => (
        <div key={id}>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <p>{capitalize(nom)}</p>
            <button onClick={() => handleTria(id)}>Tria</button>
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
            <button onClick={() => variacio(id, "+")}>+</button>
            <p>{quantitat}</p>
            <button onClick={() => variacio(id, "-")}>-</button>
          </div>
        </div>
      ))}
      <p>Producte triat: {capitalize(nomSeleccionat)}</p>
      <p>Quantitat: {quantitatSeleccionat}</p>
    </div>
  );
};

export default ControlProductes;
