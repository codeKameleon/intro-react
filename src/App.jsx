import React, { useState } from 'react'

import AddTodo from './AddTodo';
import TodoList from './TodoList';

import './App.css';

const App = () => {
  // Initializing the state
  const initialTodos = ['My task 1', 'My task 2', 'My task 3'];
  const [todos, setTodos] = useState(initialTodos)

  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>

      <main>
        <AddTodo/>

        <section>
          <h2>Todos</h2>

          <TodoList todos={todos}/>  
        </section>
      </main>
    </div>
  );
}

export default App;
