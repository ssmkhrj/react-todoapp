import { useState } from "react";

function useFormState(initialValue) {
  const [state, setState] = useState(initialValue);
  const handleChange = (evt) => {
    setState(evt.target.value);
  };
  const reset = () => {
    setState("");
  };
  return [state, handleChange, reset];
}

export default useFormState;
