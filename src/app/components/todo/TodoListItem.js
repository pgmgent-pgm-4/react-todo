import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({todo, completeTodo, removeTodo}) => {
  return (
    <li className={`todo-list__item${(todo.completed) ? ' todo-list__item--completed' : ''}`}>
      <h1>{todo.message}</h1>
      <span className="btn-complete" onClick={(ev) => completeTodo(todo.id, !todo.completed)}>C</span>
      <span className="btn-remove" onClick={(ev) => removeTodo(todo.id)}>D</span>
    </li>
  );
};

export default TodoListItem;