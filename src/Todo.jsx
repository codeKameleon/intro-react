import React from 'react';

const Todo = (props) => {
    return ( 
        <li>
            <input type="checkbox" id="" />
            <label htmlFor="">{props.name}</label>
        </li>
     );
}

export default Todo;