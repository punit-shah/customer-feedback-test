import React, { useState } from 'react';
import classNames from 'classnames';
import './Rating.css';

const Rating = ({ name, readOnly, value }) => {
  const [currentRating, setCurrentRating] = useState(null);

  const onChange = event => setCurrentRating(parseInt(event.target.value, 10));

  const getClassNames = (thisStar, filledStars) =>
    classNames([
      'Rating-star',
      { 'Rating-star-filled': filledStars && filledStars >= thisStar },
    ]);

  return (
    <div className={classNames(['Rating', { 'Rating-readonly': readOnly }])}>
      {Array.from([1, 2, 3, 4, 5], star => (
        <div key={star}>
          {readOnly ? (
            <div className={getClassNames(star, value)} />
          ) : (
            <>
              <input
                className="Rating-input"
                id={`Rating-input-${star}`}
                type="radio"
                name={name}
                value={star}
                checked={currentRating === star}
                onChange={onChange}
                required
              />
              <label
                className={getClassNames(star, currentRating)}
                htmlFor={`Rating-input-${star}`}
              >
                <span className="Rating-label">
                  {`${star} star${star > 1 ? 's' : ''}`}
                </span>
              </label>
            </>
          )}
          {readOnly && (
            <span className="Rating-label">
              {`${value} star${value > 1 ? 's' : ''}`}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rating;
