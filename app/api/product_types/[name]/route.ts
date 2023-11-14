import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import ProductType from '@/models/product_types';

export async function GET(request: string, { params }) {
  await connectMongoDB()

  const { name } = params

  const product_type = await ProductType.findOne({ name: name})

  return NextResponse.json({product_type})
}
