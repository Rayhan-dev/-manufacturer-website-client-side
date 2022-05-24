import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';


const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    let errorMsg;

    if (error || updateError || gerror) {
        errorMsg = (
            <div>
                <p className='text-red-600 font-bold' >Error: {error.message}</p>
            </div>
        );
    }
    if (loading || updating ||gloading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid ms:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 flex items-center h-screen'>
            <div className='text-right mr-12'>
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <p className="py-6">Already have an account? <span className='text-primary' > <Link to={'/login'}>Login Now</Link></span></p>
            </div>
            <div className='w-1/2 bg-base-100 p-5 border border-primary rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='text-black'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered text-black" {...register("name")} />
                    </div>
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
                        <button className="btn btn-primary" type='submit'>Sign Up</button>
                    </div>
                </form>
                <div class="divider text-primary">OR</div>
                <button class="btn btn-primary w-full bg-accent border border-primary text-white" onClick={() => {
                    signInWithGoogle();
                    
                }}>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;