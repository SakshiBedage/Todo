import { createStore, combineReducers } from "redux";
import { todosReducer, filtersReducer } from "./reducers";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer);
