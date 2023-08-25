import React from 'react';
import { ToDoItem } from './ToDoItem';


export const TodoList = ({ toDos, check }) => (
  <ul>
    {toDos.map((toDo) => (
      <ToDoItem key={toDo.id} toDo={toDo} check={check} />
    ))}
  </ul>
)




