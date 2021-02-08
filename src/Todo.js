import useToggle from "./hooks/useToggle";
import { DispatchContext } from "./contexts/todos.context";
import { useContext, memo } from "react";
import EditTodoForm from "./EditTodoForm";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Todo({ todo }) {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const dispatch = useContext(DispatchContext);
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
            onClick={() =>
              dispatch({ type: "TOGGLECOMPLETION", todoId: todo.id })
            }
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
              onClick={() => dispatch({ type: "DELETE", todoId: todo.id })}
            >
              <i className="far fa-trash-alt"></i>
            </Button>
          </ButtonGroup>
        </>
      )}
    </ListGroup.Item>
  );
}

export default memo(Todo);
