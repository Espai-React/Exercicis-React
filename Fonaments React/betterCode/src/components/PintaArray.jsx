const PintaArray = () => {
  const array = ["primer", "segon", "tercer"];
	const user = { name: "Pepe" };

  return (
    <div>
      <h3>Pinta Array</h3>
      <div>
        {
          /* !!array.length */ array.length !== 0 && (
            <span>Elements array: {array.join(", ")}</span>
          )
        }
      </div>
      <div>
        {
          /* !!user */ user !== null && (
            <span>Elements user: {user.name}</span>
          )
        }
      </div>
    </div>
  );
};

export default PintaArray;
