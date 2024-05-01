import React from "react";

export const ToDoItem = ({ toDo, check }) => {
  const { id, tasca, acabat } = toDo;
  const clica = () => check(id);

  return (
    <li>
      Tasca: {tasca} Completada:
      <input type="checkbox" onChange={clica} checked={acabat}></input>
    </li>
  );
};
