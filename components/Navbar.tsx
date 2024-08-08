"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { logout } from './Logout';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {

    const router: any = useRouter();

    const handleLogout = () => {
        logout(router); // Pass the router to the logout function
    };


  return (
    <div className="navbar bg-base-300 fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/">Homepage</Link></li>
                    <li><Link href="/categories">Categories</Link></li>
                    <div className="ml-2">
                        <li><Link href="/categories/appetizers">Appetizers</Link></li>
                        <li><Link href="/categories/beverages">Beverages</Link></li>
                        <li><Link href="/categories/desserts">Desserts</Link></li>
                        <li><Link href="/categories/main-courses">Main Courses</Link></li>
                        <li><Link href="/categories/salads">Salads</Link></li>
                        <li><Link href="/categories/soups&stews">Soups & Stews</Link></li>
                    </div>  
                    <li><a href="#" onClick={handleLogout}>Logout</a></li>                   
                </ul> 
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl text-textdark font-bold">FetchFast</a>
        </div>
        <div className="navbar-end">
            {/* <Link href="signup"><button className="btn btn-outline mr-3 h-8 min-h-8 rounded-md text-white">SignUp</button></Link>
            <Link href="signin"><button className="btn btn-outline h-8 min-h-8 rounded-md text-white">SignIn</button></Link> */}
            <ThemeSwitch />
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Navbar