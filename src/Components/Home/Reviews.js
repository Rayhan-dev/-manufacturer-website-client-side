import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
        .then()
    return (
        <div>
            <h1 className='text-5xl font-bold py-12'>Some reviews from our customer</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>

                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;