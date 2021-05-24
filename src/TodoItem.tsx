import React from "react";

type ItemProps = {
  item: {
    text: string;
    done: boolean;
  };
  onclick: () => void;
};

function TodoItem({ item, onclick }: ItemProps) {
  const { text, done } = item;
  
  

  if (done) {
    return (
      <div className="btn-done">
        <button>{text}</button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="btn-undone" onClick={onclick}>{text}</button>
      </div>
    );
  }
}

export default TodoItem;
