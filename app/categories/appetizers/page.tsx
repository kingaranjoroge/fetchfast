import React from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import Nav from '@/components/Nav';
import beef_satay from '../../../public/appetizers/beef-satay.png'
import bruschetta from '../../../public/appetizers/bruschetta.png'
import calamari from '../../../public/appetizers/calamari.png'
import cheese_plate from '../../../public/appetizers/cheese-plate.png'
import chicken_wings from '../../../public/appetizers/chicken-wings.png'
import crab_cake from '../../../public/appetizers/crab-cake.png'
import egg_rolls from '../../../public/appetizers/egg-rolls.png'
import garlic_shrimp from '../../../public/appetizers/garlic-shrimp.png'
import meatballs from '../../../public/appetizers/meatballs.png'
import pork_dumplings from '../../../public/appetizers/pork-dumplings.png'
import skewers from '../../../public/appetizers/skewers.png'
import spring_rolls from '../../../public/appetizers/spring-rolls.png'

const CategoryAProducts = () => {
  return (
    <main className="flex flex-grow justify-center items-center pt-20">
        <section className="grid grid-cols-4 gap-8 place-content-center mb-2">
            <Nav />
            <ProductCardComponent  
                imageLink = {beef_satay}
                name = 'beef satay'
                price = {1050}
                description = 'Beef Satay with Peanut Sauce'
            />
            <ProductCardComponent  
                imageLink = {bruschetta}
                name = 'bruschetta'
                price = {400}
                description = 'Bruschetta with Tomato and Basil'
            />
            <ProductCardComponent  
                imageLink = {calamari}
                name = 'calamari'
                price = {350}
                description = 'Fried Calamari with Marinara Sauce'
            />
             <ProductCardComponent  
                imageLink = {cheese_plate}
                name = 'cheese plate'
                price = {550}
                description = 'Cheese Plate with Assorted Crackers and Fruits'
            />
            <ProductCardComponent  
                imageLink = {chicken_wings}
                name = 'chicken_wings'
                price = {800}
                description = 'Buffalo Chicken Wings'
            />
            <ProductCardComponent  
                imageLink = {crab_cake}
                name = 'crab cake'
                price = {350}
                description = 'Crab Cakes with Remoulade Sauce'
            />
            <ProductCardComponent  
                imageLink = {egg_rolls}
                name = 'egg rolls'
                price = {300}
                description = 'Avocado Egg Rolls with Sweet Chili Sauce'
            />
            <ProductCardComponent  
                imageLink = {garlic_shrimp}
                name = 'garlic shrimp'
                price = {400}
                description = 'Garlic Shrimp Scampi'
            />
            <ProductCardComponent  
                imageLink = {meatballs}
                name = 'meatballs'
                price = {450}
                description = 'seasoned meatballs'
            />
            <ProductCardComponent  
                imageLink = {pork_dumplings}
                name = 'pork dumplings'
                price = {750}
                description = 'Pork Dumplings with Soy Dipping Sauce'
            />
            <ProductCardComponent  
                imageLink = {skewers}
                name = 'skewers'
                price = {250}
                description = 'Caprese Skewers'
            />
            <ProductCardComponent  
                imageLink = {spring_rolls}
                name = 'spring rolls'
                price = {300}
                description = 'spring rolls'
            />
        </section>
    </main>
  )
}

export default CategoryAProducts