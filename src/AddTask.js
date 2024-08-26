import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";
import useRenderCount from "./useRenderCount";

const AddTask = () => {
  const renderCount = useRenderCount();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  //const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <h4>***** AddTask component rendered {renderCount} times *****</h4>
    </div>
  );
};

export default AddTask;
