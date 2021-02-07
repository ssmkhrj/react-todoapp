import useTodosState from "./hooks/useTodosState";
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
      <AddTodoForm addNewTodo={addNewTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleCompletion={toggleCompletion}
      />
    </section>
  );
}

export default TodoApp;
