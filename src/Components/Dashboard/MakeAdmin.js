import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';

const MakeAdmin = () => {
    const axios = require('axios');
    const [users, setUsers] = useState([]);
    // Make a request for a user with a given ID
    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(function (response) {
            // handle success
            setUsers(response.data);
        })
    }, [])
    const handleMakeAdmin = (email) => {
        axios.put(`http://localhost:5000/admin/${email}`)
    }
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Users
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {user.email}
                                    </th>
                                    <td class="px-6 py-4">
                                        <div className="btn btn-primary"  onClick={()=>handleMakeAdmin(user.email)}   disabled={user.role === 'admin'}>Make Admin</div>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;