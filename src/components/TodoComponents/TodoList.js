import React from "react";
import Todo from "./Todo";

const TodoList = prop => {
  return (
    <div>
      {prop.toDoStuff.map(item => (
        <Todo key={item.id} item={item} toggleClear={prop.toggleClear} />
      ))}
    </div>
  );
};

export default TodoList;
