import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='md:flex py-24'>
                <div className='text-left mx-12 pb-12'>
                    <h1 className='text-2xl lg:text-6xl md:text-4xl sm:text-3xl pb-10 font-bold'>Robots for a better <br /><span className='text-primary'> Everyday</span> </h1>
                    <p className='text-md md:text-lg lg:text-xl  text-secondary pb-16'> We provide the best tools to build robots worldwide! <br />
                        Only we can make out life easier through putting some serious work now </p>
                    <button id='product_section' className='bg-accent border border-primary text-white p-4 hover:bg-transparent '>View Products</button>
                </div>
                <div className='text-right mx-12'>
                    <img className='lg:w-2/3 mx-auto border border-primary rounded-lg ' src="https://augmentus.tech/wp-content/uploads/2021/02/Welding-2_2MP.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;