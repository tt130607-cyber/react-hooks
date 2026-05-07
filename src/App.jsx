import './App.css'
import UseContextTheme from "./tasks/UseContextTheme";
import UseCallbackCounter from "./tasks/UseCallbackCounter";
import UseMemoNumbers from "./tasks/UseMemoNumbers";
import UseRefInput from "./tasks/UseRefInput";
import UseReducerTodo from "./tasks/UseReducerTodo";
import ReactMemoDemo from "./tasks/ReactMemoDemo";
import CombinedHooks from "./tasks/CombinedHooks";
import BadForm from "./tasks/BadForm";
import GoodForm from "./tasks/GoodForm";

function App() {
  

  return (
    <>
    <div>
      <UseContextTheme />
    </div>
    <>
      <UseCallbackCounter />
    </>
    <>
      <UseMemoNumbers />
    </>
      <>
      <UseRefInput />
    </>
    <>
      <UseReducerTodo />
    </>
    <>
      <ReactMemoDemo />
    </>
    <CombinedHooks />;
    <BadForm />;
    <GoodForm />;
    </>
  )
}

export default App
