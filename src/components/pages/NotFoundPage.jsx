import React from 'react';

export default function NotFoundPage() {
  const stylePage = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '150px',
    flexDirection: 'column',
    height: '100vh',
    margin: '0px',
  };

  const style404 = {
    fontSize: '200px',
    margin: '10px 0',
  };

  const styleDescription = {
    fontSize: '40px',
    margin: '5px 0',
  };

  const styleLink = {
    fontSize: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'green',
  };

  return (
    <div style={stylePage}>
      <h1 style={style404}>404</h1>
      <h3 style={styleDescription}>страница не найдена</h3>
      <a href="/" style={styleLink}>
        Перейдите на главную страницу
      </a>
    </div>
  );
}
