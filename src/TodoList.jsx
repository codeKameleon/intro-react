import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
    const initialTodos = ['My first todo', 'My second todo']
    const [todos, setTodos] = useState(initialTodos)
    return ( 
        <div>
          <ul>
              {initialTodos.map(todo => (
                <Todo key={todo} name={todo}/>
              ))}
          </ul>
        </div>
     );
}

export default TodoList;