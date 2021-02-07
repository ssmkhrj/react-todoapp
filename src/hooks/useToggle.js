import { useState } from "react";

function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
}

export default useToggle;
