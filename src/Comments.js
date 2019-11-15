import React from 'react';
import './Comments.css';
import Rating from './Rating';

const Comments = ({ comments }) => (
  <section className="Comments">
    {comments.map(({ id, name, rating, comment }) => (
      <div className="comment" key={id}>
        <div className="comment-name">{name}</div>
        <Rating readOnly value={rating} />
        <p className="comment-body">{comment}</p>
      </div>
    ))}
  </section>
);

export default Comments;
