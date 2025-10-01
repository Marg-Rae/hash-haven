import { Suspense } from 'react';
import Link from 'next/link';

function PaymentCancelContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Cancelled</h1>
          <p className="text-gray-600">
            Your payment was cancelled. No charges have been made to your account.
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/services" 
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
          >
            Try Again
          </Link>
          
          <Link 
            href="/contact" 
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300 inline-block"
          >
            Contact Support
          </Link>
          
          <Link 
            href="/" 
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300 inline-block"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Need Help?</strong><br />
            If you experienced any issues during payment, please contact our support team. We&apos;re here to help!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PaymentCancel() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentCancelContent />
    </Suspense>
  );
}