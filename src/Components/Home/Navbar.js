import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div className="navbar bg-transparent px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user && <li className='hover:text-primary'><Link to={'/dashboard'}>Dashboard</Link></li>
                            }
                            {
                                user && <li><small className='text-primary'>{user.displayName}</small></li>
                            }
                            {
                                user ?
                                    <li className='hover:text-primary'><button>Sign out</button></li>
                                    : <li className='hover:text-primary'><Link to={'/login'}>Login</Link></li>
                            }

                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl text-primary">RobotoLab</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user && <li className='hover:text-primary'><Link to={'/dashboard'}>Dashboard</Link></li>
                        }
                        {
                            user ? <li className='hover:text-primary'><button onClick={() => {
                                signOut(auth);
                                localStorage.removeItem('accessToken')
                            }}>Sign out</button></li> : <li className='hover:text-primary'><Link to={'/login'}>Login</Link></li>
                        }
                        {
                            user && <li><small className='text-primary'>{user.displayName}</small></li>
                        }



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;