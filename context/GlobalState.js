import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer.js'

const initialState = {
    
    todos:[{ id: 1, text: 'Run', deadline: "2023-6-01" , checked: false},
    { id: 2, text: 'Study', deadline: "2023-6-25" , checked: false},
    { id: 3, text: 'Workout', deadline: "2023-5-22" , checked: false},
    { id: 4, text: 'Bedtime', deadline: "2023-5-25" , checked: false}],

    //display: { hide: false, filterDay:"", sortBy:0 }

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    function deleteTodo(id){
        dispatch({
            type:"DELETE_TODO",
            payload:id
        })

    }

    function addTodo(todo) {
        dispatch({
            type:"ADD_TODO",
            payload:todo
        })
    }


    function toggleTodo(id) {
        dispatch({
            type:"TOGGLE_TODO",
            payload:id
        })
    }


    return (<GlobalContext.Provider  value = {{
        todos: state.todos,
        addTodo, 
        deleteTodo,
        toggleTodo
        }}>
        {children}
    </GlobalContext.Provider>)

}


