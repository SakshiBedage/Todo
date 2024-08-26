import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { markAllCompleted, clearCompleted } from "./actions";
import useRenderCount from "./useRenderCount";

const ClearAndMark = () => {
  const renderCount = useRenderCount();

  const dispatch = useDispatch();
  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <>
      <div className="bottom-buttons">
        <button onClick={handleMarkAllCompleted}>Mark All Completed</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <h4>***** ClearAndMark component rendered {renderCount} times *****</h4>
    </>
  );
};

export default ClearAndMark;
