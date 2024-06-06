import React from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import apple_pie from '../../../public/desserts/Apple Pie.png'
import banana_bread_pudding from '../../../public/desserts/Banana Bread Pudding.png'
import chocolate_lava_cake from '../../../public/desserts/Chocolate Lava Cake.png'
import creme_brulee from '../../../public/desserts/Crème Brûlée.png'
import flourless_chocolate_cake from '../../../public/desserts/Flourless Chocolate Cake.png'
import key_lime_pie from '../../../public/desserts/Key Lime Pie.png'
import lemon_meringue_pie from '../../../public/desserts/Lemon Meringue Pie.png'
import new_york_cheesecake from '../../../public/desserts/New York Cheesecake.png'
import pecan_pie from '../../../public/desserts/Pecan Pie.png'
import strawberry_shortcake from '../../../public/desserts/Strawberry Shortcake.png'
import red_velvet_cake from '../../../public/desserts/Red Velvet Cake.png'
import tiramisu from '../../../public/desserts/Tiramisu .png'
import Nav from '@/components/Nav'

const CategoryAProducts = () => {
  return (
    <main className="flex flex-grow justify-center items-center pt-20">
        <Nav />
        <section className="grid grid-cols-4 gap-8 place-content-center">
            <ProductCardComponent  
                imageLink = {apple_pie}
                name = 'apple pie'
                price = {600}
                description = 'Apple Pie with Caramel Drizzle'
            />
            <ProductCardComponent  
                imageLink = {banana_bread_pudding}
                name = 'banana bread pudding'
                price = {400}
                description = 'Banana Bread Pudding with Bourbon Sauce'
            />
            <ProductCardComponent  
                imageLink = {chocolate_lava_cake}
                name = 'chocolate lava cake'
                price = {500}
                description = 'Chocolate Lava Cake with Vanilla Ice Cream'
            />
            <ProductCardComponent  
                imageLink = {creme_brulee}
                name = 'creme brulee'
                price = {800}
                description = 'Crème Brûlée with Fresh Berries'
            />
            <ProductCardComponent  
                imageLink = {flourless_chocolate_cake}
                name = 'chocolate cake'
                price = {850}
                description = 'Flourless Chocolate Cake with Raspberry Coulis'
            />
            <ProductCardComponent  
                imageLink = {key_lime_pie}
                name = 'key lime pie'
                price = {650}
                description = 'Key Lime Pie with Whipped Cream'
            />
            <ProductCardComponent  
                imageLink = {lemon_meringue_pie}
                name = 'lemon meringue pie'
                price = {750}
                description = 'Lemon Meringue Pie with Toasted Meringue'
            />
            <ProductCardComponent  
                imageLink = {new_york_cheesecake}
                name = 'new york cheesecake'
                price = {450}
                description = 'New York Cheesecake with Raspberry Sauce'
            />
            <ProductCardComponent  
                imageLink = {pecan_pie}
                name = 'pecan pie'
                price = {700}
                description = 'Pecan Pie with Whipped Cream'
            />
            <ProductCardComponent  
                imageLink = {red_velvet_cake}
                name = 'red velvet cake'
                price = {600}
                description = 'Red Velvet Cake with Cream Cheese Frosting'
            />
            <ProductCardComponent  
                imageLink = {strawberry_shortcake}
                name = 'strawberry shortcake'
                price = {500}
                description = 'Strawberry Shortcake with Chantilly Cream'
            />
            <ProductCardComponent  
                imageLink = {tiramisu}
                name = 'tiramisu'
                price = {550}
                description = 'Tiramisu with Espresso Mascarpone'
            />
        </section>
    </main>
  )
}

export default CategoryAProducts