import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewCard = ({ review }) => {    
    return (
        <div className="card mx-12   shadow-secondary  shadow-xl border border-primary mx-auto mt-5 flex flex-row items-center p-5">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <div className="card-body">
                <h2 className="card-title"> {review.name}</h2>
                <p className='text-left text-primary'>{review.review}</p>
                <Rating
                    className='mr-auto'
                  initialRating={review.rating}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={
                    <FontAwesomeIcon
                      style={{ color: "goldenrod" }}
                      icon={faStar}
                    />
                  }
                  readonly
                ></Rating>
            </div>
        </div>
    );
};

export default ReviewCard;