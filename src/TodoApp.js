import { TodosProvider } from "./contexts/todos.context";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <section className="container mt-5" style={{ maxWidth: 700 }}>
      <TodosProvider>
        <AddTodoForm />
        <TodoList />
      </TodosProvider>
    </section>
  );
}

export default TodoApp;
