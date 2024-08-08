import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import LoginStatusChecker from '@/components/LoginStatusChecker'; // Import the client component

export default function Home() {
  return (
    <main className="flex flex-grow justify-center items-center flex-col relative overflow-hidden bg-homepage-background bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <Navbar />
      <LoginStatusChecker /> {/* Use the client component */}
      <div className='flex flex-col justify-start sm:justify-center sm:items-center z-10 gap-4 xl:gap-4 px-16 sm:px-0'>
        <h1 className='text-xl sm:text-3xl text-white font-bold italic '>Welcome to <span className='text-2xl font-extrabold'>FetchFast.</span></h1>        
        <h1 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold italic'>Your Gateway to Comfort and Convenience. Order, Relax, Enjoy!</h1>            
      </div>      
      <div className='flex justify-center items-center flex-row z-10 gap-10 pt-10 px-10'>
        <Link href='/categories'><button className="btn btn-neutral bg-backgroundlight text-textdark leading-5 py-0.5 sm:py-0 hover:bg-backgroundhoverdark hover:text-texthoverlight">View our Categories</button></Link>
        <Link href=''><button className="btn btn-neutral bg-backgrounddark text-textlight leading-5 py-0.5 hover:bg-backgroundlight  hover:text-textdark">Order product</button> </Link>               
      </div>      
    </main>
  );
}