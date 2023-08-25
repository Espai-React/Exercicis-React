import { useEffect, useMemo, useState, useRef } from "react";
const Form = () => {
  const [person, setPerson] = useState({});
  const edatRef = useRef(null);
  const nomRef = useRef(null);
  const { edat, nom } = person;
  const [darkMode, setDarkMode] = useState(false);
  // console.log(darkMode);

  const onSubmit = (e) => {
    e.preventDefault();
    setPerson({ edat: edatRef.current.value, nom: nomRef.current.value });
  };

  const edicioDades = useMemo(() => {
    // console.log("useMemo");
    const edatDades = edat + " anys";
    const nomDades = "Hola " + nom;
    return { edatDades, nomDades };
  }, [edat, nom]);

  const { edatDades, nomDades } = edicioDades;
  console.log(edicioDades);
  

  useEffect(() => {
   // console.log("person", person);
  }, [person]);

  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: darkMode ? "gainsBoro" : "gray",
        color: !darkMode ? "white" : "black",
      }}>
      <h3>Full Name mode fosc</h3>
      <div style={flex}>
        <label htmlFor="nomInput">
          Edat <input type="number" id="nomInput" ref={edatRef} />
        </label>
        <label htmlFor="cognomInput">
          Nom <input type="text" id="cognomInput" ref={nomRef} />
        </label>
        <button>Clicar</button>
      </div>
      <div style={{ height: "30px" }}>
        {edat && nom && (
          <p style={{margin: 0}}>
            {nomDades}, que tens {edatDades}
          </p>
        )}
      </div>
      <label htmlFor="darkMode">
        Dark Mode{" "}
        <input
          type="checkbox"
          value={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </label>
    </form>
  );
};

export default Form;
