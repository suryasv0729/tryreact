import React from "react";

const Todolist = ({ todos, handleDelete, handleComplete }) => {
  return (
    <>
      {todos.map((list, index) => {
        return (
          <li key={index}>
            <div className="complete" onClick={() => handleComplete(list.id)}>
              com
            </div>
            <p className={list.completed ? "line" : ""}>{list.Text} </p>
            <div className="delete" onClick={() => handleDelete(list.id)}>
              delete
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Todolist;
