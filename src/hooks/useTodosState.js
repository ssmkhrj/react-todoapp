import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

function useTodosState(initialValue) {
  const [todos, setTodos] = useLocalStorageState("todos", initialValue);
  const addNewTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, id: uuidv4(), isCompleted: false }]);
  };
  const updateTodo = (todoId, todoText) => {
    setTodos(
      todos.map((t) => (t.id === todoId ? { ...t, text: todoText } : t))
    );
  };
  const deleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };
  const toggleCompletion = (todoId) => {
    setTodos(
      todos.map((t) =>
        t.id === todoId ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };
  return { todos, addNewTodo, updateTodo, deleteTodo, toggleCompletion };
}

export default useTodosState;
