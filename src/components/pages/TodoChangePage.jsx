import React, { useState } from 'react';
import Form from '../ui/Form';

export default function TodoChangePage({ todo }) {
  const [err, setErr] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    const res = await fetch(`/api/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      window.location = '/';
    } else {
      setErr(true);
    }
  };
  return (
    <>
      <h3>Изменить</h3>
      <Form todo={todo} submitHandler={submitHandler} />
      {err
      && (
      <p className="mt-3">
        Ошибка
      </p>
      )}
    </>
  );
}
