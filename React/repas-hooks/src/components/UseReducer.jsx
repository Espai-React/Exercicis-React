import { useReducer } from "react";

const reducer = (state, action) => {
  const { comptador, mostrarText } = state;
  switch (action.type) {
    case "increment":
      return { comptador: comptador + 1, mostrarText };
    case "decrement":
      return { comptador: comptador - 1, mostrarText };
    case "commuta":
      return { comptador, mostrarText: !mostrarText };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    comptador: 0,
    mostrarText: true,
  });
  const { comptador, mostrarText } = state;

  return (
    <div>
      <h2>useReducer</h2>
      <hr />
      <p>{comptador}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "commuta" });
        }}>
        Clica!
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
          dispatch({ type: "commuta" });
        }}>
        Clica!
      </button>
      {mostrarText && <p>Això és un text</p>}
    </div>
  );
};

export default UseReducer;
