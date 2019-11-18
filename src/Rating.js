import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Rating.css';

const Rating = ({ readOnly, value, name }) => {
  const [currentRating, setCurrentRating] = React.useState(value);

  const onChange = event => setCurrentRating(parseInt(event.target.value, 10));

  const getClassNames = star =>
    classNames([
      'Rating-star',
      { 'Rating-star-filled': currentRating && currentRating >= star },
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
                name={name || 'rating'}
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
        </div>
      ))}
      {readOnly && (
        <span className="Rating-label">
          {`${value} star${value > 1 ? 's' : ''}`}
        </span>
      )}
    </div>
  );
};

Rating.propTypes = {
  readOnly: PropTypes.bool,
  value: PropTypes.number,
  name: PropTypes.string,
};

export default Rating;
