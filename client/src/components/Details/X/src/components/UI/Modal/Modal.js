import React, { Fragment } from "react";

const Modal = (props) => {
  let modalContent = {
    head: "",
    content: "",
    time: "",
    button: "",
  };

  if (props.isTodoFormActive) {
    modalContent = {
      head: "Write your new to-do!",
      content: (
        <input
          type="text"
          onChange={props.onChangeAddTodo}
          placeholder="Add a new todo"
        />
      ),
      time: <input type="time" onChange={props.onChangeAddTodo} />,
      // <input type="time" onChange={props.onChangeAddTodo} />

      button: <button onClick={props.addTodoClicked}>Add Todo</button>,
    };
  }

  if (props.isDeleteTodoActive) {
    modalContent = {
      head: "Delete to-do",
      content: <span>Are you sure want to delete this?</span>,
      button: (
        <Fragment>
          <button className="close" onClick={props.toggleModal}>
            Cancel
          </button>
          <button className="delete" onClick={props.deleteTodoClicked}>
            Delete Todo
          </button>
        </Fragment>
      ),
    };
  }

  if (props.isPutBackTodoClicked) {
    modalContent = {
      head: "Put back to-do",
      content: <span>To-do successfully putted back</span>,
      button: (
        <button className="close" onClick={props.toggleModal}>
          Close
        </button>
      ),
    };
  }

  return (
    <div
      className="ModalWrapper"
      style={{
        transform: props.isOpen ? "translateY(0)" : "translateY(-10px)",
        opacity: props.isOpen ? "1" : "0",
        visibility: props.isOpen ? "visible" : "hidden",
      }}
    >
      <div className="AddTodoFormContainer">
        <div className="AddTodoFormHeader">
          <p>{modalContent.head}</p>
          <a onClick={props.toggleModal}>X</a>
        </div>
        {modalContent.content}
        {modalContent.time}
        {modalContent.button}
      </div>
    </div>
  );
};

export default Modal;
