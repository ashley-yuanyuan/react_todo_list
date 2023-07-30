import React, {useState} from 'react'
import TodoList from './TodoList.js'


function TopBar() {

  

  const options = ['Default', 'Alphabetical Order' ,'Deadline']

  const [hide, setHide] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const [date, setDate] = useState("");

  
  
 



  return (
    <div className="TopBar">
     
        <label>
            Hide completed
            <input checked={hide} onChange={(e) => setHide(prev => !prev)} type="checkbox" />
        </label>

        <select
        value={selected}
        onChange={e => setSelected(e.target.value)}>
        {options.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
        </select>

        
        <br/>


        <label>
            Filter by Day:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min="2023-1-01" max="2024-12-31" />
            <button id="find-btn">Find</button>
            <button id="reset-btn">Reset</button>
        </label>

        <TodoList hide={hide} selected={selected} date={date} options={options}/>
        
    </div>
  )
}

export default TopBar