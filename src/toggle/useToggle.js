import { useState } from 'react';

const useToggle = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState((pre) => !pre);
  };
  return { state, toggleState };
};

export default useToggle;
