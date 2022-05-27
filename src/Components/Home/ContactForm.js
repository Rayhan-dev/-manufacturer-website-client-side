import React from 'react';

const ContactForm = () => {
    return (
        <div>
             <h1 className='text-5xl font-bold py-24 mt-24'>Subsrcribe to out newsletter</h1>
            <div class="card w-1/2 bg-base-100 shadow-xl mx-auto  text-black">
                <div class="card-body">
                    <h2 class=" mb-2 card-title mx-auto">You'll inforemd about our tools and features of those</h2>
                    <input type="email" placeholder="Your email" class="mb-2 input w-full max-w-xl mx-auto border border-black" />
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary" >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;