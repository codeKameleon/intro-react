import './Todo.scss'

const Todo = ({todo, removeTodo, updateCompletion}) => {
    const snakeCase = str => {
        str = str.replace(/ /g,"_"); 
        return str
    }

    return ( 
        <li id={todo.id}>
            <input onChange={() => updateCompletion(todo)} type="checkbox" id={snakeCase(todo.name)} checked={todo.completed} />
            <label className={todo.completed ? 'isCompleted' : 'isNotCompleted'} htmlFor={snakeCase(todo.name)}>{todo.name}</label>
            <button onClick={() => removeTodo(todo)}>Remove</button>
        </li>
     );
}

export default Todo;