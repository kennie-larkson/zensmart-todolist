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
        {todoItems.map((item, index) => {
          console.log(item);

          return <TodoList key={index} item={item} onclick={onItemClick} />;
        })}
      </header>
    </div>
  );
}

export default App;
