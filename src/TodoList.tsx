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
      {items.map((item, index) => (
        <TodoItem key={index} item={item} onclick={onclick} />
      ))}
    </div>
  );
  
};

export default TodoList;
