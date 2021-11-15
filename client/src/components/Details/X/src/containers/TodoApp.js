import React, { Component } from "react";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TodoViewer from "../components/TodoViewer/TodoViewer";
import Modal from "../components/UI/Modal/Modal";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getPlan, getPlansBySearch } from "../../../../../actions/plans.js";
import "./TodoApp.css";
class Xi extends Component {
  state = {
    categories: [
      {
        id: 0,
        categoryTitle: "Personal",
        isDeleted: false,
        catColor: "tomato",
      },
      {
        id: 1,
        categoryTitle: "School",
        isDeleted: false,
        catColor: "seagreen",
      },
      {
        id: 2,
        categoryTitle: "Project",
        isDeleted: false,
        catColor: "slateblue",
      },
      {
        id: 3,
        categoryTitle: "Chich",
        isDeleted: false,
        catColor: "slateblue",
      },
    ],
    todoItems: [
      {
        id: 0,
        idCat: 0,
        todo: "Buy some eggs",
        isDone: false,
        isDeleted: false,
      },
      {
        id: 1,
        idCat: 0,
        todo: "Buy some milks",
        isDone: false,
        isDeleted: false,
      },
      {
        id: 0,
        idCat: 1,
        todo: "Finish Homework",
        isDone: false,
        isDeleted: false,
      },
      {
        id: 1,
        idCat: 1,
        todo: "Finish React",
        isDone: false,
        isDeleted: false,
      },
      {
        id: 2,
        idCat: 1,
        todo: "Finish React Native",
        isDone: false,
        isDeleted: true,
      },

      {
        id: 3,
        idCat: 1,
        todo: "Learn Vue",
        isDone: false,
        isDeleted: false,
      },
    ],
    catActiveId: 0,
    todoSelectedId: null,
    isTodoFormActive: false,
    isDeleteTodoActive: false,
    isPutBackTodoActive: false,
    isModalOpen: false,
    showTrash: false,
    showDone: false,
    todoTemp: "",
  };

  setTodoDoneHandler = (id, idCat) => {
    // Get the clicked todo and current todos category
    const todo = this.state.todoItems.find(
      (todo) => todo.id === id && todo.idCat === idCat
    );
    const todos = [...this.state.todoItems];

    // Toggle the selected todo
    todo.isDone = !todo.isDone;

    // Update the todos with edited todo above
    todos.splice(id, todo);

    // Set the current state to latest edited todos
    this.setState({
      todoItems: todos,
      todoSelectedId: null,
    });
  };

  changeCategoryHandler = (index) => {
    const catActiveNow = index;
    this.setState({
      catActiveId: catActiveNow,
      showTrash: false,
      showDone: false,
      isModalOpen: false,
      // isTodoFormActive: false,
      todoTemp: "",
      todoSelectedId: null,
    });
  };

  showTrashHandler = () => {
    this.setState({
      showTrash: true,
      showDone: false,
      isModalOpen: false,
      // isTodoFormActive: false,
      todoTemp: "",
      todoSelectedId: null,
    });
  };

  showDoneTodoHandler = () => {
    this.setState((prevState) => ({
      showDone: !prevState.showDone,
      todoSelectedId: null,
      isModalOpen: false,
      // isTodoFormActive: false,
    }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  openAddTodoFormHandler = () => {
    if (this.state.isDeleteTodoActive || this.state.isPutBackTodoActive) {
      this.setState({
        isModalOpen: true,
        isTodoFormActive: true,
        isDeleteTodoActive: false,
        isPutBackTodoActive: false,
        todoSelectedId: null,
        todoTemp: "",
      });
    } else {
      this.setState((prevState) => ({
        isModalOpen: !prevState.isModalOpen,
        isTodoFormActive: true,
      }));
    }
  };

  addTodoHandler = () => {
    if (this.state.todoTemp !== "") {
      const possibleTodoId = this.state.todoItems.filter(
        (todo) => todo.idCat === this.state.catActiveId
      ).length;
      const populateTodo = [...this.state.todoItems];
      const newTodo = {
        id: possibleTodoId,
        idCat: this.state.catActiveId,
        todo: this.state.todoTemp,
        isDone: false,
        isDeleted: false,
      };
      populateTodo.push(newTodo);

      this.setState({
        todoItems: populateTodo,
        todoTemp: "",
        isModalOpen: false,
        isTodoFormActive: false,
      });
      console.log(populateTodo);
      console.log(possibleTodoId);
    }
  };

  addTodoChangeHandler = (e) => {
    this.setState({
      todoTemp: e.target.value,
    });
  };

  selectTodoHandler = (id) => {
    // console.log(id)
    this.setState({
      todoSelectedId: id,
      isModalOpen: false,
    });
  };

  openDeleteTodoModalHandler = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      isDeleteTodoActive: true,
      isPutBackTodoActive: false,
      isTodoFormActive: false,
    }));
  };

  deleteTodoHandler = () => {
    // Get the clicked todo and current todos category
    const todo = this.state.todoItems.find(
      (todo) =>
        todo.id === this.state.todoSelectedId &&
        todo.idCat === this.state.catActiveId
    );
    const todos = [...this.state.todoItems];

    // Toggle the selected todo
    todo.isDeleted = !todo.isDeleted;

    // Update the todos with edited todo above
    todos.splice(this.state.todoSelectedId, todo);

    // Set the current state to latest edited todos
    this.setState({
      todoItems: todos,
      isModalOpen: false,
      todoSelectedId: null,
    });
  };

  putbackTodoHandler = (id, idCat) => {
    // Get the clicked todo and current todos category
    const todo = this.state.todoItems.find(
      (todo) => todo.id === id && todo.idCat === idCat
    );
    const todos = [...this.state.todoItems];

    // Toggle the selected todo
    todo.isDeleted = !todo.isDeleted;

    // Update the todos with edited todo above
    todos.splice(this.state.todoSelectedId, todo);

    // Set the current state to latest edited todos
    this.setState((prevState) => ({
      todoItems: todos,
      todoSelectedId: null,
      isModalOpen: !prevState.isModalOpen,
      isPutBackTodoActive: true,
      isDeleteTodoActive: false,
      isTodoFormActive: false,
    }));
  };

  render() {
    return (
      <div className="TodoAppWrapper">
        <div className="TodoAppContainer">
          <div className="TodoSidebarWrapper">
            <Sidebar
              categories={this.state.categories}
              categoryActive={this.state.catActiveId}
              clicked={this.changeCategoryHandler}
              showTrashClicked={this.showTrashHandler}
              showTrash={this.state.showTrash}
            />
          </div>
          <div className="TodoViewerWrapper">
            <TodoViewer
              categories={this.state.categories}
              categoryActive={this.state.catActiveId}
              todoItems={this.state.todoItems}
              todoSelected={this.state.todoSelectedId}
              showTrash={this.state.showTrash}
              showDone={this.state.showDone}
              showDoneTodoClicked={this.showDoneTodoHandler}
              checkboxClicked={this.setTodoDoneHandler}
              todoClicked={this.selectTodoHandler}
              deleteClicked={this.openDeleteTodoModalHandler}
              putBackClicked={this.putbackTodoHandler}
            />
            <Modal
              isOpen={this.state.isModalOpen}
              isTodoFormActive={this.state.isTodoFormActive}
              isDeleteTodoActive={this.state.isDeleteTodoActive}
              isPutBackTodoClicked={this.state.isPutBackTodoActive}
              onChangeAddTodo={this.addTodoChangeHandler}
              addTodoClicked={this.addTodoHandler}
              deleteTodoClicked={this.deleteTodoHandler}
              toggleModal={this.toggleModal}
            />
          </div>
          <div className="ActionBtnWrapper">
            {this.state.showTrash ? null : (
              <button
                className="AddNewBtn"
                onClick={this.openAddTodoFormHandler}
              ></button>
            )}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

export default Xi;
