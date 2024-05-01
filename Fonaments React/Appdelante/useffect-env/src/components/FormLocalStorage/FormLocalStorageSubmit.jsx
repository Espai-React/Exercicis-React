import { useState } from "react";

const FormLocalStorageSubmit = () => {
  const [dades2, setdades2] = useState(() => {
    const item = window.localStorage.getItem("dades2");
    return !item ? { nom: "", cognom: "" } : JSON.parse(item);
  });
  console.log("dades2", dades2);

  const handleInputChange = (event) => {
    setdades2({
      ...dades2,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDades = (event) => {
    event.preventDefault();
    console.log(dades2);
    window.localStorage.setItem("dades2", JSON.stringify(dades2));
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">
        Form guardant dades a local Storage En Obj i Submit
      </h3>
      <form className="row justify-content-center" onSubmit={enviarDades}>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Nom"
            name="nom"
            value={dades2.nom}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Cognom"
            name="cognom"
            value={dades2.cognom}
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

export default FormLocalStorageSubmit;
