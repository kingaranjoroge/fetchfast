import React from 'react'
import Link from 'next/link'
import CategoryComponent from '@/components/CategoryComponent'
import Image from 'next/image'
import backgroundImage from '../../public/categorybg2.jpg'

const Categories = () => {
  return (
    <main className="flex flex-grow justify-center items-center">
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
      <section className="grid grid-cols-3 gap-8 place-content-center">
        <Link href="/categories/category-A"><CategoryComponent name='Category A' /></Link>        
        <Link href="/categories/category-B"><CategoryComponent name='Category B' /></Link>        
        <Link href="/categories/category-C"><CategoryComponent name='Category C' /></Link>        
        <Link href="/categories/category-D"><CategoryComponent name='Category D' /></Link>        
        <Link href="/categories/category-E"><CategoryComponent name='Category E' /></Link>        
        <Link href="/categories/category-F"><CategoryComponent name='Category F' /></Link>                
      </section>
    </main>
  )
}

export default Categories