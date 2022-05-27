import React from 'react';

const Portfolio = () => {
    return (
        <div className=' h-screen '>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div class=" bg-neutral text-neutral-content border border-primary-focus mx-auto text-left card-body rounded-lg mt-24">
                    <p className='mr-auto'><span className='font-bold'>Name:</span> Kamrul Munir Md Rayhan</p>
                    <p className='mr-auto'><span className='font-bold'>Email:</span>  mohammodrayhan444@gmail.com</p>
                    <p className='mr-auto'><span className='font-bold'>Education:</span> Govt.Chittagong City College (HSC 23')</p>
                </div>
                <div class="bg-neutral text-neutral-content border border-primary-focus mx-auto text-left flex rounded-lg mt-24 p-12 ">
                    <div className='px-12'>
                        <h1 className='font-bold text-2xl'>Technologies</h1>
                        <p className='mr-auto'>HTML</p>
                        <p className='mr-auto'>CSS</p>
                        <p className='mr-auto'>Javascript</p>
                        <p className='mr-auto'>Firebase</p>
                        <p className='mr-auto'>NodeJS</p>
                        <p className='mr-auto'>MongoDB</p>
                    </div>
                    <div className='px-12'>
                        <h1 className='font-bold text-2xl'>Frameworks/Libraries</h1>
                        <p className='mr-auto'>Bootstrap</p>
                        <p className='mr-auto'>Tailwind Css</p>
                        <p className='mr-auto'>daisy Ui</p>
                        <p className='mr-auto'>React</p>
                        <p className='mr-auto'>React router</p>
                        <p className='mr-auto'>ExpressJS</p>
                        <p className='mr-auto'>Node</p>
                        <p className='mr-auto'>Axios</p>
                        <p className='mr-auto'>React query</p>
                        <p className='mr-auto'>React Form Hooks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;