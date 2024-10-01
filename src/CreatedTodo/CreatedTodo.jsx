import React from "react";
import "./createdTodo.css";

const CreatedTodo = ({
  todoTask,
  handleDelete,
  id,
  handleCompleted,
  completed,
  lightDark,
}) => {
  return (
    <div
      className={lightDark == "light" ? "createdTodoLight" : "createdTodoDark"}
    >
      <button
        className={completed ? "completedBtnTodo" : "checkTodo"}
        onClick={() => handleCompleted(id)}
      ></button>
      <p
        className={completed ? "completedTodo" : ""}
        onClick={() => handleCompleted(id)}
      >
        {todoTask}
      </p>
      <button className="deleteBtn" onClick={() => handleDelete(id)}>
        X
      </button>
    </div>
  );
};

export default CreatedTodo;
