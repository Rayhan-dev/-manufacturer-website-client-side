import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://blooming-shelf-97810.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl lg:text-6xl md:text-4xl sm:text-3xl font-bold py-12'>Some reviews from our customer</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  '>

                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;