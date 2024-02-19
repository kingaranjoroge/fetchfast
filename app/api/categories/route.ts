import { NextResponse } from 'next/server' 
import connectMongoDB from '@/libs/mongodb'
import Category from '@/models/categories'

export async function POST(request: Request) {

    await connectMongoDB() 
  
      const { name } = await request.json()
      
       // Check if a category with the same name already exists in the database
       const existingCategory = await Category.findOne({ name });
  
       if (existingCategory) {
         return NextResponse.json({ message: "Category already exists" });
       }
   
      const category = { name } 
  
      await Category.create(category)
  
      console.log(category)
  
      return NextResponse.json({ message: "Category created" })
  }

  export async function GET() {
    await connectMongoDB();
  
    try {
      const allCategories = await Category.find();
      return NextResponse.json(allCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return NextResponse.json({message: "Failed to retrieve categories"});
    }
  }