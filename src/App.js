import React, {useState, useRef, useEffect} from 'react'
import TodoList from "./TodoList"



function App() {
  const  [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  function handleAtTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      
      return [...prevTodos, {id: Math.random(), name: name, complete: false}]
    })
    
    todoNameRef.current.value = null;
  }
  return (
    <>
      <TodoList todos = {todos}/>
      <input ref={todoNameRef} type='text'/>
      <button onClick={handleAtTodo}>Add ToDo</button>
      <button>Clear Completed Todos</button>
    </>
  );
}

export default App;
