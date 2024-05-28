import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/users';
import { Props } from '@/common.types';

export async function GET(request: Request, { params } : Props) {
  await connectMongoDB()

  const { id } = params

  const user = await User.findOne({ _id: id})

  return NextResponse.json({user})
}

export async function PATCH(request: Request, { params } : Props) {

  await connectMongoDB();

  const { id } = params 

  const { name, email, phone, password, role } = await request.json();

  // get the existing user from the database 
  const existingUser = await User.findOne({ _id: id });

  // Update the user data
  existingUser.name = name;
  existingUser.email = email;
  existingUser.phone = phone;
  existingUser.password = password;
  existingUser.role = role;

  // Save the updated user to the database
  await existingUser.save();

  return NextResponse.json({ message: "User updated" });
}

export async function DELETE(request: Request, { params } : Props) {

  await connectMongoDB();

  const { id } = params
 
  // Delete the user from the database
  await User.deleteOne({ _id: id })

  return NextResponse.json({ message: "User deleted" });
}