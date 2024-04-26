import React from 'react';

export default function Form({ input, todo, inputHandler, submitHandler }) {
  return (
    <div className="row">
      <form onSubmit={submitHandler} className="d-flex align-items-center">
        <div className="input-group">
          {input ? (
            <input
              onChange={inputHandler}
              value={input.todo}
              type="text"
              name="todo"
              className="form-control"
              id="exampleFormControlInput1"
              autoComplete="off"
            />
          ) : (
            <input
              defaultValue={todo.todo}
              type="text"
              name="todo"
              className="form-control"
              id="exampleFormControlInput1"
              autoComplete="off"
            />
          )}
          <button className="btn btn-primary" type="submit">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
