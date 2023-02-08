import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../Redux/todoSlice";
function AddTodo(props) {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createTodo(task));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
