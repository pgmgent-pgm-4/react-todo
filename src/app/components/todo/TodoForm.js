import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setMessage('');

    addTodo(message);
  };

  return (
    <div className="todo-form-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" required placeholder="Write your todo ..." onChange={(ev) => setMessage(ev.target.value)} value={message} />
        <input type="submit" value="Add todo" />
      </form>
    </div>
  );
};

export default TodoForm;