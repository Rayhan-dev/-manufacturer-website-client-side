import React from 'react';

const Profile = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Profile;