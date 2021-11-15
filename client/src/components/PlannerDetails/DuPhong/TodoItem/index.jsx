import React from "react";
import "./index.css";
import trashIcon from "./assets/trash.png";

const TodoItem = ({ id, todo, memo, dueTime, dueMeridiem, onDeleteClick }) => {
  return (
    <div className="TodoItem">
      <div className="TodoItem-dueTime">
        <h2 className="TodoItem-dueTime__time">{dueTime}</h2>
        <h5 className="TodoItem-dueTime__meridiem">{dueMeridiem}</h5>
      </div>
      <div className="TodoItem-todo">
        <div className="TodoItem-todo__text">{todo}</div>
        <div className="TodoItem-todo__memo">{memo}</div>
      </div>
      <div className="TodoItem-delete">
        <button
          onClick={() => onDeleteClick(id)}
          className="TodoItem-delete__button"
        >
          <img
            src={trashIcon}
            alt="Delete"
            className="TodoItem-delete__buttonIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
