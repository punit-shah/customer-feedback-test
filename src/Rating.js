import React from 'react';
import classNames from 'classnames';
import './Rating.css';

const Rating = ({ readOnly, value, name }) => {
  const [currentRating, setCurrentRating] = React.useState(value);

  const onChange = event => setCurrentRating(parseInt(event.target.value, 10));

  const getClassNames = (thisStar) =>
    classNames([
      'Rating-star',
      { 'Rating-star-filled': currentRating && currentRating >= thisStar },
    ]);

  return (
    <div className={classNames(['Rating', { 'Rating-readonly': readOnly }])}>
      {Array.from([1, 2, 3, 4, 5], star => (
        <div key={star}>
          {readOnly ? (
            <div className={getClassNames(star)} />
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
                className={getClassNames(star)}
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
