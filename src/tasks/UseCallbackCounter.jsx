import { useState, useCallback } from "react";

// дочерний компонент
const Child = ({ onClick }) => {
  console.log("Child render");

  return (
    <div>
      <button onClick={onClick}>Click child</button>
    </div>
  );
};

export default function UseCallbackCounter() {
  const [count, setCount] = useState(0);

  // Без useCallback (каждый раз новая функция)
  // const handleClick = () => {
    //console.log("clicked");
  //};

  // вариант с useCallback
  const handleClick = useCallback(() => {
  console.log("clicked");
}, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}