import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/users';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  await connectMongoDB();

  const { email, password } = await request.json();

  // Check if a user with the provided email exists in the database
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return NextResponse.json({ message: 'No such user exists' });
  }

  // Use bcrypt to compare the provided password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    return NextResponse.json({ message: 'Wrong password' });
  }

  // If both email and password are correct, return a success response
  return NextResponse.json({ message: "Logged in successfully" });
}