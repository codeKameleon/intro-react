import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import AddTodo from './AddTodo';
import TodoList from './TodoList';

import './App.css';

const App = () => {
  // Initializing the state
  const [todos, setTodos] = useState([])

  // Update the state
  const addTodo =  todo => {
    setTodos([...todos, {id: uuidv4(), name: todo, completed: false}])
  }
  
  console.log(todos)
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>

      <main>
        <AddTodo addTodo={addTodo}/>

        <section>
          <h2>Todos</h2>

          <TodoList todos={todos}/>  
        </section>
      </main>
    </div>
  );
}

export default App;
