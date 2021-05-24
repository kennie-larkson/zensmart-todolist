import React from "react";
import TodoList from "./TodoList";

import "./App.css";

const todoItems: {
  text: string;
  done: boolean;
}[] = [
  {
    text: "Brush my teeth",
    done: true,
  },
  {
    text: "Fetch a cup of coffee",
    done: true,
  },
  {
    text: "Fetch some cookies",
    done: false,
  },
  {
    text: "Start coding",
    done: true,
  },
];

const onItemClick = () => {
  alert("This task is not marked as DONE. Please attend :)");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{<TodoList items={todoItems} onclick={onItemClick} />}</div>
      </header>
    </div>
  );
}

export default App;
