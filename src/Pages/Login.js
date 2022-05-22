import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='grid ms:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1'>
            <div className='text-left'>
                <h1 class="text-5xl font-bold">Login now!</h1>
                <p class="py-6">New to RobotoLab? <Link to={'/signUp'}>Register Now</Link></p>
            </div>
        </div>
    );
};

export default Login;