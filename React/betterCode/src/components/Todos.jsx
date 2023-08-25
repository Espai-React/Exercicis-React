import { useRef, useState } from "react";
import { PropTypes } from "prop-types";
import Todo from "./Todo";

const Todos = ({ initialTodos }) => {

  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const selectedToDoRef = useRef(null);
  selectedToDoRef.current = todos.find((todo) => todo.id === selectedTodoId);
  // console.log("selectedToDoRef", selectedToDoRef.current);  
  
  const handleCompleted = (id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          /*  const newTodo = { ...todo };
          newTodo.complete = !newTodo.complete;
          return newTodo; */
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  };

  const handleSelected = (id) => {
    setSelectedTodoId(id);
  };

  return (
    <div>
      <h3>Todos</h3>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleCompleted={handleCompleted}
          handleSelected={handleSelected}
        />
      ))}
      <p>Selected Todo</p>
      {selectedTodoId ? (
        <Todo
          todo={selectedToDoRef.current}
          handleCompleted={handleCompleted}
          handleSelected={handleSelected}
        />
      ) : (
        <span>
          <i>No selected Todo</i>
        </span>
      )}
    </div>
  );
};

Todos.propTypes = {
  initialTodos: PropTypes.array,
};

export default Todos;
