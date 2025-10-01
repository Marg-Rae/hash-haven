// M-Pesa Callback Handler
import { NextRequest, NextResponse } from 'next/server';

interface CallbackItem {
  Name: string;
  Value: string | number;
}

interface CallbackMetadata {
  Item: CallbackItem[];
}

interface StkCallback {
  CheckoutRequestID: string;
  ResultCode: number;
  ResultDesc: string;
  CallbackMetadata?: CallbackMetadata;
}

interface CallbackBody {
  stkCallback: StkCallback;
}

interface CallbackData {
  Body: CallbackBody;
}

export async function POST(request: NextRequest) {
  try {
    const callbackData: CallbackData = await request.json();
    console.log('M-Pesa Callback received:', callbackData);

    // Process the callback data
    const { Body } = callbackData;
    const { stkCallback } = Body;

    if (stkCallback) {
      const { CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = stkCallback;

      if (ResultCode === 0) {
        // Payment successful
        const amount = CallbackMetadata?.Item?.find((item: CallbackItem) => item.Name === 'Amount')?.Value;
        const mpesaReceiptNumber = CallbackMetadata?.Item?.find((item: CallbackItem) => item.Name === 'MpesaReceiptNumber')?.Value;
        const transactionDate = CallbackMetadata?.Item?.find((item: CallbackItem) => item.Name === 'TransactionDate')?.Value;
        const phoneNumber = CallbackMetadata?.Item?.find((item: CallbackItem) => item.Name === 'PhoneNumber')?.Value;

        console.log('Payment successful:', {
          CheckoutRequestID,
          amount,
          mpesaReceiptNumber,
          transactionDate,
          phoneNumber,
        });

        // Here you would typically:
        // 1. Update your database with the payment details
        // 2. Send confirmation email to customer
        // 3. Trigger any post-payment actions (booking confirmation, etc.)

        // For now, we'll just log the success
        console.log(`M-Pesa payment successful: ${mpesaReceiptNumber} for amount ${amount}`);

      } else {
        // Payment failed
        console.log('Payment failed:', ResultDesc);
      }
    }

    // Always return success to M-Pesa
    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Success' });

  } catch (error) {
    console.error('M-Pesa callback error:', error);
    // Still return success to avoid M-Pesa retries
    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Success' });
  }
}