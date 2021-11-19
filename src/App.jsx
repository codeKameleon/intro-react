import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Todo from './Todo';

import './App.css';

const App = () => {
  // Initializing the state
  const [todos, setTodos] = useState([])

  // Updating the state

    // Adding todos
  const addTodo =  todo => {
    setTodos([...todos, {id: uuidv4(), name: todo, completed: false}])
  }

  // Removing todos
  const removeTodo = todo => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }
  
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>

      <main>
        <AddTodo addTodo={addTodo}/>

        <section>
          <h2>Todos</h2>

          <TodoList todos={todos} renderItem={todo =>(
            <Todo 
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              />
          )}
          />  
        </section>
      </main>
    </div>
  );
}

export default App;
