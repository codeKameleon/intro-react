import './TodoList.scss';

const TodoList = ({todos, renderItem}) => {
    return ( 
        <div className="TodoList">
          <ul>
              {todos.map(todo => renderItem(todo))}
          </ul>
        </div>
     );
}

export default TodoList;
