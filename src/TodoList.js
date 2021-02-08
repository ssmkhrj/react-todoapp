import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import ListGroup from "react-bootstrap/ListGroup";

const TodoList = () => {
  const todos = useContext(TodosContext);
  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
};
export default TodoList;
