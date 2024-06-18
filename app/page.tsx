import React from 'react'
import Image from 'next/image';
import backgroundImage from '../public/homepagebg3.jpg'
import Link from 'next/link';
// import Categories from './categories/page';
import Navbar from '@/components/Navbar'

export default function Home() {

  // throw new Error('An error occurred')
// className='flex flex-col justify-center items-center z-10 gap-4 xl:gap-0'
  return (
    <main className="flex flex-grow justify-center items-center flex-col bg-homepage-background bg-cover bg-center bg-fixed">
      <Navbar />
      <div className='fixed top-16 place-self-center md:right-4'>
        <Link href="signup"><button className="btn bg-transparent bg border-none mr-3 h-8 min-h-8 rounded-md text-white font-bold">Register</button></Link>
        <Link href="signin"><button className="btn bg-transparent border-none h-8 min-h-8 rounded-md text-white font-bold">Log-In</button></Link>
      </div>
      <div className='flex flex-col justify-start sm:justify-center sm:items-center z-10 gap-4 xl:gap-0 px-16 sm:px-0'>
        <h1 className='text-xl sm:text-3xl text-white font-bold italic'>Welcome to <span className='text-2xl font-extrabold'>FetchFast.</span></h1>        
        <h1 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold italic'>Your Gateway to Comfort and Convenience. Order, Relax, Enjoy!</h1>            
      </div>      
      <div className='flex justify-center items-center flex-row z-10 gap-10 pt-10 px-10'>
        <Link href='/categories'><button className="btn btn-neutral bg-slate-600 text-white leading-5 pb-1">View our Categories</button></Link>
        <Link href=''><button className="btn btn-neutral bg-slate-600 text-white	leading-5 pb-1">Order product</button> </Link>               
      </div>      
    </main>
  )
}
