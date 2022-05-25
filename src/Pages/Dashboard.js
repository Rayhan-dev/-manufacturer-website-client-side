import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='min-h-full'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col lg:mx-24 md:mx-12 sm:mx-auto">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'myOrders'}>My Orders</Link></li>
                        <li><Link to={"addReview"}>Add a Review</Link></li>
                        <li><Link to={'myProfile'}>My Profile</Link></li>
                        <li><Link to={'manageOrders'}>Manage Orders</Link></li>
                        <li><Link to={'addProduct'}>Add Product</Link></li>
                        <li><Link to={'makeAdmin'}>Make Admin</Link></li>
                        <li><Link to={'manageProduct'}>Manage Product</Link></li>
                    </ul>

                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;