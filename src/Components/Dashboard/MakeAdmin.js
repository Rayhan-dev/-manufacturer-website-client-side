import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const axios = require('axios');
    const { isLoading, refetch, error, data: users } = useQuery('user', () =>
        fetch('http://localhost:5000/users',
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json()
            )
    )
    if (isLoading) return <Loading></Loading>

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
                            users.map(user => <MakeAdminRow key={user._id} refetch={refetch} user={user} ></MakeAdminRow>)
                        }   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;