import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>

      <main>
        <div>
          <input type="text" value="" placeholder="Type a new todo"/>
          <button>Add Todo</button>
        </div>

        <div>
          <h2>Todos</h2>
          <ul>
            <li>
              <input type="checkbox" id="learn-react" />
              <label htmlFor="learn-react">Learn React</label>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
