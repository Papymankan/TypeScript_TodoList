import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <div className="w-full py-5 px-10">
        <div className="w-full flex relative gap-6 items-start">
          <Form />

          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
