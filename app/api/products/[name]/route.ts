import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Product from '@/models/products';

export async function GET(request: string, { params }) {
  await connectMongoDB()

  const { name } = params

  const product = await Product.findOne({ name: name})

  return NextResponse.json({product})
}
