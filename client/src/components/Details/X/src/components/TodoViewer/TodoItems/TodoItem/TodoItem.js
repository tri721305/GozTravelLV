import React from 'react'
import trashImg from '../../../../images/trash.svg'
import putBackImg from '../../../../images/put-back.svg'

const TodoItem = (props) => {
  let todoIdSelector, 
      classStyle = "TodoItem",
      auxBtn
  if(props.inTrash) {
    todoIdSelector = props.index
  } else {
    todoIdSelector = props.id
  }
  if(props.isSelected === todoIdSelector) {
    classStyle += " active"
    auxBtn = props.inTrash ? <button className="putBackBtn" onClick={() => props.putBackClicked(props.id, props.idCat)}><img src={putBackImg} alt=""/></button> : <button className="deleteBtn" onClick={() => props.deleteClicked()}><img src={trashImg} alt=""/></button>
  }
  return(
    <div className={classStyle} >
      <p onClick={() => props.todoClicked(todoIdSelector)}>{props.todoItem}</p>
      <div className="checkWrapper">
        <input id={props.id} type="checkbox" checked={props.isDone} readOnly/>
        <label onClick={() => props.checkboxClicked(props.id, props.idCat)} htmlFor={props.id}></label>
        {auxBtn}
      </div>
    </div>
  )
}

export default TodoItem