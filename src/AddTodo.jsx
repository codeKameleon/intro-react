import React, { useRef }from 'react';

const AddTodo = ({addTodo}) => {
    const inputRef = useRef()

    const handleSubmit = e => {
      e.preventDefault()
      addTodo(inputRef.current.value)
    }

    return (
        <div>
          <input ref={inputRef} type="text" placeholder="Type a new todo"/>

          <button onClick={handleSubmit}>Add Todo</button>
        </div>
     );
}

export default AddTodo;