import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';
import Rating from './Rating';

const Comments = ({ comments }) => (
  <section className="Comments">
    <h2 className="Comments-title">Latest comments</h2>
    {comments.map(({ id, name, rating, comment }) => (
      <div className="comment" key={id}>
        <div className="comment-name">{name}</div>
        <Rating readOnly value={rating} />
        <p className="comment-body">{comment}</p>
      </div>
    ))}
  </section>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Comments;
