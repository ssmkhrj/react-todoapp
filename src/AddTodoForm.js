import useFormState from "./hooks/useFormState";
import { DispatchContext } from "./contexts/todos.context";
import { useContext } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function AddTodoForm() {
  const [todo, handleTodoChange, resetTodo] = useFormState("");
  const dispatch = useContext(DispatchContext);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "ADD", newTodo: todo });
    resetTodo();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add Todo"
          type="text"
          name="input"
          value={todo}
          onChange={handleTodoChange}
          aria-label="Input Todo"
        />
        <InputGroup.Append>
          <Button variant="outline-primary" type="submit">
            Save
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default AddTodoForm;
