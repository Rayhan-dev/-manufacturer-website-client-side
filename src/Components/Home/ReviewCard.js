import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card w-96 shadow-secondary  shadow-xl border border-primary mx-auto mt-5 flex flex-row items-center p-5">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <div className="card-body">
                <h2 className="card-title"> {review.name}</h2>
                <p> -{review.review}</p>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked={review.rating>=1} />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked={review.rating>=2}/>
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked={review.rating>=3}/>
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked={review.rating>=4}/>
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked={review.rating>=5}/>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;