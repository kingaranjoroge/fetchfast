import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Category from '@/models/categories';

export async function GET(request: string, { params }) {
  await connectMongoDB()

  const { id } = params

  const category = await Category.findOne({ _id: id})

  return NextResponse.json({category})
}

export async function PATCH(request: string, { params }) {

  await connectMongoDB();

  const { id } = params 

  const { name } = await request.json();

  // get the existing category from the database 
  const existingCategory = await Category.findOne({ _id: id });

  // Update the category data
  existingCategory.name = name;

  // Save the updated category to the database
  await existingCategory.save();

  return NextResponse.json({ message: "Category updated" });
}

export async function DELETE(request: string, { params }) {

  await connectMongoDB();

  const { id } = params
 
  // Delete the category from the database
  await Category.deleteOne({ _id: id })

  return NextResponse.json({ message: "Category deleted" });
}