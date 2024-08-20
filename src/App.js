import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodo,
  selectColor,
  deleteTodo,
  markAllCompleted,
  clearCompleted,
  changeStatusFilter,
  changeColorFilter,
} from "./actions";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleSelectColor = (id, color) => {
    dispatch(selectColor(id, color));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleStatusFilterChange = (status) => {
    dispatch(changeStatusFilter(status));
  };

  const handleColorFilterChange = (color, changeType) => {
    dispatch(changeColorFilter(color, changeType));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const filteredTodos = todos.filter((todo) => {
    if (status === "Active" && todo.completed) return false;
    if (status === "Completed" && !todo.completed) return false;
    if (colors.length > 0 && (!todo.color || !colors.includes(todo.color)))
      return false;
    return true;
  });

  return (
    <div className="card">
      <h1 className="title">Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
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
      <div className="footer">
        <div>
          <span>
            {filteredTodos.length}{" "}
            {filteredTodos.length === 1 ? "item" : "items"} left
          </span>
          <button onClick={() => handleStatusFilterChange("All")}>All</button>
          <button onClick={() => handleStatusFilterChange("Active")}>
            Active
          </button>
          <button onClick={() => handleStatusFilterChange("Completed")}>
            Completed
          </button>
        </div>
        <div className="color-filter">
          <label>Filter by Color:</label>
          {["red", "yellow", "green", "blue", "orange", "purple"].map(
            (color) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                onClick={() =>
                  handleColorFilterChange(
                    color,
                    colors.includes(color) ? "removed" : "added"
                  )
                }
              >
                {color} {colors.includes(color) ? "X" : "+"}
              </button>
            )
          )}
        </div>
        <div className="bottom-buttons">
          <button onClick={handleMarkAllCompleted}>Mark All Completed</button>
          <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
