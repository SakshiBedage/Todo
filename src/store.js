import { createStore, combineReducers, applyMiddleware } from "redux";
import { todosReducer, filtersReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger"; //prints log

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

//Trunk
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);
