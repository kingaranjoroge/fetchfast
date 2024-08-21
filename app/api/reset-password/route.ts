import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/users';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  await connectMongoDB();

  const { token, password } = await request.json();

  // Check if the password is not an empty string
  if (!password || password.trim() === '') {
    return NextResponse.json({ message: 'Password cannot be empty', success: false });
  }

  // Find the user with the provided reset token and check if the token is still valid
  const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });

  if (!user) {
    return NextResponse.json({ message: 'Invalid or expired token' });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update the user's password and clear the reset token and its expiry time
  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  return NextResponse.json({ message: 'Password reset successfully', success: true });
}