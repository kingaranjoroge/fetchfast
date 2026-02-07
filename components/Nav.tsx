"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { logout } from './auth/Logout';
import ThemeSwitch from './ThemeSwitch';

const Nav = () => {

    const router: any = useRouter();

    const handleLogout = () => {
        logout(router); // Pass the router to the logout function
    };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 bg-backgroundlight dark:bg-backgroundgray backdrop-blur-md shadow-soft">
        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 min-h-[4rem]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm sm:btn-md text-textdark hover:bg-black/5 dark:hover:bg-white/10 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-3 shadow-soft-md rounded-2xl w-56 bg-backgroundlight dark:bg-backgroundgray border border-black/5 dark:border-white/10 gap-1">
                        <li><Link href="/" className="rounded-xl font-medium">Homepage</Link></li>
                        <li><Link href="/categories" className="rounded-xl font-medium">Categories</Link></li>
                        <li className="menu-title pt-2 pb-0 text-xs uppercase tracking-wider text-textdark/70">Browse</li>
                        <li><Link href="/categories/appetizers" className="rounded-xl text-sm">Appetizers</Link></li>
                        <li><Link href="/categories/beverages" className="rounded-xl text-sm">Beverages</Link></li>
                        <li><Link href="/categories/desserts" className="rounded-xl text-sm">Desserts</Link></li>
                        <li><Link href="/categories/main-courses" className="rounded-xl text-sm">Main Courses</Link></li>
                        <li><Link href="/categories/salads" className="rounded-xl text-sm">Salads</Link></li>
                        <li><Link href="/categories/soups&stews" className="rounded-xl text-sm">Soups & Stews</Link></li>
                        <li><Link href="#" onClick={handleLogout} className="rounded-xl text-red-600 dark:text-red-400 font-medium">Logout</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href="/" className="text-textdark font-display font-bold text-xl tracking-tight hover:opacity-90 transition-opacity">FetchFast</Link>
            </div>
            <div className="navbar-end pr-1">
                <ThemeSwitch />
            </div>
        </div>
    </header>
  )
}

export default Nav