import { NextResponse } from 'next/server';
import axios from 'axios';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const shortcode = process.env.MPESA_SHORTCODE;
const passkey = process.env.MPESA_PASSKEY;
const callbackUrl = process.env.MPESA_CALLBACK_URL;

const getAccessToken = async () => {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  return response.data.access_token;
};

const initiateSTKPush = async (phone: string, amount: number, accountReference: string, transactionDesc: string) => {
  const accessToken = await getAccessToken();
  const timestamp = moment().format('YYYYMMDDHHmmss');
  const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

  const response = await axios.post(
    'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: callbackUrl,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export async function POST(req: Request) {
  try {
    const { phone, amount } = await req.json();

    // Ensure phone number is in the correct format
    const formattedPhone = phone.startsWith('0') ? `254${phone.slice(1)}` : phone;

    const response = await initiateSTKPush(formattedPhone, amount, uuidv4(), 'Payment for order');
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error initiating STK push:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: (error as Error).message }, { status: 500 });
  }
}