import React from 'react'
import Image from 'next/image';
import backgroundImage from '../public/homepage-background1.jpg'
import Link from 'next/link';
import Categories from './categories/page';

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
      <div className='flex justify-center items-center flex-col z-10'>
        <h1 className='font-bold text-3xl italic text-white'>Welcome to FetchFast.</h1>        
        <h1 className='font-bold text-3xl italic text-white'>Your Gateway to Comfort and Convenience. Order, Relax, Enjoy!</h1>            
      </div>      
      <div className='flex justify-center items-center flex-row z-10 gap-10 pt-10'>
        <Link href='/categories'><button className="btn btn-neutral bg-slate-600 text-white">View our Categories</button></Link>
        <Link href=''><button className="btn btn-neutral bg-slate-600 text-white">Order product</button> </Link>               
      </div>      
    </main>
  )
}
