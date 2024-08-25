import {
  ADD_TODO,
  TOGGLE_TODO,
  SELECT_COLOR,
  DELETE_TODO,
  MARK_ALL_COMPLETED,
  CLEAR_COMPLETED,
  CHANGE_STATUS_FILTER,
  CHANGE_COLOR_FILTER,
} from "./actions";

const initialTodosState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

const initialFiltersState = {
  status: "All",
  colors: [],
};

export const todosReducer = (abc = initialTodosState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...abc,
        { id: abc.length, text: action.payload, completed: false },
      ];

    case TOGGLE_TODO:
      return abc.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case SELECT_COLOR:
      return abc.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, color: action.payload.color }
          : todo
      );

    case DELETE_TODO:
      return abc.filter((todo) => todo.id !== action.payload);

    case MARK_ALL_COMPLETED:
      return abc.map((todo) => ({ ...todo, completed: true }));

    case CLEAR_COMPLETED:
      return abc.filter((todo) => !todo.completed);

    default:
      return abc;
  }
};

export const filtersReducer = (state = initialFiltersState, action) => {
  switch (action.type) {
    case CHANGE_STATUS_FILTER:
      return {
        ...state,
        status: action.payload,
      };

    case CHANGE_COLOR_FILTER:
      const { color, changeType } = action.payload;
      return {
        ...state,
        colors:
          changeType === "added"
            ? [...state.colors, color]
            : state.colors.filter((existingColor) => existingColor !== color),
      };

    default:
      return state;
  }
};
