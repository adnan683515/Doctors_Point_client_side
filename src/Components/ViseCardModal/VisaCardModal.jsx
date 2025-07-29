import React, { useState } from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_pubicKey); 

const CheckoutForm = ({ days }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const res = await fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 500 }),
        });

        const { clientSecret } = await res.json();

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            alert(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                alert("✅ Payment successful!");
            }
        }

        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                    <p className="text-sm font-medium text-gray-700">Select a day for appointment:</p>
                    <div className="flex flex-wrap gap-3">
                        {days.map((day, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-100 transition"
                            >
                                <input
                                    type="radio"
                                    name="appointmentDay"
                                    value={day}
                                    required
                                    className="accent-blue-500"
                                />
                                <span className="text-blue-800 font-semibold">{day}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Valid Phone Number</label>
                    <input
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Address</label>
                    <input
                        type="text"
                        placeholder="Your full address"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Disease / Message</label>
                    <textarea
                        rows="3"
                        placeholder="Write your problem in brief..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Details</label>
                <CardElement className="p-2 border rounded-md" />
            </div>

            <button
                type="submit"
                disabled={processing}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                {processing ? "Processing..." : "Pay & Submit"}
            </button>
        </form>
    );
};

const VisaCardModal = ({ isOpen, close, days }) => {
    return (
        <div data-aos="zoom-in">
            <Dialog open={isOpen} as="div" className="relative z-50" onClose={close}>
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all space-y-4">
                        <div className="flex justify-between">
                            <DialogTitle as="h3" className="text-xl font-semibold text-blue-600">
                                Appointment Form
                            </DialogTitle>
                            <button className="bg-blue-600 px-4 py-1 text-white rounded-sm" onClick={close}>Close</button>
                        </div>

                        <Elements stripe={stripePromise}>
                            <CheckoutForm days={days} />
                        </Elements>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default VisaCardModal;
