import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
const axios = require('axios');
const PurchasePage = () => {

    const { id } = useParams();
    const [purchaseItem, setPurchaseItem] = useState([])
    const [OrderQuantity, setOrderQuantity] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => {
                setPurchaseItem(data);
                setOrderQuantity(data.minOrder)
            })
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            user: event.target.user.value,
            email: event.target.email.value,
            product: event.target.product.value,
            quantity: event.target.quantityField.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            price: purchaseItem.price,
            status:"pending"
        }

        axios.post('http://localhost:5000/orders', {
            data

        })
            .then(function (response) {
                console.log(response);
                toast.success("Order placed!!")
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const [user] = useAuthState(auth);


    return (
        <div className=' h-screen mt-24'>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div>
                    <div className={`card card-side border border-primary rounded-lg mt-5 mx-12 my-5 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2`} >
                        <figure><img src={purchaseItem.img} alt="Movie" /></figure>
                        <div className="card-body text-left ">
                            <h1 className='text-3xl font-bold' >{purchaseItem.name}</h1>
                            <p>{purchaseItem.description}</p>
                            <p>price: {purchaseItem.price}$</p>
                            <p>minimum order: {purchaseItem.minOrder} pieces</p>
                            <p>Available:  {purchaseItem.available} pieces</p>
                            <div className="card-actions justify-start">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit} class="w-full max-w-lg bg-white p-12 border rounded-lg mx-auto">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='user' value={user.displayName} />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Email
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" value={user.email} disabled name='email' />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Product
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name="product" value={purchaseItem.name} disabled />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                    Quantity
                                </label>
                                <div className={`flex flex-row`} >
                                    <button
                                        disabled={purchaseItem.available <= OrderQuantity}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setOrderQuantity(OrderQuantity + 1);
                                        }}
                                        className='text-white bg-primary p-1 font-bold text-2xl'>+</button>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='quantityField'
                                        type="number"
                                        id="quantity"
                                        value={OrderQuantity}
                                        onChange={async (event) => {
                                            setOrderQuantity(parseInt((event.target.value)))
                                        }} />
                                    <button disabled={purchaseItem.minOrder >= OrderQuantity} onClick={(event) => {
                                        event.preventDefault();
                                        setOrderQuantity(parseInt(OrderQuantity - 1))
                                    }} className='text-white bg-primary p-2 font-bold text-2xl'>-</button>
                                </div>
                            </div>

                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                    Phone Number
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="0171......" name='phone' />
                            </div>

                        </div>
                        <div class="w-full px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Address
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Road no , house no ...." name='address' />
                        </div>
                        <div>
                            <p className={purchaseItem.minOrder > OrderQuantity ? `text-red-600 font-bold` : `hidden`}>You have to order more than {purchaseItem.minOrder} pieces</p>
                            <p className={purchaseItem.available < OrderQuantity ? `text-red-600 font-bold` : `hidden`}>You can't order more than {purchaseItem.available} pieces right now</p>
                        </div>

                        <button class="btn btn-primary mt-3" type='submit' disabled={OrderQuantity < purchaseItem.minOrder || OrderQuantity > purchaseItem.available} >Place Order</button>


                    </form >
                </div>
            </div>
        </div >
    );
};

export default PurchasePage;