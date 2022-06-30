import axios from 'axios';
import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';


const ManageOrders = () => {

    useEffect(() => {
        axios.get(`http://localhost:5000/orders`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(function (response) {
                setOrders(response.data);
            })
    }, [() => updateStatus])

    const [orders, setOrders] = useState([])

    const updateStatus = (order) => {
        const transactionID = order.transactionID;
        axios.put(`http://localhost:5000/orders/${transactionID}`)
            .then(function (response) {
                // handle success
                console.log(response);
                toast.success("Successfully Delivered");
            })

    }


    return (
        <div>
            <h1 className='text-primary text-4xl py-5 font-bold'>Manage Orders</h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span >Orderd By</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span >Payment</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span >Status</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span >Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {order.product}
                                    </th>
                                    <td class="px-6 py-4">
                                        {order.quantity}
                                    </td>
                                    <td class="px-6 py-4">
                                        {order.price * order.quantity}
                                    </td>
                                    <td>
                                        {order.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {
                                            order.paid ?
                                                <span className='text-white px-4 py-3 border border-transparent rounded-lg bg-green-600'>Paid</span>
                                                :
                                                <span className='text-white px-4 py-3 border border-transparent rounded-lg bg-red-600'>UnPaid</span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            order.paid &&
                                            <span className='text-white px-4 py-3 border border-transparent rounded-lg bg-yellow-600'>{order.status}</span>

                                        }
                                    </td>
                                    <td>
                                        {
                                            (order.paid && order.status == "pending") &&
                                            <button><span className='text-white px-4 py-3 border border-transparent rounded-lg bg-blue-600' onClick={() => updateStatus(order)}>Deliver</span></button>

                                        }
                                    </td>
                                </tr>
                            ))
                        }
                        {/* setDeletingOrder={setDeletingOrder} handleOrderCancel={handleOrderCancel} */}


                    </tbody>
                </table>
            </div>
            {/* {deletingOrder && <DeleteModal setDeletingOrder={setDeletingOrder} handleOrderCancel={handleOrderCancel} deletingOrder={deletingOrder} ></DeleteModal>} */}
        </div>
    );
};

export default ManageOrders;