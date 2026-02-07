import React from 'react'
import Link from 'next/link'
import CategoryComponent from '@/components/CategoryComponent'
import Nav from '@/components/Nav'

const Categories = () => {
  return (
    <main className="flex flex-grow justify-center items-center flex-col min-h-screen">
      <Nav />
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-textdark text-center mb-10">
          Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
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
        </div>
      </section>
    </main>
  )
}

export default Categories