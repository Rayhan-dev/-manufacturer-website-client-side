import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';
const Profile = () => {
   
    const [user, loading, error] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([]);
    if (user) {
        axios.get(`http://localhost:5000/admin/${user.email}`)
            .then(function (response) {
                setUserInfo(response.data[0])
            })
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.put(`http://localhost:5000/user/${user.email}`, data)
        .then(function (response) {
            // handle success
            console.log(response);
            toast.success('Profile Updated')
          })
        
    };
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  items-center'>
            <div>
                <h1 className='text-primary font-bold text-4xl py-10'>Your Profile Information</h1>
                <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body text-black text-left">
                        <p><span className='font-bold'>Name: </span>{user.displayName} </p>
                        <p><span className='font-bold'>Email: </span>{user.email} </p>
                        <p><span className='font-bold'>Education: </span>{userInfo?.education}</p>
                        <p><span className='font-bold'>Location: </span>{userInfo?.location} </p>
                        <p><span className='font-bold'>Phone No: </span>{userInfo?.phone}</p>
                        <p><span className='font-bold'>Linkedin Profile: </span>{userInfo?.linkedin} </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-primary font-bold text-4xl py-10'>Edit Your Information</h1>
                <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg bg-white p-12 border rounded-lg mx-auto">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Education
                            </label>
                            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='user' {...register("education")} />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Location
                            </label>
                            <div className={`flex flex-row`} >

                                <input
                                    required
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name='quantityField'
                                    type="text"
                                    id="quantity"
                                    {...register("location")}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Phone Number
                            </label>
                            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" name='phone' {...register("phone")} />
                        </div>

                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                LinkedIn profile link
                            </label>
                            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" name='phone' {...register("linkedin")} />
                        </div>

                    </div>

                    <button class="btn bg-accent text-white border border-primary mt-5" type='submit' >Update</button>
                </form >
            </div>
        </div>
    );
};

export default Profile;