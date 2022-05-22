import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div class="card w-96 bg-secondary shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{review.name}</h2>
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;