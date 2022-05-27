import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from '../Components/Dashboard/CheckOutForm';
const stripePromise = loadStripe('pk_test_51L3Ts3JAWdakaiyOylFuje4MATxNADi3J9kiTvQ8ZQxCoD4IOsafrMoFKqyeJeAfTNsIqAiOIKQzNaydJxlodyOI0013dJZPPD')

const Payment = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery('repoData', () =>
        axios.get(`http://localhost:5000/pay/${id}`)
    )

    if (isLoading) return <Loading></Loading>

    return (
        <div className='text-black mt-10 mx-auto justify-center pt-24 '>
            <div class="card w-96 bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <h2 class="card-title">Please Pay ${data.data.quantity * data.data.price} for {data.data.quantity} pieces of "{data.data.product}"</h2>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckOutForm data={data.data} />
                </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;