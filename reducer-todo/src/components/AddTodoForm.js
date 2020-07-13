import React from 'react';

const AddTodoForm = (props) => {
  return (
    <div class='add-todo container'>
      <input
        type='text'
        name='currentTodo'
        value={props.currentTodo}
        onChange={props.handleChanges}
      />
      <div class='todoForm-buttons'>
        <button onClick={props.handleSubmit}>Add Item</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default AddTodoForm;
