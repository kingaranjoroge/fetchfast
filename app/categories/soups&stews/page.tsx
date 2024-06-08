import React from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import beef_stew from '../../../public/soups&stews/Beef Stew.png'
import butternut_squash_soup from '../../../public/soups&stews/Butternut Squash Soup.png'
import chicken_noodle_soup from '../../../public/soups&stews/Chicken Noodle Soup.png' 
import clam_chowder from '../../../public/soups&stews/Clam Chowder.png'
import french_onion_soup from '../../../public/soups&stews/French Onion Soup.png'
import lentil_soup from '../../../public/soups&stews/Lentil Soup.png'
import minestrone_soup from '../../../public/soups&stews/Minestrone Soup.png'
import mulligatawny_soup from '../../../public/soups&stews/Mulligatawny Soup.png'
import pho from '../../../public/soups&stews/Pho.png'
import potato_leek_soup from '../../../public/soups&stews/potato Leek Soup.png'
import tomato_basil_soup from '../../../public/soups&stews/Tomato Basil Soup.png'
import tortilla_soup from '../../../public/soups&stews/Tortilla Soup.png'
import Nav from '@/components/Nav'

const CategoryAProducts = () => {
  return (
    <main className="flex flex-grow justify-center items-center pt-20">
        <section className="grid grid-cols-4 gap-8 place-content-center">
            <Nav />
            <ProductCardComponent  
                imageLink = {beef_stew}
                name = 'beef stew'
                price = {750}
                description = 'Beef Stew with Root Vegetables'
            />
            <ProductCardComponent  
                imageLink = {butternut_squash_soup}
                name = 'butternut squash soup'
                price = {800}
                description = 'Butternut Squash Soup with Cinnamon Cream'
            />
            <ProductCardComponent  
                imageLink = {chicken_noodle_soup}
                name = 'chicken noodle soup'
                price = {900}
                description = 'Chicken Noodle Soup'
            />
            <ProductCardComponent  
                imageLink = {clam_chowder}
                name = 'clam chowder'
                price = {1000}
                description = 'Clam Chowder in Bread Bowl'
            />
            <ProductCardComponent  
                imageLink = {french_onion_soup}
                name = 'french onion soup'
                price = {700}
                description = 'French Onion Soup with Gruyere Croutons'
            />
            <ProductCardComponent  
                imageLink = {lentil_soup}
                name = 'lentil soup'
                price = {600}
                description = 'Lentil Soup with Sausage'
            />
            <ProductCardComponent  
                imageLink = {minestrone_soup}
                name = 'minestrone soup'
                price = {900}
                description = 'Minestrone Soup with Pesto'
            />
            <ProductCardComponent  
                imageLink = {mulligatawny_soup}
                name = 'mulligatawny soup'
                price = {1100}
                description = 'Mulligatawny Soup with Chicken and Rice'
            />
            <ProductCardComponent  
                imageLink = {pho}
                name = 'pho'
                price = {1200}
                description = 'Pho with Sliced Beef and Fresh Herbs'
            />
            <ProductCardComponent  
                imageLink = {potato_leek_soup}
                name = 'potato leek soup'
                price = {750}
                description = 'Potato Leek Soup with Crispy Shallots'
            />
            <ProductCardComponent  
                imageLink = {tomato_basil_soup}
                name = 'tomato basil soup'
                price = {700}
                description = 'Tomato Basil Soup with Grilled Cheese Sandwich'
            />
            <ProductCardComponent  
                imageLink = {tortilla_soup}
                name = 'tortilla soup'
                price = {1000}
                description = 'Tortilla Soup with Avocado and Tortilla Strips'
            />
        </section>
    </main>
  )
}

export default CategoryAProducts