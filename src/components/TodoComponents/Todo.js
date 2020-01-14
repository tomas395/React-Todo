import React from "react";
import "./Todo.css";
const Todo = prop => {
  return (
    <div
      className={`item${prop.item.done ? " accomplished" : ""}`}
      onClick={() => prop.toggleClear(prop.item.id)}
    >
      <p>{prop.item.task}</p>
    </div>
  );
};

export default Todo;
