import React, { useState } from 'react';
import Form from './Form';
import Comments from './Comments';
import initialComments from './data/comments';
import './App.css';

const App = () => {
  const [comments, setComments] = useState(initialComments);

  const onSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newComment = {
      id: Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      rating: formData.get('rating'),
      comment: formData.get('comment'),
    };
    setComments(prevComments => [newComment, ...prevComments]);
  };

  return (
    <div className="App">
      <h1 className="App-heading">Customer feedback</h1>
      <Form onSubmit={onSubmit} />
      <Comments comments={comments} />
    </div>
  );
};

export default App;
