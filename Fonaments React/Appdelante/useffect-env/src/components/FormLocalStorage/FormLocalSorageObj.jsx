import { useState } from "react";

const FormLocalStorage = () => {
  const [dades, setdades] = useState(
    !window.localStorage.getItem("dades")
      ? { nom: "", cognom: "" }
      : JSON.parse(window.localStorage.getItem("dades"))
  );
  console.log("dades", dades);

  const handleInputChange = (event) => {
    let novesDades;
    setdades(
      (novesDades = {
        ...dades,
        [event.target.name]: event.target.value,
      })
    );
    window.localStorage.setItem("dades", JSON.stringify(novesDades));
  };

  const enviarDades = (event) => {
    event.preventDefault();
    console.log(dades);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">
        Form guardant dades a local Storage En Obj
      </h3>
      <form className="row justify-content-center" onSubmit={enviarDades}>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Nom"
            name="nom"
            value={dades.nom}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Cognom"
            name="cognom"
            value={dades.cognom}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary fs-4" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLocalStorage;
