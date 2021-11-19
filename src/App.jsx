import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>

      <main>
        <AddTodo/>

        <section>
          <h2>Todos</h2>

          <TodoList/>
        </section>
      </main>
    </div>
  );
}

export default App;
