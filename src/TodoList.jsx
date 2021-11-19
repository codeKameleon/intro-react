import React, { useState } from 'react'
import Todo from './Todo';

const TodoList = props => {
    return ( 
        <div>
          <ul>
              {props.todos.map(todo => (
                <Todo key={todo} name={todo}/>
              ))}
          </ul>
        </div>
     );
}

export default TodoList;