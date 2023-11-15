import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/users';

export async function POST(request: Request) {

  await connectMongoDB() 

    const {name, email, phone, password, role} = await request.json()
    
     // Check if a user with the same email already exists in the database
     const existingEmailUser = await User.findOne({ email });

     if (existingEmailUser) {
       return NextResponse.json({ message: "User with the same email already exists" });
     }
 
     // Check if a user with the same phone already exists in the database
     const existingPhoneUser = await User.findOne({ phone });
 
     if (existingPhoneUser) {
       return NextResponse.json({ message: "User with the same phone number already exists" });
     }

    const user = {name, email, phone, password, role} 

    await User.create(user)

    console.log(user)

    return NextResponse.json({ message: "User created" })
}

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