import React, { useState } from "react";
import "./todo.css";
import CreatedTodo from "../CreatedTodo/CreatedTodo";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const TodoApp = ({ lightDark, handleDark, handleLight }) => {
  const [todos, setTodos] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };

  const handleDelete = (taskId) => {
    setTodos(todos.filter((task) => task.id !== taskId));
  };

  // const handleCompleted = () => {
  //   setTodos((prev) => prev.map((todo) => (todo.completed = !todo.completed)));
  // };

  const handleCompleted = (itemId) => {
    setTodos((prev) =>
      prev.map(
        (todo) =>
          itemId == todo.id ? { ...todo, completed: !todo.completed } : todo
        // itemId == todo ? (todo.completed = !todo.completed) : todo
      )
    );

    console.log("Hello");
    console.log(todos);
  };

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: todo.trim(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskValue !== "") {
      addTodo(taskValue);
    }

    setTaskValue("");

    console.log(todos);
  };

  const clearTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="todoApp">
      <div className="header">
        <div className="logo">
          <h1>TODO</h1>
        </div>
        <div className="darklight">
          {lightDark == "light" ? (
            <img src={moon} alt="" onClick={handleDark} />
          ) : (
            <img src={sun} alt="" onClick={handleLight} />
          )}
        </div>
      </div>
      <form
        className={lightDark == "light" ? "todoInputLight" : "todoInputDark"}
        onSubmit={handleSubmit}
      >
        <button type="submit" className="addTodoBtn"></button>
        <input
          type="text"
          placeholder="Create A New Todo"
          className="newTodo"
          onChange={handleChange}
          value={taskValue}
        />
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <CreatedTodo
              todoTask={todo.task}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              handleDelete={handleDelete}
              handleCompleted={handleCompleted}
              lightDark={lightDark}
            ></CreatedTodo>
          );
        })}
      </div>
      <div
        className={
          lightDark == "light" ? "bottomTodosLight" : "bottomTodosDark"
        }
      >
        <div className="todosLeft">
          <p>{todos.length} items Left</p>
        </div>
        <div className="todosState">
          <button className="all">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="todosCompleted">
          <button onClick={clearTodos}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
