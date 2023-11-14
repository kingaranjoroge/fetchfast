import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/users';

export async function GET(request: Request) {
  await connectMongoDB();

  try {
    const allUsers = await User.find();
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error('Error fetching all users:', error);
    return NextResponse.json({message: "Failed to retrieve users"});
  }
}