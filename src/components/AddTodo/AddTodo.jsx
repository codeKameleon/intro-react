import React, { useRef }from 'react';
import './AddTodo.scss';

const AddTodo = ({addTodo}) => {
    const inputRef = useRef()

    const handleSubmit = e => {
      e.preventDefault()
      addTodo(inputRef.current.value)
    }

    return (
        <div className="AddTodo">
          <input ref={inputRef} type="text" placeholder="Type a new todo"/>

          <button onClick={handleSubmit}>Add</button>
        </div>
     );
}

export default AddTodo;
