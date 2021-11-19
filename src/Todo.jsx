import React from 'react';

const Todo = ({todo, removeTodo}) => {
    const snakeCase = str => {
        str = str.replace(/ /g,"_"); 
        return str
    }

    return ( 
        <li id={todo.id}>
            <input type="checkbox" id={snakeCase(todo.name)} />
            <label htmlFor={snakeCase(todo.name)}>{todo.name}</label>
            <button onClick={() => removeTodo(todo)}>Remove</button>
        </li>
     );
}

export default Todo;