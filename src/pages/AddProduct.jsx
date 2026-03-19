import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: ""
  });

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.image) {
      alert("All fields required");
      return;
    }

    try {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price)
        })
      });

      alert("Product Added ✅");

      // reset form
      setFormData({
        name: "",
        price: "",
        image: ""
      });

    } catch (error) {
      alert("Failed to add product ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 border p-5 rounded">

      <h1 className="text-xl font-semibold mb-4 text-center">
        Add More Products
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded mt-2"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default AddProduct;