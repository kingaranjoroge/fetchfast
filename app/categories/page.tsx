import React from 'react'
import Link from 'next/link'
import CategoryComponent from '@/components/CategoryComponent'
import Image from 'next/image'
import backgroundImage from '../../public/categorybg2.jpg'
import Nav from '@/components/Nav'

const Categories = () => {
  return (
    <main className="flex flex-grow justify-center items-center overflow-auto">
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
      <Nav />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-16 gap-8 place-content-center pt-20">
        <Link href="/categories/appetizers"><CategoryComponent name='Appetizers' /></Link>        
        <Link href="/categories/beverages"><CategoryComponent name='Beverages' /></Link>        
        <Link href="/categories/desserts"><CategoryComponent name='Desserts' /></Link>        
        <Link href="/categories/main-courses"><CategoryComponent name='Main Courses' /></Link>        
        <Link href="/categories/salads"><CategoryComponent name='Salads' /></Link>        
        <Link href="/categories/soups&stews"><CategoryComponent name='Soups & Stews' /></Link>                
      </section>
    </main>
  )
}

export default Categories