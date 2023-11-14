import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Category from '@/models/categories';

export async function GET(request: string, { params }) {
  await connectMongoDB()

  const { name } = params

  const category = await Category.findOne({ name: name})

  return NextResponse.json({category})
}
