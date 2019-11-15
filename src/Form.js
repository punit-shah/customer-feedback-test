import React from 'react';
import Rating from './Rating';
import './Form.css';

const Form = ({ onSubmit }) => (
  <form className="Form" onSubmit={onSubmit}>
    <label className="Form-label" htmlFor="name">Name</label>
    <input className="Form-field" type="text" name="name" id="name" required />

    <label className="Form-label" htmlFor="email">Email</label>
    <input className="Form-field" type="email" name="email" id="email" required />

    <label className="Form-label" htmlFor="Rating-input-1">Rating</label>
    <Rating name="rating" />

    <label className="Form-label" htmlFor="comment">Comment</label>
    <textarea className="Form-field Form-field-comment" name="comment" id="comment" required />

    <button className="Form-submit" type="submit">Submit feedback</button>
  </form>
);

export default Form;
