import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'


const CheckOutForm = ({ data }) => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const { price } = data;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret){
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        } else {
            setCardError('');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                width:'100%',
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
        </>
    );
};

export default CheckOutForm;