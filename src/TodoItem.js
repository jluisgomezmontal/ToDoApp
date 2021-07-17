import React from 'react'

export const TodoItem = ({ todo, index, handleRemove, handleToogle }) => {
    return (
        <li
            key={ todo.id }
            className="list-group-item"
            > 
            <p 
            className={`${ todo.done && 'complete'}`}
            onClick={ ()=>handleToogle( todo.id )}
            >{index + 1}.-{ todo.description }</p>
            <button 
            onClick={ () => handleRemove(todo.id) }
            className="btn btn-danger btn-block">borrar</button>
                
        </li>
    )
}
