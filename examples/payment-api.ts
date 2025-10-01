// Payment Processing API Integration Examples - PayPal and M-Pesa

// PayPal Payment Example
export async function processPayPalPayment(amount: number, service: string, customerEmail: string, customerName: string) {
  try {
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'USD',
        service,
        customerEmail,
        customerName,
        paymentMethod: 'paypal',
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to PayPal for payment approval
      window.location.href = data.approvalUrl;
      return data;
    } else {
      throw new Error(data.message || 'PayPal payment failed');
    }
  } catch (error) {
    console.error('PayPal payment error:', error);
    throw error;
  }
}

// M-Pesa Payment Example
export async function processMPesaPayment(amount: number, service: string, customerEmail: string, customerName: string, phoneNumber: string) {
  try {
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        service,
        customerEmail,
        customerName,
        phoneNumber,
        paymentMethod: 'mpesa',
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Show success message and wait for phone prompt
      alert('Please check your phone for the M-Pesa payment prompt.');
      
      // Optionally, poll for payment status
      const checkoutRequestId = data.checkoutRequestId;
      pollMPesaStatus(checkoutRequestId);
      
      return data;
    } else {
      throw new Error(data.message || 'M-Pesa payment failed');
    }
  } catch (error) {
    console.error('M-Pesa payment error:', error);
    throw error;
  }
}

// Poll M-Pesa payment status (optional)
async function pollMPesaStatus(checkoutRequestId: string, maxAttempts: number = 30) {
  let attempts = 0;
  
  const poll = async () => {
    if (attempts >= maxAttempts) {
      console.log('Payment status check timeout');
      return;
    }
    
    attempts++;
    
    try {
      const response = await fetch(`/api/payment?method=mpesa&transaction_id=${checkoutRequestId}`);
      const data = await response.json();
      
      if (data.status === 'completed') {
        // Payment successful
        window.location.href = '/payment/success';
      } else if (data.status === 'failed') {
        // Payment failed
        window.location.href = '/payment/cancel';
      } else {
        // Still pending, check again in 5 seconds
        setTimeout(poll, 5000);
      }
    } catch (error) {
      console.error('Status check error:', error);
      setTimeout(poll, 5000);
    }
  };
  
  poll();
}

// Check Payment Status
export async function checkPaymentStatus(paymentMethod: 'paypal' | 'mpesa', transactionId: string) {
  try {
    const response = await fetch(`/api/payment?method=${paymentMethod}&transaction_id=${transactionId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Payment status check error:', error);
    throw error;
  }
}