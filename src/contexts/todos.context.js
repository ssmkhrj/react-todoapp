import { createContext, useReducer } from "react";
import todosReducer from "../reducers/todos.reducer";

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
