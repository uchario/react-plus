import React from 'react';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

import './App.css';

function App() {
  const todos = [
    new Todo('Learn TypeScript'),
    new Todo('Learn React')
  ];

  const addTodoHandler = (todoText: string) => {
    
  }

  return (
    <>
      <NewTodo
        onAddTodo={addTodoHandler}
      />
      <Todos 
        items={todos}
      />
    </>
  );
}

export default App;
