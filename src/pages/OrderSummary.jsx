import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
    const cart = useSelector((state) => state.cartStore);
    const [payment, setPayment] = useState("");

    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.quantity;
    });

    return (
        <div className="max-w-md mx-auto mt-10 border p-5 rounded">

            <h1 className="text-xl font-semibold mb-4 text-center">
                Order Summary
            </h1>

            {/* Items */}
            <div className="mb-4">
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                        <p>{item.name} x {item.quantity}</p>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>

            <h2 className="font-semibold mb-4">Total: ${total.toFixed(2)}</h2>

            {/* Payment options */}
            <div className="flex flex-col gap-2 mb-4">

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="cod"
                        defaultChecked
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    Cash on Delivery
                </label>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    PayPal
                </label>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="ssl"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    SSLCommerz
                </label>

            </div>

            <button
                className="bg-blue-500 text-white w-full py-2 rounded"
                onClick={() => {
                    if (!payment) {
                        alert("Select payment method");
                        return;
                    }

                    alert("Order placed with " + payment);
                }}
            >
                Place Order
            </button>

        </div>
    );
};

export default OrderSummary;