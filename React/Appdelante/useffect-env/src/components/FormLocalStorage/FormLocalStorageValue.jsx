import { useState } from "react";

const FormLocalStorage = () => {
  const [nom, setNom] = useState(window.localStorage.getItem("nom") ?? "");
  console.log("nom", nom);
  const [cognom, setCognom] = useState(
  window.localStorage.getItem("cognom") ?? ""
  );
  console.log("cognom", cognom);

  const handleInputChangeNom = ({ target }) => {
    try {
      setNom(target.value);
      window.localStorage.setItem("nom", target.value);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChangeCognom = ({ target }) => {
    try {
      setCognom(target.value);
      window.localStorage.setItem("cognom", target.value);
    } catch (err) {
      console.error(err);
    }
  };

  const enviarDades = (event) => {
    event.preventDefault();
    console.log(nom, cognom);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">
        Form guardant dades a local Storage En Value
      </h3>
      <form className="row justify-content-center" onSubmit={enviarDades}>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Nom"
            name="nom"
            value={nom}
            onChange={handleInputChangeNom}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Cognom"
            name="cognom"
            value={cognom}
            onChange={handleInputChangeCognom}
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
