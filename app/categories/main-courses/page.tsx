import React from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import beef_stew from '../../../public/main-courses/beef-stew.png'
import beef_wellington from '../../../public/main-courses/beef-wellington.png'
import chicken_parmesan from '../../../public/main-courses/chicken-parmesan.png'
import chicken_pie from '../../../public/main-courses/chicken-pie.png'
import lasagna from '../../../public/main-courses/lasgna.png'
import pasta from '../../../public/main-courses/pasta.png'
import ribeye_steak from '../../../public/main-courses/ribeye-steak.png'
import salmon from '../../../public/main-courses/salmon.png'
import shepherds_pie from '../../../public/main-courses/shepherds-pie.png'
import sushi from '../../../public/main-courses/sushi.png'
import tacos from '../../../public/main-courses/tacos.png'
import pizza from '../../../public/main-courses/pizza.png'
import Nav from '@/components/Nav';

const CategoryAProducts = () => {
  return (
    <main className="flex flex-grow justify-center items-center pt-20">
        <section className="grid grid-cols-4 gap-8 place-content-center">
            <Nav />
            <ProductCardComponent  
                imageLink = {beef_stew}
                name = 'beef stew'
                price = {800}
                description = 'low-cooked stew of beef, vegetables, and broth'
            />
            <ProductCardComponent  
                imageLink = {beef_wellington}
                name = 'beef wellington'
                price = {1050}
                description = 'tenderloin steak wrapped in puff pastry and duxelles'
            />
            <ProductCardComponent  
                imageLink = {chicken_parmesan}
                name = 'chicken parmesan'
                price = {1200}
                description = 'breaded and fried chicken cutlet topped with marinara sauce and mozzarella cheese'
            />
            <ProductCardComponent  
                imageLink = {chicken_pie}
                name = 'chicken pie'
                price = {800}
                description = 'savory pie filled with chicken, vegetables, and gravy, topped with a puff pastry crust'
            />
            <ProductCardComponent  
                imageLink = {lasagna}
                name = 'lasagna'
                price = {1000}
                description = 'layered pasta dish with ground meat, tomato sauce, ricotta cheese, and mozzarella cheese'
            />
            <ProductCardComponent  
                imageLink = {pasta}
                name = 'pasta'
                price = {750}
                description = 'spring vegetable pasta dish with a light and flavorful sauce'
            />
            <ProductCardComponent  
                imageLink = {ribeye_steak}
                name = 'ribeyeke steak'
                price = {1150}
                description = 'beef steak with Loaded Baked Potato'
            />
            <ProductCardComponent  
                imageLink = {salmon}
                name = 'salmon'
                price = {950}
                description = 'simple and elegant dish of baked or pan-fried salmon'
            />
            <ProductCardComponent  
                imageLink = {shepherds_pie}
                name = 'shepherds pie'
                price = {800}
                description = 'ground lamb or mutton dish topped with mashed potatoes and baked until golden brown'
            />
            <ProductCardComponent  
                imageLink = {sushi}
                name = 'sushi'
                price = {1250}
                description = 'japanese dish of vinegared rice with various toppings, such as raw fish, vegetables, and eggs'
            />
            <ProductCardComponent  
                imageLink = {tacos}
                name = 'tacos'
                price = {900}
                description = 'mexican dish of small corn tortillas filled with seasoned meat, vegetables, and salsa'
            />
            <ProductCardComponent  
                imageLink = {pizza}
                name = 'pizza'
                price = {800}
                description = 'baked dough topped with tomato sauce, cheese, and various toppings'
            />
        </section>
    </main>
  )
}

export default CategoryAProducts