import React from 'react'
import Link from 'next/link'
import CategoryComponent from '@/components/CategoryComponent'

const Categories = () => {
  return (
    <main className="flex flex-grow justify-center items-center">
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