import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Addreview = () => {
    const axios = require('axios').default;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/addReview', data)
            .then(function (response) {
                // handle success
                console.log(response);
                toast.success('successfully addede Review')
            })
    };
    return (
        <div>
            <div className='mx-auto'>
                <h1 className='text-primary font-bold text-4xl py-10'>Add a Review</h1>
                <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg bg-white p-12 border rounded-lg mx-auto">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Your Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='user' {...register("name")} />
                        </div>

                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Review Text
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='user' {...register("review")} />
                        </div>

                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Rating
                            </label>
                            <div className={`flex flex-row`} >

                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name='quantityField'
                                    type="number"
                                    id="quantity"
                                    {...register("rating", { min: 1, max: 5 })}
                                />
                                
                            </div>
                            <p className='text-red-600'>{errors.rating && "Rating should be between 1 to 5"}</p>
                        </div>
                    </div>
                    <button class="btn bg-accent text-white border border-primary mt-5" type='submit' >Add Review</button>
                </form >
            </div>
        </div>
    );
};

export default Addreview;