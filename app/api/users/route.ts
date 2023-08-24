import { NextResponse } from 'next/server' 
import connectMongoDB from '@/libs/mongodb'
import User from '@/models/users'

export async function POST(request: Request) {
    const {name, email, phone, password} = await request.json()

    const formData = {name, email, phone, password} 

    await connectMongoDB() 

    await User.create(formData)

    console.log(formData)

    return NextResponse.json({ message: "User created" })
}