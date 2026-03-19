import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const AllCartProduct = useSelector((state) => state.cartStore);

    let totalItems = 0;
    let totalPrice = 0;

    AllCartProduct.forEach((item) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-center">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Image</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Quantity</th>
                            <th className="border p-2">Total</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {AllCartProduct.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4">
                <h2 className="text-lg">Total Items: {totalItems}</h2>
                <h2 className="text-lg">Total Price: ${totalPrice.toFixed(2)}</h2>

                <div className="mt-2 flex gap-2">

                    <button
                        onClick={() => navigate("/order")}
                        className="bg-green-500 text-white px-4 py-1 rounded"
                    >Checkout</button>

                    <button
                        onClick={() => dispatch(clearCart())}
                        className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;