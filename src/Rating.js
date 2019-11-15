import React, { useState } from 'react';
import classNames from 'classnames';
import './Rating.css';

const Rating = ({ name }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onChange = event => setSelectedOption(event.target.value);

  const getClassNames = option => {
    const starRating = selectedOption && parseInt(selectedOption, 10);

    return classNames([
      'Rating-star',
      { 'Rating-star-filled': starRating && starRating >= option },
    ]);
  };

  return (
    <div className="Rating">
      {Array.from([1, 2, 3, 4, 5], stars => (
        <div>
          <input
            className="Rating-input"
            id={`Rating-input-${stars}`}
            type="radio"
            name={name}
            value={stars}
            checked={selectedOption === stars}
            onChange={onChange}
            required
          />
          <label
            className={getClassNames(stars)}
            htmlFor={`Rating-input-${stars}`}
          >
            <span className="Rating-label">
              {`${stars} star${stars > 1 ? 's' : ''}`}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Rating;
