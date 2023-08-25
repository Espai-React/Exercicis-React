import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";

function App() {
  const [toDos, setToDos] = useState([
    { id: 1, tasca: "fregar plats", acabat: false },
  ]);
  const refTasca = useRef();
  const KEY = 'todoApp.toDos';
  
  const novaTasca = () => {
    let tasca = refTasca.current.value;
    if (tasca === "") return;
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: uuidv4(), tasca: tasca, acabat: false },
    ]);
    tasca = null;
  };  
  
    const check = (id) => {
      const nouToDos = [...toDos];
      const nouToDo = nouToDos.find(toDo => toDo.id === id);
      nouToDo.acabat = !nouToDo.acabat;
      setToDos(nouToDos);
    }
  
  const treureTascaFeta = () => {
    const toDosFets = toDos.filter((toDo) => !toDo.acabat);
    setToDos(toDosFets);
  };

  const pendents = toDos.filter((toDo) => !toDo.acabat).length;

  useEffect(() => {
    const toDOsGuardats = JSON.parse(localStorage.getItem(KEY))
    if (toDOsGuardats) setToDos(toDOsGuardats);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(toDos))
  }, [toDos]);

  return (
    <>
      <h2>Feines pendents:</h2>
      <TodoList toDos={toDos} check={check} />
      <input ref={refTasca} type="text" placeholder="Nova tasca" />
      <button onClick={novaTasca}>✅</button>
      <button onClick={treureTascaFeta}>❌</button>
      <p>Et queden {pendents} per acabar</p>
    </>
  );
}
export default App;
