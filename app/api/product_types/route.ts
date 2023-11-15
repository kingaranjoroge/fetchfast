import { NextResponse } from 'next/server' 
import connectMongoDB from '@/libs/mongodb'
import ProductType from '@/models/product_types'

export async function POST(request: Request) {

    await connectMongoDB() 
  
      const { name, price, description, quantityAvailable, status, productId } = await request.json()
      
       // Check if a product_type with the same name already exists in the database
       const existingProductType = await ProductType.findOne({ name });
  
       if (existingProductType) {
         return NextResponse.json({ message: "ProductType already exists" });
       }
   
      const product_type = { name, price, description, quantityAvailable, status, productId } 
  
      await ProductType.create(product_type)
  
      console.log(product_type)
  
      return NextResponse.json({ message: "ProductType created" })
  }

  export async function GET(request: Request) {
    await connectMongoDB();
  
    try {
      const allProductTypes = await ProductType.find();
      return NextResponse.json(allProductTypes);
    } catch (error) {
      console.error('Error fetching product types:', error);
      return NextResponse.json({message: "Failed to retrieve product types"});
    }
  }