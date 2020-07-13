import React from 'react';

const Todo = ({ todo, toggleComplete }) => {
  return (
    <div
      onClick={() => toggleComplete(todo.id)}
      className={`container ${todo.completed && 'completed'}`}
    >
      <h2 className='todo'>{todo.item}</h2>
    </div>
  );
};

export default Todo;
