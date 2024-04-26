import React, { useState } from 'react';
import OneTodo from '../ui/OneTodo';
import Form from '../ui/Form';

export default function IndexPage({ todos }) {
  const [curTodos, setCurTodos] = useState(todos || []);
  const [input, setInput] = useState({ todo: '' });

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
    });

    if (response.ok) {
      const todo = await response.json();
      console.log(todo);
      setCurTodos((prev) => [...prev, todo]);
      setInput({ todo: '' });
    }
  };

  const deleteHandler = async (id) => {
    await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    setCurTodos((prev) => prev.filter((el) => el.id !== id));
  };

  const checkHandler = async (id) => {
    const currentTodo = curTodos.find((todo) => todo.id === id);

    const res = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ done: !currentTodo.done }),
    });

    if (res.ok) {
      setCurTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
      );
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>Список задач:</div>
      <Form input={input} inputHandler={inputHandler} submitHandler={submitHandler} />
      <h3 className="mt-4">Не выполнено</h3>
      <ul className="list-group">
        {todos.length ? (
          curTodos
            .filter((el) => !el.done)
            .map((el, index) => (
              <OneTodo
                key={el.id}
                deleteHandler={deleteHandler}
                checkHandler={checkHandler}
                todo={el}
                index={index}
              />
            ))
        ) : (
          <h3>Нет задач</h3>
        )}
      </ul>

      <h3 className="mt-4">Выполнено</h3>
      <ul className="list-group">
        {todos.length ? (
          curTodos
            .filter((el) => el.done)
            .map((el, index) => (
              <OneTodo
                key={el.id}
                deleteHandler={deleteHandler}
                checkHandler={checkHandler}
                todo={el}
                index={index}
              />
            ))
        ) : (
          <h3>Нет задач</h3>
        )}
      </ul>
    </>
  );
}
