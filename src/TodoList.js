import Todo from "./Todo";
import ListGroup from "react-bootstrap/ListGroup";

const TodoList = ({ todos, updateTodo, deleteTodo, toggleCompletion }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ListGroup>
  );
};
export default TodoList;
