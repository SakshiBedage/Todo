import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  markAllCompleted,
  clearCompleted,
  changeStatusFilter,
  changeColorFilter,
} from "./actions";

const Footer = () => {
  const [reducerCallCount, setReducerCallCount] = useState(0);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);

  useEffect(() => {
    const incrementCount = (count) => {
      return count + 1;
    };

    setReducerCallCount(incrementCount);
  }, [todos, status, colors]);

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
    <div className="footer">
      <div>
        <span>
          {filteredTodos.length} {filteredTodos.length === 1 ? "item" : "items"}{" "}
          left
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
        {["red", "yellow", "green", "blue", "orange", "purple"].map((color) => (
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
        ))}
      </div>
      <div className="bottom-buttons">
        <button onClick={handleMarkAllCompleted}>Mark All Completed</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <br />
      <br />
      <h4>Filters Reducer called {reducerCallCount} times</h4>
    </div>
  );
};

export default Footer;
