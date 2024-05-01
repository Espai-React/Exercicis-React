import { useState } from "react";

const Form = () => {
  const [dades, setdades] = useState({
    nom: null,
    cognom: null,
  });

  const handleInputChange = (event) => {
    setdades({
      ...dades,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDades = (event) => {
    event.preventDefault();
    console.log(dades);

  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Form sense guardar dades</h3>
      <form className="row justify-content-center" onSubmit={enviarDades}>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Nom"
            name="nom"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Cognom"
            name="cognom"
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

export default Form;
