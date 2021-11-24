import { snakeCase } from '../../utilities/snakeCase';
import './Todo.scss'

const Todo = ({todo, removeTodo, updateCompletion}) => {
    return ( 
        <li className="Todo" id={todo.id}>
            <input onChange={() => updateCompletion(todo)} type="checkbox" id={snakeCase(todo.name)} checked={todo.completed} />
            <label className={todo.completed ? 'isCompleted' : 'isNotCompleted'} htmlFor={snakeCase(todo.name)}>{todo.name}</label>
            <button type="button" onClick={() => removeTodo(todo)}>Remove</button>
        </li>
     );
}

export default Todo;
