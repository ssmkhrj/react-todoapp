import useTodosState from "./hooks/useTodosState";
import { TodosProvider } from "./contexts/todos.context";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const {
    todos,
    addNewTodo,
    updateTodo,
    deleteTodo,
    toggleCompletion,
  } = useTodosState([]);

  return (
    <section className="container mt-5" style={{ maxWidth: 700 }}>
      <TodosProvider>
        <AddTodoForm addNewTodo={addNewTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
        />
      </TodosProvider>
    </section>
  );
}

export default TodoApp;
