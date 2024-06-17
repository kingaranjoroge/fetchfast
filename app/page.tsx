import React from 'react'
import Image from 'next/image';
import backgroundImage from '../public/homepagebg3.jpg'
import Link from 'next/link';
// import Categories from './categories/page';
import Navbar from '@/components/Navbar'

export default function Home() {

  // throw new Error('An error occurred')

  return (
    <main className="flex flex-grow justify-center items-center flex-col">
      <Image
        alt="Background Image"
        src={backgroundImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <Navbar />
      <div className='flex flex-col justify-center items-center z-10 gap-4 xl:gap-0'>
        <h1 className='text-2xl sm:text-3xl text-white font-bold italic'>Welcome to FetchFast.</h1>        
        <h1 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold italic pl-8'>Your Gateway to Comfort and Convenience. Order, Relax, Enjoy!</h1>            
      </div>      
      <div className='flex justify-center items-center flex-row z-10 gap-10 pt-10 px-10'>
        <Link href='/categories'><button className="btn btn-neutral bg-slate-600 text-white leading-5 pb-1">View our Categories</button></Link>
        <Link href=''><button className="btn btn-neutral bg-slate-600 text-white	leading-5 pb-1">Order product</button> </Link>               
      </div>      
    </main>
  )
}
