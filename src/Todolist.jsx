import React from "react";

const Todolist = ({ todos }) => {
  return (
    <>
      {todos.map((list, index) => {
        return (
          <li key={index}>
            <div className="complete">com</div>
            <p>{list.Text} </p>
            <div className="delete">delete</div>
          </li>
        );
      })}
    </>
  );
};

export default Todolist;
