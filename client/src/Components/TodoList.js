import React, { useEffect } from "react";
import { getAllTodos } from "../Redux/todoSlice";
import { useSelector, useDispatch } from "react-redux";

import Todo from "./Todo";

function TodoList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const { todoList } = useSelector((state) => state.todos);
  const { loading } = useSelector((state) => state.todos);

  return (
    <div>
      {loading ? (
        <p> ....Loading....</p>
      ) : (
        todoList?.map((el) => <Todo todo={el} key={el.id} />)
      )}
    </div>
  );
}

export default TodoList;
