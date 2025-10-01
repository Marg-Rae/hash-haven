// Payment Processing API Route - PayPal and M-Pesa
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'USD', service, customerEmail, customerName, paymentMethod, phoneNumber } = await request.json();

    // Validation
    if (!amount || !service || !customerEmail || !paymentMethod) {
      return NextResponse.json(
        { success: false, message: 'Missing required payment details' },
        { status: 400 }
      );
    }

    if (paymentMethod === 'paypal') {
      return await processPayPalPayment(amount, currency, service, customerEmail, customerName);
    } else if (paymentMethod === 'mpesa') {
      if (!phoneNumber) {
        return NextResponse.json(
          { success: false, message: 'Phone number required for M-Pesa payments' },
          { status: 400 }
        );
      }
      return await processMPesaPayment(amount, service, customerEmail, customerName, phoneNumber);
    } else {
      return NextResponse.json(
        { success: false, message: 'Unsupported payment method' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 }
    );
  }
}

// PayPal Payment Processing
async function processPayPalPayment(amount: number, currency: string, service: string, customerEmail: string, customerName: string) {
  try {
    // Get PayPal access token
    const authResponse = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!authResponse.ok) {
      throw new Error('Failed to get PayPal access token');
    }

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Create PayPal order
    const orderResponse = await fetch('https://api-m.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: currency,
            value: amount.toString(),
          },
          description: `Hash Haven - ${service}`,
          custom_id: `${service}_${Date.now()}`,
        }],
        payer: {
          email_address: customerEmail,
          name: {
            given_name: customerName?.split(' ')[0] || 'Customer',
            surname: customerName?.split(' ').slice(1).join(' ') || '',
          },
        },
        application_context: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel`,
          brand_name: 'Hash Haven',
          user_action: 'PAY_NOW',
        },
      }),
    });

    if (!orderResponse.ok) {
      throw new Error('Failed to create PayPal order');
    }

    const orderData = await orderResponse.json();
    const approvalLink = orderData.links.find((link: { rel: string; href: string }) => link.rel === 'approve');

    return NextResponse.json({
      success: true,
      paymentMethod: 'paypal',
      orderId: orderData.id,
      approvalUrl: approvalLink?.href,
      message: 'PayPal order created successfully',
    });

  } catch (error) {
    console.error('PayPal payment error:', error);
    return NextResponse.json(
      { success: false, message: 'PayPal payment failed' },
      { status: 500 }
    );
  }
}

// M-Pesa Payment Processing (using Safaricom Daraja API)
async function processMPesaPayment(amount: number, service: string, customerEmail: string, customerName: string, phoneNumber: string) {
  try {
    // Get M-Pesa access token
    const authResponse = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64')}`,
      },
    });

    if (!authResponse.ok) {
      throw new Error('Failed to get M-Pesa access token');
    }

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Format phone number (remove + and ensure it starts with 254)
    const formattedPhone = phoneNumber.replace(/^\+?/, '').replace(/^0/, '254');

    // Generate timestamp
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    
    // Generate password (Base64 of BusinessShortCode + Passkey + Timestamp)
    const password = Buffer.from(`${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`).toString('base64');

    // Initiate STK Push
    const stkResponse = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: Math.round(amount),
        PartyA: formattedPhone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: formattedPhone,
        CallBackURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/mpesa-callback`,
        AccountReference: `HashHaven_${service}`,
        TransactionDesc: `Payment for ${service} - Hash Haven`,
      }),
    });

    if (!stkResponse.ok) {
      throw new Error('Failed to initiate M-Pesa payment');
    }

    const stkData = await stkResponse.json();

    if (stkData.ResponseCode === '0') {
      return NextResponse.json({
        success: true,
        paymentMethod: 'mpesa',
        checkoutRequestId: stkData.CheckoutRequestID,
        merchantRequestId: stkData.MerchantRequestID,
        message: 'M-Pesa payment initiated. Please check your phone for the payment prompt.',
      });
    } else {
      throw new Error(stkData.errorMessage || 'M-Pesa payment initiation failed');
    }

  } catch (error) {
    console.error('M-Pesa payment error:', error);
    return NextResponse.json(
      { success: false, message: 'M-Pesa payment failed' },
      { status: 500 }
    );
  }
}

// Get payment status
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentMethod = searchParams.get('method');
    const transactionId = searchParams.get('transaction_id');

    if (!paymentMethod || !transactionId) {
      return NextResponse.json(
        { error: 'Payment method and transaction ID required' },
        { status: 400 }
      );
    }

    if (paymentMethod === 'paypal') {
      // Check PayPal order status
      const authResponse = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      });

      const authData = await authResponse.json();
      const accessToken = authData.access_token;

      const orderResponse = await fetch(`https://api-m.paypal.com/v2/checkout/orders/${transactionId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const orderData = await orderResponse.json();

      return NextResponse.json({
        status: orderData.status,
        amount: orderData.purchase_units[0]?.amount?.value,
        currency: orderData.purchase_units[0]?.amount?.currency_code,
      });

    } else if (paymentMethod === 'mpesa') {
      // M-Pesa status would typically be handled via callbacks
      // This is a simplified status check
      return NextResponse.json({
        status: 'pending',
        message: 'M-Pesa status updates are handled via callbacks',
      });
    }

    return NextResponse.json(
      { error: 'Invalid payment method' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Payment status error:', error);
    return NextResponse.json(
      { error: 'Failed to get payment status' },
      { status: 500 }
    );
  }
}