import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import LoginStatusChecker from '@/components/LoginStatusChecker'; // Import the client component

export default function Home() {
  return (
    <main className="flex flex-grow justify-center items-center flex-col bg-homepage-background bg-cover bg-center bg-fixed">
      <Navbar />
      <LoginStatusChecker /> {/* Use the client component */}
      <div className='flex flex-col justify-start sm:justify-center sm:items-center z-10 gap-4 xl:gap-0 px-16 sm:px-0'>
        <h1 className='text-xl sm:text-3xl text-white font-bold italic'>Welcome to <span className='text-2xl font-extrabold'>FetchFast.</span></h1>        
        <h1 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold italic'>Your Gateway to Comfort and Convenience. Order, Relax, Enjoy!</h1>            
      </div>      
      <div className='flex justify-center items-center flex-row z-10 gap-10 pt-10 px-10'>
        <Link href='/categories'><button className="btn btn-neutral bg-slate-600 text-white leading-5 py-0.5 sm:py-0">View our Categories</button></Link>
        <Link href=''><button className="btn btn-neutral bg-slate-600 text-white leading-5 py-0.5">Order product</button> </Link>               
      </div>      
    </main>
  );
}