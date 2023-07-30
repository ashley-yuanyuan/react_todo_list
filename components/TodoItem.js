import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState.js"





function TodoItem({todo}) {

  const {toggleTodo, deleteTodo} = useContext(GlobalContext);


  return (
    <li className="TodoItem">
       <input  type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
      <label className={todo.checked ? "completed-label": "uncomplete-label"} htmlFor="TodoItem">
      {todo.text + " " + todo.deadline}
      </label>
      <button className="delete-btn" onClick={() => {deleteTodo(todo.id)}}>delete</button>

    

    </li>
  )
}

export default TodoItem