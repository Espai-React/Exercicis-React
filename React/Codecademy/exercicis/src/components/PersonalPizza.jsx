import { useState } from "react";

const options = ["Pinya", "Xampinyons", "Pernil", "Tonyina"];

const PersonalPizza = () => {
  const [selected, setSelected] = useState([]);
  const toggleTopping = ({ target }) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
      if (prev.includes(clickedTopping))
        return prev.filter((element) => element !== clickedTopping);
      else return [...prev, clickedTopping];
    });
  };

  return (
    <div>
      <br />
      {options.map((option) => (
        <button onClick={toggleTopping} key={option} value={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
};

export default PersonalPizza;
