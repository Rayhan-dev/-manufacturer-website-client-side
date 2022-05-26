import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const [paymentData, setPaymentData] = useState([]);
    axios.get(`http://localhost:5000/pay/${id}`)
    .then(function (response) {
        // handle success
        setPaymentData(response.data);
      })
    return (
        <div className='text-black mt-10 mx-auto justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Pay ${paymentData.quantity * paymentData.price} for {paymentData.quantity} pieces of "{paymentData.product }"</h2>
                </div>
            </div>
        </div>
    );
};

export default Payment;