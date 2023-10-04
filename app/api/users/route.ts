import { NextResponse } from 'next/server' 
import connectMongoDB from '@/libs/mongodb'
import User from '@/models/users'

export async function POST(request: Request) {
    const {name, email, phone, password} = await request.json()

     // Check if a user with the same email already exists in the database
     const existingEmailUser = await User.findOne({ email });

     if (existingEmailUser) {
        return NextResponse.json({ message: "User with the same email already exists" });
    }

     // Check if a user with the same phone already exists in the database
     const existingPhoneUser = await User.findOne({ phone });

     if (existingPhoneUser) {
        return NextResponse.json({ message: "User with the same phone already exists" });
    }

    const formData = {name, email, phone, password} 

    await connectMongoDB() 

    await User.create(formData)

    console.log(formData)

    return NextResponse.json({ message: "User created" })
}