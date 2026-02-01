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
  if (!accessToken) throw new Error('Failed to obtain access token');
  if (!callbackUrl) throw new Error('MPESA_CALLBACK_URL is not set');

  // Use UTC timestamp per MPESA expectations
  const timestamp = moment.utc().format('YYYYMMDDHHmmss');
  const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

  const payload = {
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
  };

  try {
    console.log('STK push payload:', payload);
    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }
    );

    console.log('STK push response:', response.data);
    return response.data;
  } catch (err: any) {
    console.error('STK Push error response data:', err?.response?.data ?? err.message);
    throw err;
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, amount } = body;

    if (!phone || !amount) {
      return NextResponse.json({ error: 'Missing phone or amount' }, { status: 400 });
    }

    // Normalize phone: remove spaces, plus sign, dashes
    let normalizedPhone = phone.toString().replace(/[\s+\-]/g, '');
    if (normalizedPhone.startsWith('0')) normalizedPhone = `254${normalizedPhone.slice(1)}`;

    // Validate expected MSISDN format: 2547XXXXXXXX (12 digits)
    if (!/^2547\d{8}$/.test(normalizedPhone)) {
      return NextResponse.json({ error: 'Invalid phone format. Expected 2547XXXXXXXX' }, { status: 400 });
    }

    try {
      const response = await initiateSTKPush(normalizedPhone, Number(amount), uuidv4(), 'Payment for order');
      return NextResponse.json(response);
    } catch (err: any) {
      console.error('InitiateSTKPush failed:', err?.response?.data ?? err.message);
      const mpesaError = err?.response?.data ?? { message: err.message };
      const status = err?.response?.status ?? 500;
      return NextResponse.json({ error: 'MPESA request failed', details: mpesaError }, { status });
    }
  } catch (error) {
    console.error('Error in STK POST handler:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: (error as Error).message }, { status: 500 });
  }
}