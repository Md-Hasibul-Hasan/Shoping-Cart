import  { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <tr className="border">
            <td className="p-2">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover mx-auto"
                />
            </td>

            <td className="p-2">{product.name}</td>
            <td className="p-2">${product.price}</td>

            <td className="p-2">
                <div className="flex items-center justify-center gap-1">
                    <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={()=>{
                            let qty = product.quantity - 1;
                            if(qty<1) qty = 1;
                            dispatch(updateQuantity({ id: product.id, Quan: qty }));
                        }}
                    >-</button>
                    <input
                        type="number"
                        value={product.quantity}
                        className="w-12 text-center border rounded"
                        onChange={(e)=>{
                            let qty = Number(e.target.value);
                            if(qty<1) x = 1;
                            dispatch(updateQuantity({ id: product.id, Quan: x }));
                        }}
                    />
                    <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={()=>{
                            let qty = product.quantity + 1;
                            dispatch(updateQuantity({ id: product.id, Quan: qty }));
                        }}
                    >+</button>
                </div>
            </td>

            <td className="p-2">
                ${(product.price * product.quantity).toFixed(2)}
            </td>

            <td className="p-2">
                <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={()=>dispatch(removeFromCart(product))}
                >Remove</button>
            </td>
        </tr>
    );
};

export default CartItem;