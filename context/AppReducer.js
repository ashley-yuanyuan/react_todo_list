import React from 'react';

export default(state, action) => {

    switch(action.type){
        case "DELETE_TODO":
            return(
                {
                    ...state,
                    todos:state.todos.filter(item => item.id !==action.payload)
                }
            )

        
        case "ADD_TODO":
        
            return(
                {
                    ...state,
                    todos:[...state.todos,action.payload]
                }
            )

        case "TOGGLE_TODO":
           
            return(
                {
                    ...state,
                    todos:state.todos.map((todo) => {
                        if(todo.id === action.payload){
                            
                            return {...todo, checked: !(todo.checked)}
                        }

                        return todo;

                    })
                }
                
            )

        default:
            return state;

    }

   



}