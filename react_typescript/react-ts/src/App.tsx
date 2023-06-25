import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <>
      <Todos 
        items={['Learn TypeScript', 'Learn React']}
      />
    </>
  );
}

export default App;
