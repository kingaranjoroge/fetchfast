import React from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import Nav from '@/components/Nav'
import antipasto_salad from '../../../public/salads/antipasto-salad.png'
import asian_chicken_salad from '../../../public/salads/asian-chicken-salad.png'
import caesar_salad from '../../../public/salads/caesar-salad.png'
import caprese_salad from '../../../public/salads/caprese-salad.png'
import cobb_salad from '../../../public/salads/cobb-salad.png'
import greek_salad from '../../../public/salads/greek-salad.png'
import nicoise_salad from '../../../public/salads/nicoise-salad.png'
import quinoa_salad from '../../../public/salads/quinoa-salad.png'
import spinach_salad from '../../../public/salads/spinach-salad.png'
import taco_salad from '../../../public/salads/taco-salad.png'
import waldorf_salad from '../../../public/salads/waldorf-salad.png'
import watermelon_salad from '../../../public/salads/watermelon-salad.png'

const CategoryAProducts = () => {
  return (
    <main className="flex flex-grow justify-center items-center pt-20">
        <section className="grid grid-cols-4 gap-8 place-content-center">
            <Nav />
            <ProductCardComponent  
                imageLink = {antipasto_salad}
                name = 'antipasto salad'
                price = {450}
                description = 'Antipasto Salad with Italian Meats and Cheeses'
            />
            <ProductCardComponent  
                imageLink = {asian_chicken_salad}
                name = 'asian chicken salad'
                price = {500}
                description = 'Asian Chicken Salad with Sesame Dressing'
            />
            <ProductCardComponent  
                imageLink = {caesar_salad}
                name = 'caesar salad'
                price = {400}
                description = 'Caesar Salad with Grilled Chicken'
            />
            <ProductCardComponent  
                imageLink = {caprese_salad}
                name = 'caprese salad'
                price = {350}
                description = 'Caprese Salad with Balsamic Glaze'
            />
            <ProductCardComponent  
                imageLink = {cobb_salad}
                name = 'cobb salad'
                price = {450}
                description = 'Cobb Salad with Avocado and Bacon'
            />
            <ProductCardComponent  
                imageLink = {greek_salad}
                name = 'greek salad'
                price = {600}
                description = 'Greek Salad with Feta Cheese and Kalamata Olives'
            />
            <ProductCardComponent  
                imageLink = {nicoise_salad}
                name = 'nicoise salad'
                price = {650}
                description = 'Nicoise Salad with Seared Tuna'
            />
            <ProductCardComponent  
                imageLink = {quinoa_salad}
                name = 'quinoa salad'
                price = {600}
                description = 'Quinoa Salad with Roasted Vegetables'
            />
            <ProductCardComponent  
                imageLink = {spinach_salad}
                name = 'spinach salad'
                price = {300}
                description = 'Spinach Salad with Strawberries and Candied Pecans'
            />
            <ProductCardComponent  
                imageLink = {taco_salad}
                name = 'taco salad'
                price = {400}
                description = 'Taco Salad with Ground Beef and Avocado'
            />
            <ProductCardComponent  
                imageLink = {waldorf_salad}
                name = 'waldorf salad'
                price = {500}
                description = 'Waldorf Salad with Apples and Walnuts'
            />
            <ProductCardComponent  
                imageLink = {watermelon_salad}
                name = 'watermelon salad'
                price = {350}
                description = 'Watermelon Salad with Mint'
            />
        </section>
    </main>
  )
}

export default CategoryAProducts