import { NextResponse } from 'next/server' 
import connectMongoDB from '@/libs/mongodb'
import Order from '@/models/products'

export async function POST(request: Request) {

    await connectMongoDB() 
  
    const { 
        customerName, 
        customerPhone, 
        customerEmail, 
        productName, 
        quantity, 
        price, 
        status 
    } = await request.json()    

    const order = {  
        customerName, 
        customerPhone, 
        customerEmail, 
        productName, 
        quantity, 
        price, 
        status  
    } 

    await Order.create(order)

    console.log(order)

    return NextResponse.json({ message: "Order created" })
}


