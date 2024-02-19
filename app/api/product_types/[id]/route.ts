import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import ProductType from '@/models/product_types';

export async function GET(request: Request, { params }) {
  await connectMongoDB()

  const { id } = params

  const product_type = await ProductType.findOne({ _id: id})

  return NextResponse.json({product_type})
}

export async function PATCH(request: Request, { params }) {

  await connectMongoDB();

  const { id } = params 

  const { name, price, quantityAvailable, status, productId } = await request.json();

  // get the existing product_type from the database 
  const existingProductType = await ProductType.findOne({ _id: id });

  // Update the product_type data
  existingProductType.name = name;
  existingProductType.price = price;
  existingProductType.quantityAvailable = quantityAvailable;
  existingProductType.status = status;
  existingProductType.productId = productId;

  // Save the updated product_type to the database
  await existingProductType.save();

  return NextResponse.json({ message: "Product Type updated" });
}

export async function DELETE(request: Request, { params }) {

  await connectMongoDB();

  const { id } = params
 
  // Delete the product_type from the database
  await ProductType.deleteOne({ _id: id })

  return NextResponse.json({ message: "Product Type deleted" });
}
