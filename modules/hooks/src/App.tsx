import React from "react";
import { useInput } from "hooks-react-package-practice";

function App() {
  const { value, onChange } = useInput("");

  return (
    <div>
      <h1>useInput Example</h1>
      <input type="text" value={value} onChange={onChange} />
      <p>Input value: {value}</p>
    </div>
  );
}

export default App;
