import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';

import './App.scss';

const LSKEY = 'MyTodoApp'

const App = () => {
  // Initializing the state
  const [todosToComplete, setTodosToComplete] = useState([])
  const [todosCompleted, setTodosCompleted] = useState([])

    // Updating the state
  const addTodo = todo => {
    setTodosToComplete([...todosToComplete, {id: uuidv4(), name: todo, completed: false}])
  }

    // Removing todo
  const removeTodo = todo => {
    if(todo.completed === false) {
      setTodosToComplete(todosToComplete.filter(t => t.id !== todo.id))
    } else {
      setTodosCompleted(todosCompleted.filter(t => t.id !== todo.id))
    }
  }

    // Removing all todos (to complete & completed)
  const clearTodos = () => {
    setTodosToComplete([])
    setTodosCompleted([])
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

  // Get todos from localStorage
  useEffect(() => {
    const storedTodosToComplete = JSON.parse(localStorage.getItem(LSKEY + ".todos_to_complete"))
    const storedTodosCompleted = JSON.parse(localStorage.getItem(LSKEY + ".todos_completed"))

    setTodosToComplete(storedTodosToComplete)
    setTodosCompleted(storedTodosCompleted)
  },[])

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem(LSKEY + ".todos_to_complete", JSON.stringify(todosToComplete));
  },[todosToComplete]);

  useEffect(() => {
    localStorage.setItem(LSKEY + ".todos_completed", JSON.stringify(todosCompleted));
  }, [todosCompleted])

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
        <AddTodo addTodo={addTodo}/>
      </header>

      <main>
        {todosToComplete.length > 0 ? (
          <section>
            <TodoList 
              todos={todosToComplete} 
              renderItem={todo => (
              <Todo 
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                updateCompletion={updateCompletion}
                />
              )}
            />  
          </section>
          )
          :
          null
        }

        {todosCompleted.length > 0 ? (
          <section>
            <h2>{todosCompleted.length} {todosCompleted.length < 2 ? 'task' : 'tasks'} completed</h2>

            <TodoList todos={todosCompleted} renderItem={todo => (
              <Todo 
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              updateCompletion={updateCompletion}
              />
            )}/>
          </section> 
          )
          :
          null
        }

        {todosCompleted.length > 0 ? (
          <button onClick={clearTodos} className="clear-btn">Clear</button>
        )
        : 
        null
        }
      </main>
    </div>
  );
}

export default App;
