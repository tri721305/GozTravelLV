import React from 'react'
import TodoItems from './TodoItems/TodoItems'

const TodoViewer = (props) => {

  let title, showedTodo, doneTodoContainer, doneTodo, catStyle, showDoneBtn
  if (props.showTrash) {
    showedTodo = props.todoItems.filter(todo => todo.isDeleted === true)
    title= "Trash Can"
  } else {
    let getCategoryAttrib = props.categories.filter(categories => categories.id === props.categoryActive)
    showedTodo = props.todoItems.filter(todoItem => todoItem.idCat === props.categoryActive && 
                                                    todoItem.isDone === false && 
                                                    todoItem.isDeleted === false)
    doneTodo = props.todoItems.filter(todoItem => todoItem.idCat === props.categoryActive && 
                                                  todoItem.isDone === true && 
                                                  todoItem.isDeleted === false)
    title = getCategoryAttrib[0].categoryTitle + " To Do List"
    catStyle = { borderColor: getCategoryAttrib[0].catColor}
    showDoneBtn = <button onClick={props.showDoneTodoClicked} 
            className={props.showDone ? "ShowDoneBtn active" : "ShowDoneBtn"}>Show Done</button>
  }
  if(props.showDone) {
    doneTodoContainer = 
    <div className="DoneTodoContainer">
      <h1>Done Todo</h1>
      <TodoItems todoItems={doneTodo} 
                  todoSelected = {props.todoSelected}
                  categoryActive={props.categoryActive} 
                  checkboxClicked = {props.checkboxClicked} 
                  todoClicked = {props.todoClicked}
                  showTrash = {props.showTrash}
                  deleteClicked= {props.deleteClicked}
                  putBackClicked = {props.putBackClicked}/>
    </div>
    console.log(doneTodo)
  }
  return(
    <div className="TodoViewerContainer" style={catStyle}>
      <div className="TodoViewerContainerHeader">
        <h1 className="Title">{title}</h1>
        {showDoneBtn}
      </div>
      <TodoItems 
        todoItems={showedTodo}
        todoSelected = {props.todoSelected}
        categoryActive={props.categoryActive}
        checkboxClicked = {props.checkboxClicked}
        todoClicked={props.todoClicked}
        showTrash = {props.showTrash}
        deleteClicked= {props.deleteClicked}
        putBackClicked = {props.putBackClicked} />
      {doneTodoContainer}
    </div>
  )
}

export default TodoViewer;