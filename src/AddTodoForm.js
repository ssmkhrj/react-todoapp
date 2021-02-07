import useFormState from "./hooks/useFormState";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function AddTodoForm(props) {
  const [todo, handleTodoChange, resetTodo] = useFormState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addNewTodo(todo);
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
