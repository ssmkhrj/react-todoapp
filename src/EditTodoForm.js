import useFormState from "./hooks/useFormState";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const EditTodoForm = ({ todoText, todoId, updateTodo, toggleIsEditing }) => {
  const [text, setText] = useFormState(todoText);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateTodo(todoId, text);
    toggleIsEditing();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroup.Prepend>
          <Button variant="outline-danger" onClick={toggleIsEditing}>
            <i className="fas fa-times"></i>
          </Button>
        </InputGroup.Prepend>
        <FormControl
          type="text"
          name="text"
          value={text}
          onChange={setText}
          aria-label="Update Todo"
          autoFocus
        />
        <InputGroup.Append>
          <Button variant="outline-primary" type="submit">
            Update
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};
export default EditTodoForm;
