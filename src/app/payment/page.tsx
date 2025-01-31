"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import { useCart } from '../context/CartContext';

const PaymentPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isCheckoutEnabled, setIsCheckoutEnabled] = useState(false);
    const router = useRouter();
    const { clearCart } = useCart(); 

    const handleApprove = () => {
        setSuccess(true);
        setIsCheckoutEnabled(true);
        toast.success("Payment approved! You can now proceed to checkout.", {
            position: "top-right",
        });
    };

    const handleCheckout = () => {
        if (isCheckoutEnabled) {
            clearCart(); 
            toast.success("Order completed! Cart has been cleared.", {
                position: "top-right",
            });
            router.push("/ordercompleted");
        }
    };

    return (
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "" }}>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Pay with PayPal</h1>
                {success ? (
                    <h2 className="text-green-500 font-bold mb-4">Payment Successful!</h2>
                ) : (
                    <>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={(data, actions) => {
                                setIsCheckoutEnabled(true);
                                return actions.order.create({
                                    intent: "CAPTURE",
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: "USD",
                                                value: "10.00",
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={async (data, actions) => {
                                if (actions.order) {
                                    const order = await actions.order.capture();
                                    handleApprove();
                                }
                            }}
                            onError={(err) => {
                                toast.error("Payment failed! Please try again.", {
                                    position: "top-right",
                                });
                            }}
                        />
                    </>
                )}
                <button
                    onClick={handleCheckout}
                    disabled={!isCheckoutEnabled}
                    className={`mt-4 px-6 py-3 rounded-lg font-semibold text-white ${
                        isCheckoutEnabled
                            ? "bg-[#FB2E86] hover:bg-pink-600 cursor-pointer"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    Complete Order
                </button>
            </div>
        </PayPalScriptProvider>
    );
};

export default PaymentPage;
