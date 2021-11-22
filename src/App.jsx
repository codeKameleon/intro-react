import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Todo from './Todo';

import './App.css';

const App = () => {
  // Initializing the state
  const [todosToComplete, setTodosToComplete] = useState([])
  const [todosCompleted, setTodosCompleted] = useState([])

  // Updating the state
  const addTodo = todo => {
    setTodosToComplete([...todosToComplete, {id: uuidv4(), name: todo, completed: false}])
  }

    // Removing todos
  const removeTodo = todo => {
    if(todo.completed === false) {
      setTodosToComplete(todosToComplete.filter(t => t.id !== todo.id))
    } else {
      setTodosCompleted(todosCompleted.filter(t => t.id !== todo.id))
    }
  }

    // Change todo completion status
  const updateCompletion = todo => {
    if(todo.completed === false) {
      setTodosCompleted([...todosCompleted, todo])
      setTodosToComplete(todos => todosToComplete.filter(todo => todo.completed === false))
    } else {
      setTodosToComplete([...todosToComplete, todo])
      setTodosCompleted(todos => todosCompleted.filter(todo => todo.completed === true))
    }

    todo.completed = !todo.completed
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

          <TodoList todos={todosToComplete} renderItem={todo =>(
            <Todo 
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              updateCompletion={updateCompletion}
              />
          )}
          />  
        </section>

        <section>
          <h2>Tasks completed</h2>

            <TodoList todos={todosCompleted} renderItem={todo => (
              <Todo 
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              updateCompletion={updateCompletion}
              />
            )}/>
        </section>
      </main>
    </div>
  );
}

export default App;
