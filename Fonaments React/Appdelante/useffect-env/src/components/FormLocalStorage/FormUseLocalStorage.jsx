import { useLocalStorage } from "../../hooks/useLocalStorage";

const FormUseLocalStorage = () => {

  const [dades3, setDades3] = useLocalStorage("dades3", {
    nom: "",
    cognom: "",
  });
  const [submits, setSubmits] = useLocalStorage("submits", 0);
  console.log(dades3, submits);

  const handleInputChange = (event) => {
    setDades3({
      ...dades3,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDades3 = (event) => {
    event.preventDefault();
    setSubmits(submits + 1);
    console.log(dades3);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">
        Form guardant dades3 a local Storage En Obj amb useLocalStorage()
      </h3>
      <form className="row justify-content-center" onSubmit={enviarDades3}>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Nom"
            name="nom"
            value={dades3.nom}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control fs-4"
            type="text"
            placeholder="Cognom"
            name="cognom"
            value={dades3.cognom}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary fs-4" type="submit">
            Enviat {submits} vegades
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUseLocalStorage;
