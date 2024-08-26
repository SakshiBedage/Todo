import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, selectColor, deleteTodo } from "./actions";
import useRenderCount from "./useRenderCount";

const Tasks = () => {
  const renderCount = useRenderCount();

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);

  const filteredTodos = todos.filter((todo) => {
    if (status === "Active" && todo.completed) return false;
    if (status === "Completed" && !todo.completed) return false;
    if (colors.length > 0 && (!todo.color || !colors.includes(todo.color)))
      return false;
    return true;
  });

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleSelectColor = (id, color) => {
    dispatch(selectColor(id, color));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <select
              value={todo.color || ""}
              onChange={(e) => handleSelectColor(todo.id, e.target.value)}
            >
              <option value="">Select color</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
            </select>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h4>***** Tasks component rendered {renderCount} times *****</h4>
    </>
  );
};

export default Tasks;
