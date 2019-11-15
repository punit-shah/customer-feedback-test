import React from 'react';
import './Comments.css';
import Rating from './Rating';

const Comments = ({ comments }) => (
  <div className="Comments">
    {comments.map(({ id, name, rating, comment }) => (
      <div className="comment" key={id}>
        <div className="comment-name">{name}</div>
        <Rating readOnly value={rating} />
        <p className="comment-body">{comment}</p>
      </div>
    ))}
  </div>
);

export default Comments;
