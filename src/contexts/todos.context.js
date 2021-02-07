import { createContext } from "react";
import useTodosState from "../hooks/useTodosState";

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosAndMethods = useTodosState([]);
  return (
    <TodosContext.Provider value={todosAndMethods}>
      {props.children}
    </TodosContext.Provider>
  );
}
