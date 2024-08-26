import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusFilter, changeColorFilter } from "./actions";
import useRenderCount from "./useRenderCount";

const StatusAndColorFilter = () => {
  const renderCount = useRenderCount();

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);

  const handleStatusFilterChange = (status) => {
    dispatch(changeStatusFilter(status));
  };

  const handleColorFilterChange = (color, changeType) => {
    dispatch(changeColorFilter(color, changeType));
  };

  const filteredTodos = todos.filter((todo) => {
    if (status === "Active" && todo.completed) return false;
    if (status === "Completed" && !todo.completed) return false;
    if (colors.length > 0 && (!todo.color || !colors.includes(todo.color)))
      return false;
    return true;
  });

  return (
    <>
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
      <h4>
        ***** StatusAndColorFilter component rendered {renderCount} times *****
      </h4>
    </>
  );
};

export default StatusAndColorFilter;
