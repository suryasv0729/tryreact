import React, { useState } from "react";
import Todolist from "./Todolist";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setTodos((todos) => [...todos, { Text: inputValue, completed: false }]);
    setInputValue("");
    console.log(todos);
  };

  return (
    <div className="main-div">
      <h1>Todo app</h1>
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
        <Todolist todos={todos} />
      </ul>
    </div>
  );
};

export default Todo;
