export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SELECT_COLOR = "SELECT_COLOR";
export const DELETE_TODO = "DELETE_TODO";
export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const CHANGE_STATUS_FILTER = "CHANGE_STATUS_FILTER";
export const CHANGE_COLOR_FILTER = "CHANGE_COLOR_FILTER";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const selectColor = (id, color) => ({
  type: SELECT_COLOR,
  payload: { id, color },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const changeStatusFilter = (status) => ({
  type: CHANGE_STATUS_FILTER,
  payload: status,
});

export const changeColorFilter = (color, changeType) => ({
  type: CHANGE_COLOR_FILTER,
  payload: { color, changeType },
});
