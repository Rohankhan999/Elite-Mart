"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isCheckoutEnabled, setIsCheckoutEnabled] = useState(false);
    const router = useRouter();

    const handleApprove = (orderID: string) => {
        console.log("Payment Successful! Order ID:", orderID);
        setSuccess(true);
        setIsCheckoutEnabled(true); // Enable the Checkout button after mock payment
        toast.success("Payment approved! You can now proceed to checkout.", {
            position: "top-right",
        });
    };

    const handleCheckout = () => {
        if (isCheckoutEnabled) {
            toast.success("Redirecting to Order Completed page...", {
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
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD", // Specify the currency
                        value: "10.00", // Update this value to match your product price
                    },
                },
            ],
        });
    }}
    onApprove={async (data, actions) => {
        if (actions.order) {
            await actions.order.capture();
            handleApprove(data.orderID || "");
        }
    }}
    onError={(err) => {
        console.error("PayPal Checkout Error:", err);
        setError("An error occurred during the payment process.");
        toast.error("Payment failed! Please try again.", {
            position: "top-right",
        });
    }}
    onClick={() => {
        setIsCheckoutEnabled(true); // Enable the Checkout button when the user interacts
    }}
/>

                    </>
                )}
                <button
                    onClick={handleCheckout}
                    disabled={!isCheckoutEnabled}
                    className={`mt-4 px-6 py-3 rounded-lg font-semibold text-white ${
                        isCheckoutEnabled
                            ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    Checkout
                </button>
            </div>
        </PayPalScriptProvider>
    );
};

export default PaymentPage;
