import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import './Form.css';

const Form = ({ onSubmit }) => (
  <form
    className="Form"
    onSubmit={event => {
      event.preventDefault();
      onSubmit(event);
      event.target.reset();
    }}
  >
    <h2 className="Form-title">Leave a comment</h2>

    <label className="Form-label" htmlFor="name">
      Name
    </label>
    <input className="Form-field" type="text" name="name" id="name" required />

    <label className="Form-label" htmlFor="email">
      Email
    </label>
    <input
      className="Form-field"
      type="email"
      name="email"
      id="email"
      required
    />

    <p className="Form-label">Rating</p>
    <Rating name="rating" />

    <label className="Form-label" htmlFor="comment">
      Comment
    </label>
    <textarea
      className="Form-field Form-field-comment"
      name="comment"
      id="comment"
      required
    />

    <button className="Form-submit" type="submit">
      Submit feedback
    </button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
