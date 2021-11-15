import React from 'react'
import TodoItem from './TodoItem/TodoItem'

const TodoItems = (props) => {
  if (props.todoItems.length < 1 && props.showTrash) {
    return (
    <div className="EmptyTodoContainer">
        <p>No todo in the trash :)</p>
    </div>
    )
  } else if (props.todoItems.length < 1){
    return (
      <div className="EmptyTodoContainer">
        <p>No todo :)</p>
      </div>
    )
  } else {
    return props.todoItems.map(
      (todoItem, index) => {
        return (<TodoItem
              key={index}
              id={todoItem.id}
              idCat={todoItem.idCat}
              index={index}
              todoItem={todoItem.todo}
              isDone={todoItem.isDone} 
              checkboxClicked = {props.checkboxClicked}
              todoClicked = {props.todoClicked}
              inTrash = {props.showTrash}
              isSelected={props.todoSelected}
              deleteClicked= {props.deleteClicked}
              putBackClicked = {props.putBackClicked}
              />)
      }
    )
  }
}


export default TodoItems