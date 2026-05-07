import { useReducer, useMemo, useCallback, createContext, useContext, useState } from "react";

//  context
const FilterContext = createContext();

//  reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, done: false }];

    case "TOGGLE":
      return state.map(t =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );

    default:
      return state;
  }
}

// child
function List() {
  const { todos, toggleTodo, filter } = useContext(FilterContext);

  console.log("List render");

  const filtered = useMemo(() => {
    return todos.filter(t =>
      t.text.toLowerCase().includes(filter.toLowerCase())
    );
  }, [todos, filter]);

  return (
    <ul>
      {filtered.map(t => (
        <li key={t.id} onClick={() => toggleTodo(t.id)}>
          {t.done ? "✔ " : ""}{t.text}
        </li>
      ))}
    </ul>
  );
}

export default function CombinedHooks() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  
  const addTodo = useCallback(() => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  }, [input]);

  const toggleTodo = useCallback((id) => {
    dispatch({ type: "TOGGLE", payload: id });
  }, []);

  return (
    <FilterContext.Provider value={{ todos, toggleTodo, filter }}>
      <div style={{ margin: "20px" }}>
        <h2>Combined hooks</h2>

        <input
          placeholder="new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>

        <br /><br />

        <input
          placeholder="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <List />
      </div>
    </FilterContext.Provider>
  );
}