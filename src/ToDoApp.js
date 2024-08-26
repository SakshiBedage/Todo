import React, { useRef } from "react";
import "./App.css";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import StatusAndColorFilter from "./StatusAndColorFilter";
import ClearAndMark from "./ClearAndMark";
import useRenderCount from "./useRenderCount";

const TodoApp = () => {
  const renderCount = useRenderCount();

  return (
    <div className="card">
      <h1 className="title">Todo List</h1>
      <AddTask />
      <Tasks />
      <div className="footer">
        <StatusAndColorFilter />
        <ClearAndMark />
        <h4>***** TodoApp component rendered {renderCount} times *****</h4>
      </div>
    </div>
  );
};

export default TodoApp;
