const Intro = () => {
  const valor = "inútil";
  const funcio = () => "desastre";
  const Text = (blabla) => <span>{blabla}</span>;

  return (
    <div>
      <h2>Desarrollo útil</h2>
      <h2>Desarrollo {valor}</h2>
      <h2>
        Desarrollo{" "}
        {["e", "s", "p", "e", "c", "t", "a", "c", "u", "l", "a", "r"]}
      </h2>
      <h2>Desarrollo {funcio()}</h2>
      <h2>Desarrollo {() => funcio()} és una funció</h2>
      <h2 tabIndex={5}>Desarrollo {funcio} ídem</h2>
      <h2 onClick={() => alert("clic!")}>Desarrollo {funcio} ídem</h2>
      <div>
        {Text("Estem ")}
        {Text("aprenent ")}
        {Text("de ")}
        {Text("React")}
      </div>
    </div>
  );
};

export default Intro;
