import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Todo({ todo, updateTodo, deleteTodo, toggleCompletion }) {
  const [isEditing, toggleIsEditing] = useToggle(false);
  return (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-center"
      style={{
        minHeight: 64,
        background: todo.isCompleted ? "rgba(0, 0, 0, 0.05)" : "#fff",
      }}
    >
      {isEditing ? (
        <EditTodoForm
          todoText={todo.text}
          todoId={todo.id}
          updateTodo={updateTodo}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <div
            style={{
              cursor: "pointer",
              flex: 1,
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
            onClick={() => toggleCompletion(todo.id)}
          >
            {todo.text}
          </div>
          <ButtonGroup className="ml-3" aria-label="Edit Delete Buttons">
            <Button variant="primary" size="sm" onClick={toggleIsEditing}>
              <i className="far fa-edit"></i>
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
            >
              <i className="far fa-trash-alt"></i>
            </Button>
          </ButtonGroup>
        </>
      )}
    </ListGroup.Item>
  );
}

export default Todo;
