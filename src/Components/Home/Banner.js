import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-2 px-24 '>
            <div className='text-left py-36'>
                <h1 className='text-6xl pb-10 font-bold'>Robots for a better <br /><span className='text-primary'> Everyday</span> </h1>
                <p className='text-xl text-secondary pb-16'> We provide the best tools to build robots worldwide! <br />
                    Only we can make out life easier through putting some serious work now </p>
                <button id='product_section' className='bg-accent border border-primary text-white p-4 hover:bg-transparent '>View Products</button>
            </div>
            <div>
                <img  className='md:block sm:hidden w-2/3 mx-auto items-center mt-36 border border-primary rounded-lg ' src="https://augmentus.tech/wp-content/uploads/2021/02/Welding-2_2MP.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;