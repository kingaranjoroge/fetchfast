import { NextResponse } from 'next/server' 
import connectMongoDB from '@/libs/mongodb'
import Product from '@/models/products'

export async function POST(request: Request) {

    await connectMongoDB() 
  
      const { name, categoryId } = await request.json()
      
       // Check if a product with the same name already exists in the database
       const existingProduct = await Product.findOne({ name });
  
       if (existingProduct) {
         return NextResponse.json({ message: "Product already exists" });
       }
   
      const product = { name, categoryId } 
  
      await Product.create(product)
  
      console.log(product)
  
      return NextResponse.json({ message: "Product created" })
  }

  export async function GET(request: Request) {
    await connectMongoDB();
  
    try {
      const allProducts = await Product.find();
      return NextResponse.json(allProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      return NextResponse.json({message: "Failed to retrieve products"});
    }
  }