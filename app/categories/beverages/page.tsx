import React from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import cabernet_sauvignon from '../../../public/beverages/Cabernet Sauvignon.png'
import cappuccino from '../../../public/beverages/Cappuccino.png'
import chardonnay from '../../../public/beverages/Chardonnay.png'
import espresso from '../../../public/beverages/Espresso.png'
import IPA from '../../../public/beverages/IPA.png'
import margarita from '../../../public/beverages/Margarita.png'
import matcha_latte from '../../../public/beverages/Matcha Latte.png'
import mojito from '../../../public/beverages/Mojito.png'
import moscow_mule from '../../../public/beverages/Moscow Mule.png'
import old_fashioned from '../../../public/beverages/Old Fashioned.png'
import pinot_noir from '../../../public/beverages/Pinot Noir.png'
import sauvignon_blanc from '../../../public/beverages/Sauvignon Blanc.png'
import Nav from '@/components/Nav'

const CategoryAProducts = () => {
  return (
    <main className="flex flex-grow flex-col min-h-screen">
        <Nav />
        <section className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
            <ProductCardComponent  
                imageLink = {cabernet_sauvignon}
                name = 'cabernet sauvignon'
                price = {1050}
                description = 'Red Wine'
            />
            <ProductCardComponent  
                imageLink = {cappuccino}
                name = 'cappuccino'
                price = {450}
                description = 'cappuccino'
            />
            <ProductCardComponent  
                imageLink = {chardonnay}
                name = 'chardonnay'
                price = {1200}
                description = 'White Wine'
            />
            <ProductCardComponent  
                imageLink = {espresso}
                name = 'espresso'
                price = {500}
                description = 'Coffee'
            />
            <ProductCardComponent  
                imageLink = {IPA}
                name = 'IPA'
                price = {800}
                description = 'India Pale Ale'
            />
            <ProductCardComponent  
                imageLink = {margarita}
                name = 'margarita'
                price = {1000}
                description = 'Tequila Cocktail'
            />
            <ProductCardComponent  
                imageLink = {matcha_latte}
                name = 'matcha latte'
                price = {400}
                description = 'Tea'
            />
            <ProductCardComponent  
                imageLink = {mojito}
                name = 'mojito'
                price = {850}
                description = 'Rum Cocktail'
            />
            <ProductCardComponent  
                imageLink = {moscow_mule}
                name = 'moscow mule'
                price = {950}
                description = 'Vodka Cocktail'
            />
            <ProductCardComponent  
                imageLink = {old_fashioned}
                name = 'old fashioned'
                price = {1000}
                description = 'Whiskey Cocktail'
            />
            <ProductCardComponent  
                imageLink = {pinot_noir}
                name = 'pinot noir'
                price = {1100}
                description = 'Red Wine'
            />
            <ProductCardComponent  
                imageLink = {sauvignon_blanc}
                name = 'sauvignon blanc'
                price = {1250}
                description = 'White Wine'
            />
            </div>
        </section>
    </main>
  )
}

export default CategoryAProducts