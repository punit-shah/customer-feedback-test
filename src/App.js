import React from 'react';
import Form from './Form';
import './App.css';

const App = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1 className="App-heading">Customer feedback</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default App;
