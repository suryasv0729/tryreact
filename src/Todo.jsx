import React, { useEffect, useState } from "react";
import Todolist from "./Todolist";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), Text: inputValue, completed: false },
    ]);
    setInputValue("");
    console.log(todos);
  };

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id != id));
  };

  const handleComplete = (id) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    console.log(todos);
  };

  return (
    <div className="main-div">
      <h1>asoa</h1>
      <div className="input-div">
        <input
          type="text"
          value={inputValue}
          placeholder="add your todo task"
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>+</button>
      </div>
      <ul className="task-list">
        <Todolist
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </ul>
    </div>
  );
};

export default Todo;
