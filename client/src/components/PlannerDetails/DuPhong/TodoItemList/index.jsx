import React from 'react';
import './index.css';
import TodoItem from '../../components/TodoItem';

const TodoItemList = ({todos, onDeleteTodo}) => {
    let todoItems = null;
    if(todos) {
        todoItems = todos.map((todo, index) => {
            return (
                <TodoItem 
                    id={todo.id}
                    key={todo.id}
                    todo={todo.todo}
                    memo={todo.memo} 
                    dueTime={todo.dueTime}
                    dueMeridiem ={todo.dueMeridiem}
                    onDeleteClick={onDeleteTodo}
                />
            )
        }) 
    } else {
        todoItems = <div>Loading...</div>
    }
    
    return ( 
        <div className="TodoItemList">
            {todoItems}
        </div>
        )
}
 
export default TodoItemList;