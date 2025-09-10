import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';


export  const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const res = await fetch(' http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 500 }), 
        });

        const { clientSecret } = await res.json();

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });

        if (result.error) {
            alert(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                alert("Payment successful!");
            }
        }

        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
            <CardElement className="p-2 border" />
            <button
                type="submit"
                disabled={!stripe || processing}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {processing ? 'Processing…' : 'Pay Now'}
            </button>
        </form>
    );
};