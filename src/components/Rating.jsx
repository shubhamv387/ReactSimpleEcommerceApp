import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Rating = ({ value, text, className, starColor }) => {
  return (
    value && (
      <div className={className}>
        <span className='d-flex flex-row'>
          {value >= 1 ? (
            <FaStar className={starColor} />
          ) : value >= 0.5 ? (
            <FaStarHalf className={starColor} />
          ) : (
            ''
          )}
        </span>

        <span className='d-flex flex-row'>
          {value >= 2 ? (
            <FaStar className={starColor} />
          ) : value >= 1.5 ? (
            <FaStarHalf className={starColor} />
          ) : (
            ''
          )}
        </span>

        <span className='d-flex flex-row'>
          {value >= 3 ? (
            <FaStar className={starColor} />
          ) : value >= 2.5 ? (
            <FaStarHalf className={starColor} />
          ) : (
            ''
          )}
        </span>

        <span className='d-flex flex-row'>
          {value >= 4 ? (
            <FaStar className={starColor} />
          ) : value >= 3.5 ? (
            <FaStarHalf className={starColor} />
          ) : (
            ''
          )}
        </span>

        <span className='d-flex flex-row'>
          {value >= 5 ? (
            <FaStar className={starColor} />
          ) : value >= 4.5 ? (
            <FaStarHalf className={starColor} />
          ) : (
            ''
          )}
        </span>

        {text && <p className='d-inline ms-2 mb-0'>{text}</p>}
      </div>
    )
  );
};

export default Rating;
