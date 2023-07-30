import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState.js'


function BottomBar() {

  const [date, setDate] = useState("")
  const[text, setText] = useState("")


  const {todos, addTodo} = useContext(GlobalContext);



  const onSubmit = e => {
    e.preventDefault();
   

    const newTodo = {
      id:todos.length + 1,
      text:text,
      deadline:date,
      checked:false
    }

   
    addTodo(newTodo);

  }


  
  
  return (
    <div className= "BottomBar">
      <form  onSubmit={onSubmit}>
      <label >Deadline: 
        <input value= {date} onChange={(e) => setDate(e.target.value)} type="date"  min="2018-01-01" max="2024-12-31" />
       </label>

       <input value={text} onChange={(e) => setText(e.target.value)} type="text"  placeholder="Todo.." />
      
      <button>Add</button>

      </form>
    </div>
  )
}

export default BottomBar