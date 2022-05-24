import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import DeleteModal from '../Components/Dashboard/DeleteModal';
import MyOrdersTable from '../Components/Dashboard/MyOrdersTable';
import auth from '../firebase.init';

const MyOrder = () => {
    const [user, loading, error] = useAuthState(auth);
    const axios = require('axios');
    const [userOrders, setUserOrders] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${user.email}`)
            .then(function (response) {
                setUserOrders(response.data);
            })
    }, [axios.delete])
    const handleOrderCancel = (id) => {
        const url = `http://localhost:5000/orders/${id}`
        axios.delete(url);
        const remaining = userOrders.filter(o => o._id !== id);
        setUserOrders(remaining);
    }
    return (
        <div>
            <h1 className='text-primary text-4xl py-5 font-bold'>My order</h1>

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
                                Staus
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOrders.map(order=><MyOrdersTable key={order._id} setDeletingOrder={setDeletingOrder} handleOrderCancel={handleOrderCancel} order={order}></MyOrdersTable>)
                        }
                        

                    </tbody>
                </table>
            </div>
                        {deletingOrder && <DeleteModal setDeletingOrder={setDeletingOrder} handleOrderCancel={handleOrderCancel} deletingOrder={deletingOrder} ></DeleteModal>}
        </div>
    );
};

export default MyOrder;