import { useState } from "react";

const TocarArray = () => {
  const initialArray = [1, 2, 3, 4, 5];
	const [array, setArray] = useState(initialArray);
	// console.log(array);
	

  const afegirDavant = () => {
		/* const newArray = [...array];
		newArray.unshift(array[0] - 1);
		setArray(newArray); */
		setArray((prev) => [prev[0] - 1, ...prev]);
  };

	const afegirDarrere = () => {
		/* const newArray = [...array]
		newArray.push(array[array.length - 1] + 1);
		setArray(newArray); */
    setArray((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  return (
    <div>
      {!!array.length && <p>Array: {array.join(", ")}</p>}
      <button onClick={afegirDavant}>Afegir davant -1</button>
      <button onClick={afegirDarrere}>Afegir darrere +1</button>
    </div>
  );
};

export default TocarArray;
