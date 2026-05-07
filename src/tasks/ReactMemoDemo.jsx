import { useState, useCallback } from "react";
import React from "react";


const Child = React.memo(({ onClick }) => {
  console.log("Child render");

  return (
    <div>
      <button onClick={onClick}>Child button</button>
    </div>
  );
});

export default function ReactMemoDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Без useCallback (будет ломать memo)
  // const handleClick = () => {
  //   console.log("click");
  // };

  // С useCallback
  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>React.memo demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type here"
      />

      <Child onClick={handleClick} />
    </div>
  );
}