import connectMongoDB from "@/libs/mongodb";
import EmailUser from "@/models/emailusers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await EmailUser.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}