import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/layout';
import { TodoForm, TodoList } from './components/todo';

import './App.css';

/* Todo Model
id: string (GUID)
message: string
completed: boolean
createdAt: number
modifiedAt: number
*/

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todoapp.todos')) || []);

  useEffect(() => {
    localStorage.setItem('todoapp.todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (message) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        message: message,
        completed: false,
        createdAt: new Date().getTime(),
        modifiedAt: null
      }
    ]);
  };

  const completeTodo = (id, completed) => {
    setTodos([
      ...todos.map((todo) => todo.id === id ? {...todo, completed, modifiedAt: new Date().getTime() } : todo)
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <main className="app__main">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} completeTodo={(id, completed) => completeTodo(id, completed)} removeTodo={(id) => removeTodo(id)} />
        </main>
      </div>
    </div>
  );
}

export default App;