import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import './App.css';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
