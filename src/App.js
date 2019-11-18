import React from 'react';
import Form from './Form';
import Graph from './Graph';
import Comments from './Comments';
import initialComments from './data/comments';
import './App.css';

const App = () => {
  const [comments, setComments] = React.useState(initialComments);

  const onSubmit = event => {
    const formData = new FormData(event.target);
    const newComment = {
      id: Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      rating: parseInt(formData.get('rating'), 10),
      comment: formData.get('comment'),
    };
    setComments(prevComments => [newComment, ...prevComments]);
  };

  return (
    <div className="App">
      <h1 className="App-heading">Customer feedback</h1>
      <section className="App-form-section">
        <Form onSubmit={onSubmit} />
        <Graph comments={comments} />
      </section>
      <Comments comments={comments} />
    </div>
  );
};

export default App;
