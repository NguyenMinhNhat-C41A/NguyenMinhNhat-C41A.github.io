import React from 'react'
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList/>
      <input type='text'/>
      <button>Add ToDo</button>
      <button>Clear Completed Todos</button>
    </>
  );
}

export default App;
