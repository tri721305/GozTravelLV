import React, { Component, useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TodoViewer from "../components/TodoViewer/TodoViewer";
import Modal from "../components/UI/Modal/Modal";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getPlan, getPlansBySearch } from "../../../../../actions/plans.js";
import "./TodoApp.css";
const Xi = () => {
  const [state, setState] = useState({
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
  });

  const setTodoDoneHandler = (id, idCat) => {
    // Get the clicked todo and current todos category
    const todo = state.todoItems.find(
      (todo) => todo.id === id && todo.idCat === idCat
    );
    const todos = [...state.todoItems];

    // Toggle the selected todo
    todo.isDone = !todo.isDone;

    // Update the todos with edited todo above
    todos.splice(id, todo);

    // Set the current state to latest edited todos
    setState({
      todoItems: todos,
      todoSelectedId: null,
    });
  };

  const changeCategoryHandler = (index) => {
    const catActiveNow = index;
    setState({
      catActiveId: catActiveNow,
      showTrash: false,
      showDone: false,
      isModalOpen: false,
      // isTodoFormActive: false,
      todoTemp: "",
      todoSelectedId: null,
    });
  };

  const showTrashHandler = () => {
    setState({
      showTrash: true,
      showDone: false,
      isModalOpen: false,
      // isTodoFormActive: false,
      todoTemp: "",
      todoSelectedId: null,
    });
  };

  const showDoneTodoHandler = () => {
    setState((prevState) => ({
      showDone: !prevState.showDone,
      todoSelectedId: null,
      isModalOpen: false,
      // isTodoFormActive: false,
    }));
  };

  const toggleModal = () => {
    setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const openAddTodoFormHandler = () => {
    if (state.isDeleteTodoActive || state.isPutBackTodoActive) {
      setState({
        isModalOpen: true,
        isTodoFormActive: true,
        isDeleteTodoActive: false,
        isPutBackTodoActive: false,
        todoSelectedId: null,
        todoTemp: "",
      });
    } else {
      setState((prevState) => ({
        isModalOpen: !prevState.isModalOpen,
        isTodoFormActive: true,
      }));
    }
  };

  const addTodoHandler = () => {
    if (state.todoTemp !== "") {
      const possibleTodoId = state.todoItems.filter(
        (todo) => todo.idCat === state.catActiveId
      ).length;
      const populateTodo = [...state.todoItems];
      const newTodo = {
        id: possibleTodoId,
        idCat: state.catActiveId,
        todo: state.todoTemp,
        isDone: false,
        isDeleted: false,
      };
      populateTodo.push(newTodo);

      setState({
        todoItems: populateTodo,
        todoTemp: "",
        isModalOpen: false,
        isTodoFormActive: false,
      });
      console.log(populateTodo);
      console.log(possibleTodoId);
    }
  };

  const addTodoChangeHandler = (e) => {
    setState({
      todoTemp: e.target.value,
    });
  };

  const selectTodoHandler = (id) => {
    // console.log(id)
    setState({
      todoSelectedId: id,
      isModalOpen: false,
    });
  };

  const openDeleteTodoModalHandler = () => {
    setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      isDeleteTodoActive: true,
      isPutBackTodoActive: false,
      isTodoFormActive: false,
    }));
  };

  const deleteTodoHandler = () => {
    // Get the clicked todo and current todos category
    const todo = state.todoItems.find(
      (todo) =>
        todo.id === state.todoSelectedId && todo.idCat === state.catActiveId
    );
    const todos = [...state.todoItems];

    // Toggle the selected todo
    todo.isDeleted = !todo.isDeleted;

    // Update the todos with edited todo above
    todos.splice(state.todoSelectedId, todo);

    // Set the current state to latest edited todos
    setState({
      todoItems: todos,
      isModalOpen: false,
      todoSelectedId: null,
    });
  };

  const putbackTodoHandler = (id, idCat) => {
    // Get the clicked todo and current todos category
    const todo = state.todoItems.find(
      (todo) => todo.id === id && todo.idCat === idCat
    );
    const todos = [...state.todoItems];

    // Toggle the selected todo
    todo.isDeleted = !todo.isDeleted;

    // Update the todos with edited todo above
    todos.splice(state.todoSelectedId, todo);

    // Set the current state to latest edited todos
    setState((prevState) => ({
      todoItems: todos,
      todoSelectedId: null,
      isModalOpen: !prevState.isModalOpen,
      isPutBackTodoActive: true,
      isDeleteTodoActive: false,
      isTodoFormActive: false,
    }));
  };

  return (
    <div className="TodoAppWrapper">
      <div className="TodoAppContainer">
        <div className="TodoSidebarWrapper">
          <Sidebar
            categories={state.categories}
            categoryActive={state.catActiveId}
            clicked={changeCategoryHandler}
            showTrashClicked={showTrashHandler}
            showTrash={state.showTrash}
          />
        </div>
        <div className="TodoViewerWrapper">
          <TodoViewer
            categories={state.categories}
            categoryActive={state.catActiveId}
            todoItems={state.todoItems}
            todoSelected={state.todoSelectedId}
            showTrash={state.showTrash}
            showDone={state.showDone}
            showDoneTodoClicked={showDoneTodoHandler}
            checkboxClicked={setTodoDoneHandler}
            todoClicked={selectTodoHandler}
            deleteClicked={openDeleteTodoModalHandler}
            putBackClicked={putbackTodoHandler}
          />
          <Modal
            isOpen={state.isModalOpen}
            isTodoFormActive={state.isTodoFormActive}
            isDeleteTodoActive={state.isDeleteTodoActive}
            isPutBackTodoClicked={state.isPutBackTodoActive}
            onChangeAddTodo={addTodoChangeHandler}
            addTodoClicked={addTodoHandler}
            deleteTodoClicked={deleteTodoHandler}
            toggleModal={toggleModal}
          />
        </div>
        <div className="ActionBtnWrapper">
          {state.showTrash ? null : (
            <button
              className="AddNewBtn"
              onClick={openAddTodoFormHandler}
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
};

export default Xi;
