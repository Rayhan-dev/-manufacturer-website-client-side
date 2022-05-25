import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, setAdmin] = useState(null);
    if (user) {
        axios.get(`http://localhost:5000/admin/${user.email}`)
            .then(function (response) {
                if (response.data[0].role == 'admin') {
                    setAdmin(user);
                }
            })
    }
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/admin/${user.email}`)
    //         .then(function (response) {
    //             console.log(response.data);
    //       })
    // },[user])

    return (
        <div className='min-h-full'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col lg:mx-24 md:mx-12 sm:mx-auto">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {
                            (admin !== null) ?
                                <>
                                    <li><Link to={'manageOrders'}>Manage All Orders</Link></li>
                                    <li><Link to={'addProduct'}>Add a Product</Link></li>
                                    <li><Link to={'makeAdmin'}>Make Admin</Link></li>
                                    <li><Link to={'manageProduct'}>Manage Products</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to={'myOrders'}>My Orders</Link></li>
                                    <li><Link to={"addReview"}>Add a Review</Link></li>
                                </>

                        }

                        <li><Link to={'myProfile'}>My Profile</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;