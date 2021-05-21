import React from "react";

type TodoListProps = {
  item: {
    text: string;
    done: boolean;
  };
  onclick: () => void;
};

const TodoList = ({ item, onclick }: TodoListProps) => {
  const { text, done } = item;
  const doneTask = (
    <button
      style={{
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "blue",
        border: "none",
        fontSize: "20px",
      }}
    >
      <div>{text}</div>
    </button>
  );

  const undoneTask = (
    <button
      onClick={onclick}
      style={{
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "red",
        border: "none",
        fontSize: "20px",
      }}
    >
      <div>{text}</div>
    </button>
  );
  return (
    <div >
      {done ? doneTask : undoneTask}
    </div>
  );
};

export default TodoList;
