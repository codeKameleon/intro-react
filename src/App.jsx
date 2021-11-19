import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Todo from './Todo';

import './App.css';

const App = () => {
  // Initializing the state
  const [todos, setTodos] = useState([])
  const [taskCompleted, setTaskCompleted] =  useState(false)

  // Updating the state
    // Adding todosid: uuidv4()
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), name: todo, completed: taskCompleted}])
  }

    // Removing todos
  const removeTodo = todo => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }

    // Change todo completion status
  const updateCompletion = todo => {
    console.log(todo.id)
    // target the item clicked and change its completion status
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

          <TodoList todos={todos} renderItem={todo =>(
            <Todo 
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              updateCompletion={updateCompletion}
              />
          )}
          />  
        </section>
      </main>
    </div>
  );
}

export default App;
