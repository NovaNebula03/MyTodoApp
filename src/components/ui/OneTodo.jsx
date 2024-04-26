import React from 'react';

export default function OneTodo({ todo, index, deleteHandler, checkHandler }) {
  return (
    <li className="list-group-item mt-3 d-flex justify-content-between align-items-center border border-2">
      <div>
        {index + 1} -{todo.todo}
      </div>
      <div className="d-flex align-items-center gap-2">
        <input
          name="done"
          type="checkbox"
          checked={todo.done}
          onChange={() => checkHandler(todo.id)}
          className="form-check-input mt-0 ms-auto"
        />
        <button onClick={() => deleteHandler(todo.id)} type="button" className="btn btn-danger">
          Удалить
        </button>
        <a href={`/todos/change/${todo.id}`} className="btn btn-secondary">
          Изменить
        </a>
      </div>
    </li>
  );
}
