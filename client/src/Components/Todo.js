import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <p> {todo.task} </p>
    </div>
  );
}

export default Todo;
