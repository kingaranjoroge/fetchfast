import React from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import pizza from '../../../public/pizza2.jpg'
import Nav from '@/components/Nav'

const CategoryAProducts = () => {
  return (
    <main className="flex flex-grow justify-center items-center pt-20">
        <Nav />
        <section className="grid grid-cols-4 gap-8 place-content-center">
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {300}
                description = 'medium thick-crust pepperoni pizza'
            />
        </section>
    </main>
  )
}

export default CategoryAProducts