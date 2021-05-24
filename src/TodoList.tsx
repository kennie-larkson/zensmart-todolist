import React from "react";
import TodoItem from "./TodoItem";

type TodoListProps = {
  items: {
    text: string;
    done: boolean;
  }[];
  onclick: () => void;
};

const TodoList = ({ items, onclick }: TodoListProps) => {
  return (
    <div className="todo-list">
      {items.map(({ text, done }, index) =>
        done ? (
          <TodoItem key={index} text={text} styling="btn-done" />
        ) : (
          <TodoItem
            styling="btn-undone"
            key={index}
            text={text}
            onclick={onclick}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
