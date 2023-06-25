import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

import './App.css';

function App() {
 const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.id !== id);
    });
  }

  return (
    <>
      <NewTodo
        onAddTodo={addTodoHandler}
      />
      <Todos 
        items={todos}
        onRemoveTodo={removeTodoHandler}
      />
    </>
  );
}

export default App;
