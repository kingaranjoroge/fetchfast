import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/users';

export async function GET(request: string, { params }) {
  await connectMongoDB()

  const { email } = params

  const user = await User.findOne({ email: email})

  return NextResponse.json({user})
}
