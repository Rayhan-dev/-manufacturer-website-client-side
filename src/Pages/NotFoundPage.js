import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen'>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <img src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png" alt="" />
                <h1 className='text-primary text-8xl font-bold flex justify-center items-center'>Page Not Found</h1>
           </div>
        </div>
    );
};

export default NotFoundPage;