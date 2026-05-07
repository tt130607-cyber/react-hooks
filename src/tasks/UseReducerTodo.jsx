import { useReducer, useState } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, done: false }];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}

export default function UseReducerTodo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>useReducer Todo</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}