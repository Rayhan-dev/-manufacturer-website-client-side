import React, { useEffect, useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import Loading from '../../Shared/Loading';


const CheckOutForm = ({ data }) => {
    const price = parseInt(data.price) * parseInt(data.quantity);
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [paying, setPaying] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { _id, product, email } = data;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ price })


        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }

            })
    }, [data])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message);
        } else {
            setPaying(true);
            setCardError('');
            const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: product,
                            email: email
                        },
                    },
                },
            );
            if (intentError) {
                setCardError(intentError.message);
                setPaying(false)
            } else {
                setCardError('')
                setTransactionId(paymentIntent.id)
                setSuccess(`your payment is successful`);
                const payment = {
                    transactionId: paymentIntent.id,
                    order: _id
                };
                fetch(`http://localhost:5000/orders/${_id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(payment)
                }).then(res => res.json()).then(data => {
                        console.log(data)
                        setPaying(false)
                    })
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
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
                <button className='btn btn-sm  btn-primary ' type="submit" disabled={!clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                success &&
                <div>
                    <p className='text-green-600'>{success}</p>
                    <p >your transaction Id: <span className='text-blue-400'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;