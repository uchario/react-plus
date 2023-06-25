import React from 'react';
import Todos from './components/Todos';
import Todo from './models/Todo';
import './App.css';

function App() {
  const todos = [
    new Todo('Learn TypeScript'),
    new Todo('Learn React')
  ];
  return (
    <>
      <Todos 
        items={todos}
      />
    </>
  );
}

export default App;
