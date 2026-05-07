import { useState, useMemo } from "react";

export default function UseMemoNumbers() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(0);

  // генерация массива
  const generateNumbers = () => {
    const arr = Array.from({ length: 100000 }, () =>
      Math.floor(Math.random() * 100)
    );
    setNumbers(arr);
  };

  // useMemo считаем сумму только при изменении numbers
  const sum = useMemo(() => {
    console.log("Считаем сумму...");
    return numbers.reduce((acc, n) => acc + n, 0);
  }, [numbers]);

  return (
    <div style={{ margin: "20px" }}>
      <h2>useMemo demo</h2>

      <button onClick={generateNumbers}>
        Generate numbers
      </button>

      <button onClick={() => setCount(count + 1)}>
        Rerender ({count})
      </button>

      <p>Sum: {sum}</p>
    </div>
  );
}