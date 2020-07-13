import React from 'react';
import Todo from './Todo';

const TodosList = ({ todos, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TodosList;
