import React, { useReducer, useState } from 'react';
import './App.css';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodosList from './components/TodosList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // currentTodo is used for new todo form input -- bad name, i know
  const [currentTodo, setCurrentTodo] = useState('');

  const handleChanges = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: currentTodo });
    setCurrentTodo('');
  };

  const toggleComplete = (todoId) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: todoId });
  };

  const clearCompleted = (e) => {
    // e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className='App'>
      <h1>Reducer Pattern Todo App</h1>
      <AddTodoForm
        currentTodo={currentTodo}
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        clearCompleted={clearCompleted}
      />
      <TodosList todos={state} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
