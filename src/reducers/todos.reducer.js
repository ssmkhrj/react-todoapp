import { v4 as uuidv4 } from "uuid";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { text: action.newTodo, id: uuidv4(), isCompleted: false },
      ];
    case "UPDATE":
      return state.map((t) =>
        t.id === action.todoId ? { ...t, text: action.todoText } : t
      );
    case "DELETE":
      return state.filter((t) => t.id !== action.todoId);
    case "TOGGLECOMPLETION":
      return state.map((t) =>
        t.id === action.todoId ? { ...t, isCompleted: !t.isCompleted } : t
      );
    default:
      return state;
  }
};

export default todosReducer;
