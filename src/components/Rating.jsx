import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Rating = ({ value, text, className }) => {
  return (
    value && (
      <div className={className}>
        <span>
          {value >= 1 ? (
            <FaStar className='text-dark' />
          ) : value >= 0.5 ? (
            <FaStarHalf className='text-dark' />
          ) : (
            ''
          )}
        </span>

        <span>
          {value >= 2 ? (
            <FaStar className='text-dark' />
          ) : value >= 1.5 ? (
            <FaStarHalf className='text-dark' />
          ) : (
            ''
          )}
        </span>

        <span>
          {value >= 3 ? (
            <FaStar className='text-dark' />
          ) : value >= 2.5 ? (
            <FaStarHalf className='text-dark' />
          ) : (
            ''
          )}
        </span>

        <span>
          {value >= 4 ? (
            <FaStar className='text-dark' />
          ) : value >= 3.5 ? (
            <FaStarHalf className='text-dark' />
          ) : (
            ''
          )}
        </span>

        <span>
          {value >= 5 ? (
            <FaStar className='text-dark' />
          ) : value >= 4.5 ? (
            <FaStarHalf className='text-dark' />
          ) : (
            ''
          )}
        </span>

        {text && <p className='d-inline ms-2'>{text}</p>}
      </div>
    )
  );
};

export default Rating;
