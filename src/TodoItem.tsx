import React from "react";

type ItemProps = {
  text: string;
  styling: string;
  onclick?: () => void;
};

function TodoItem({ styling, text, onclick }: ItemProps) {
  return (
    <button className={styling} onClick={onclick}>
      {text}
    </button>
  );
}

export default TodoItem;
