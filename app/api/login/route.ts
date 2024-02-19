import { NextResponse } from 'next/server' 
import connectMongoDB from '@/libs/mongodb'
import User from '@/models/users'

export async function POST(request: Request) {
  await connectMongoDB();

  const { email, password } = await request.json();

  // Check if a user with the provided email exists in the database
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return NextResponse.json({ message: 'No such user exists' });
  }

  // Check if the provided password matches the user's password
  if (existingUser.password !== password) {
    return NextResponse.json({ message: 'Wrong password' });
  }

  // If both email and password are correct, return a success response
  return NextResponse.json({ message: "Logged in successfully" })
}