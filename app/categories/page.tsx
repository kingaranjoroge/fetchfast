import React from 'react'
import Link from 'next/link'
import CategoryComponent from '@/components/CategoryComponent'
import Image from 'next/image'
import Nav from '@/components/Nav'
import appetizers from '../../public/categorycards-bg/appetizers.png'

const Categories = () => {
  return (
    <main className="flex flex-grow justify-center items-center flex-col">
      <Nav />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-16 gap-8 place-content-center pt-20 pb-4">
        <Link href="/categories/appetizers">
          <CategoryComponent name='Appetizers' backgroundImage='categorycards-bg/appetizers.png' />
        </Link>        
        <Link href="/categories/beverages">
          <CategoryComponent name='Beverages' backgroundImage='categorycards-bg/beverages.png' />
        </Link>        
        <Link href="/categories/desserts">
          <CategoryComponent name='Desserts' backgroundImage='categorycards-bg/desserts.png' />
        </Link>        
        <Link href="/categories/main-courses">
          <CategoryComponent name='Main Courses' backgroundImage='categorycards-bg/main-courses.png' />
        </Link>        
        <Link href="/categories/salads">
          <CategoryComponent name='Salads' backgroundImage='categorycards-bg/salads.png' />
        </Link>        
        <Link href="/categories/soups&stews">
          <CategoryComponent name='Soups & Stews' backgroundImage='categorycards-bg/soups-stews.png' />
        </Link>                
      </section>
    </main>
  )
}

export default Categories