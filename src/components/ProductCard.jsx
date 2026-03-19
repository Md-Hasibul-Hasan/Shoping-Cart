import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";


const ProductCard = (props) => {
    const { product } = props;
    const dispatch = useDispatch();

    return (
        <div className="border p-3 rounded w-64">

            <div className="h-48 w-full">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-2 text-center">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm">Price: {product.price}</p>
                <button
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;