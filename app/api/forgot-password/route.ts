import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/users';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { server } from '@/config';

export async function POST(request: Request) {
  await connectMongoDB();

  const { email } = await request.json();

  // Check if a user with the provided email exists in the database
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ message: 'No such user exists' });
  }

  // Generate a password reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

  // Save the token and its expiry time to the user's record
  user.resetToken = resetToken;
  user.resetTokenExpiry = resetTokenExpiry;
  await user.save();

  // Send an email with the reset link
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const resetUrl = `${server}/reset-password?token=${resetToken}`;

  const mailOptions = {
    to: user.email,
    from: process.env.EMAIL_USER,
    subject: 'Password Reset',
    text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
           Please click on the following link, or paste this into your browser to complete the process:\n\n
           ${resetUrl}\n\n
           If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: 'Password reset email sent, check your email' });
}