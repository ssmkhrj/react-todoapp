import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, initialValue, reducer) {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      );
    } catch (e) {
      val = initialValue;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export { useLocalStorageReducer };
