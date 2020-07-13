import React, { useReducer } from 'react';
import './App.css';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodosList from './components/TodosList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='App'>
      <h1>Reducer Pattern Todo App</h1>
      <TodosList todos={state} />
    </div>
  );
}

export default App;
