import { useState, useRef, useEffect } from "react";

export default function UseRefInput() {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);
  const prevValueRef = useRef("");

  // сохраняем предыдущее значение
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>useRef demo</h2>

      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={focusInput}>
        Focus input
      </button>

      <p>Текущее значение: {value}</p>
      <p>Предыдущее значение: {prevValueRef.current}</p>
    </div>
  );
}