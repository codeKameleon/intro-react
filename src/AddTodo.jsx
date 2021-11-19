import React, { useRef }from 'react';

const AddTodo = () => {
    const inputRef = useRef()

    const clickHandler = () => {
        const inputElement = inputRef.current
        const inputValue = inputElement.value
        console.log(inputValue)
    }

    return ( 
        <div>
          <input ref={inputRef} type="text" placeholder="Type a new todo"/>

          <button onClick={clickHandler}>Add Todo</button>
        </div>
     );
}

export default AddTodo;