import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, EditTodo } from "../Redux/todoSlice";
import UpdateForm from "./UpdateForm";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const editHandler = (e) => {
    e.preventDefault();
    dispatch(EditTodo(todo._id));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todo._id));
  };

  return (
    <div>
      <p> {todo.task} </p>
      {todo.isEdited && <UpdateForm todo={todo} />}
      {!todo.isEdited && <button onClick={editHandler}>Edit</button>}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Todo;
