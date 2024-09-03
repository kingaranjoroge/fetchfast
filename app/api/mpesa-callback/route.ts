import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('M-Pesa Callback:', body);
    return NextResponse.json({ message: 'Callback received' });
  } catch (error) {
    console.error('Error handling M-Pesa callback:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}