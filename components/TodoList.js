import React, {useContext,useState} from 'react'

import TodoItem from './TodoItem.js'

import {GlobalContext} from "../context/GlobalState.js"



function TodoList({hide,options,selected,date}) {
  const {todos} = useContext(GlobalContext);

  const [displayTodos, setDisplayTodos] = useState([...todos])

  //var displayTodos = [...todos]


  if(selected === options[0]){
   // setDisplayTodos((prev) => prev)
   


  } else if(selected === options[1]){//alpha
    setDisplayTodos((prev) => prev.sort((a,b) => a.text > b.text ? 1: -1))
    
   

  } else if (selected === options[2]){ //deadline
   
    setDisplayTodos((prev) =>prev.sort((a,b) => {
      const da = new Date(a.deadline)
      const db = new Date(b.deadline)

      return(da > db ? 1: -1)

    }))

  }

  if(hide){
    //displayTodos = displayTodos.filter((todo) => todo.checked !== true)
  }




  return (
    <div className="TodoList">

   <ul>
    {displayTodos.map((todo) =>{
      return(<TodoItem key={todo.id} todo={todo} />)
    })}
  </ul>


    </div>
  )
}

export default TodoList