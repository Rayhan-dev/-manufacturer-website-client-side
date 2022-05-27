import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersTable = ({ order,  setDeletingOrder }) => {
    const axios = require('axios');
    return (
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
            <td class="px-6 py-4">
                status
            </td>
            <td class="px-6 py-4 text-right">
                <label onClick={()=>setDeletingOrder(order)} for="deleteModal" class="btn modal-button btn-primary">Cancel</label>
            </td>
            <td>
                {
                    order.paid ||<Link className='btn btn-secondary' to={`/dashboard/payment/${order._id}`}>Pay</Link>
                }
                {
                    order.paid &&   <span className='text-white px-4 py-3 border border-transparent rounded-lg bg-green-600'>Paid</span>
                }
            </td>
        </tr>
    );
};

export default MyOrdersTable;