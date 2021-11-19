const TodoList = ({todos, renderItem}) => {
    return ( 
        <div>
          <ul>
              {todos.map(todo => renderItem(todo))}
          </ul>
        </div>
     );
}

export default TodoList;