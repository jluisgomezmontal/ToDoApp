import React from 'react'
import { useForm } from './hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description:'',
    })

    const handleSubmit = e =>{
        e.preventDefault();
 
        if (description.trim().length < 2) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description : description,
            done: false,
        }


        handleAddTodo( newTodo )
        
        reset();

    }
    
    
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>
            
            <form onSubmit={ handleSubmit }>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ description }
                />
                <div className="d-grid s">

                <button
                type="submit"
                className="mt-2 btn btn-outline-success">
                    Agregar
                </button>
                </div>
                
            </form>
        </>
    )
}
