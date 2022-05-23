import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    let errorMsg;
    if (error || gerror) {
        errorMsg = (
            <div>
                <p className='text-red-600 font-bold'>Error: {error.message}</p>
            </div>
        );
    }
    if (loading || gloading) {
        return <p>Loading...</p>;
    }
    return (
        <div className='h-screen'>
            <div className='grid ms:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 flex items-center h-screen '>
                <div className='text-right mr-12'>
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">New to RobotoLab?<span className='text-primary' > <Link to={'/signUp'}>Register Now</Link></span></p>
                </div>
                <div className='w-1/2 bg-base-100 p-5 border border-primary rounded-lg'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input required type="email" placeholder="email" className="input input-bordered text-black" {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input required type="password" placeholder="password" className="input input-bordered text-black" {...register("password")} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {errorMsg}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </div>
                    </form>
                    <div class="divider text-primary">OR</div>
                    <button class="btn btn-primary w-full bg-accent border border-primary text-white" onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;