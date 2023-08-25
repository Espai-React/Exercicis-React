import { PropTypes } from "prop-types";

const Todo = ({ todo, handleCompleted, handleSelected }) => (
  <div>
    <label htmlFor={todo.id}>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.complete}
        onChange={() => handleCompleted(todo.id)}
      />
      {todo.name}
      <button onClick={() => handleSelected(todo.id)}>Select</button>
    </label>
  </div>
);

Todo.propTypes = {
  todo: PropTypes.object,
  handleCompleted: PropTypes.func,
  handleSelected: PropTypes.func,
};

export default Todo;
