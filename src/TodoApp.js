import React, { useEffect, useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    

    const [ todos, dispatch ] = useReducer( TodoReducer, [], init );



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

    const handleRemove = ( todoId ) =>{
        const action={
            type: 'remove',
            payload:todoId
        }

        dispatch(action);
    }

    const handleToogle = ( todoId ) =>{
        dispatch({
            type:'toogle',
            payload:todoId
        })
    }
    
    const handleAddTodo = ( newTodo ) =>{
        

        dispatch({
            type: 'add',
            payload: newTodo,
        })
    }
    
    return (
        <div className="container pt-3">
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr/>

            <div className="row">

                <div className="col-7">
                <TodoList
                    todos ={ todos }
                    handleRemove ={ handleRemove } 
                    handleToogle ={ handleToogle }
                
                />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    
                    />
                </div>
            </div>
        </div>
    )
}
