import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='grid ms:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 flex items-center h-screen '>
            <div className='text-right mr-12'>
                <h1 class="text-5xl font-bold">Login now!</h1>
                <p class="py-6">New to RobotoLab?<span className='text-primary' > <Link to={'/signUp'}>Register Now</Link></span></p>
            </div>
            <div className='w-1/2 bg-base-100 p-5 border border-primary rounded-lg'>
                <form > 
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text ">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered text-black" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text ">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered text-black" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;