import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Product from '@/models/products';

export async function GET(request: string, { params }) {
  await connectMongoDB()

  const { id } = params

  const product = await Product.findOne({ _id: id})

  return NextResponse.json({product})
}

export async function PATCH(request: Request, { params }) {

  await connectMongoDB();

  const { id } = params 

  const { name, categoryId } = await request.json();

  // get the existing product from the database 
  const existingProduct = await Product.findOne({ _id: id });

  // Update the product data
  existingProduct.name = name;
  existingProduct.categoryId = categoryId;

  // Save the updated product to the database
  await existingProduct.save();

  return NextResponse.json({ message: "Product updated" });
}

export async function DELETE(request: Request, { params }) {
  await connectMongoDB();

  const { id } = params;

  // Delete the product from the database 
  const existingProduct = await Product.deleteOne({ _id: id });
  
  return NextResponse.json({ message: "Product deleted" });
}