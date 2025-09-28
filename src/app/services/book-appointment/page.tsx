"use client";

import { useState } from "react";

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    city: "",
    state: "",
    category: "",
    itemName: "",
    quantity: "",
    measure: "",
    priceMin: "",
    priceMax: "",
    readyDate: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        setError("Please fill all fields.");
        return;
      }
    }

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to book appointment");

      setSuccess(true);
      setFormData({
        name: "",
        addressLine1: "",
        city: "",
        state: "",
        category: "",
        itemName: "",
        quantity: "",
        measure: "",
        priceMin: "",
        priceMax: "",
        readyDate: "",
      });
    } catch (err) {
      setError("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-green-900 mb-6 text-center">
          📅 Book Appointment
        </h1>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-700 mb-4 text-center">Appointment booked successfully! ✅</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium text-gray-700">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Street, area, landmark"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="State"
              />
            </div>
          </div>

          {/* Category & Item */}
          <div>
            <label className="block font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Category (e.g., Fruits, Vegetables)"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Name of the item"
            />
          </div>

          {/* Quantity & Measure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Quantity"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Measure</label>
              <input
                type="text"
                name="measure"
                value={formData.measure}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Kg, Litre, Dozen etc."
              />
            </div>
          </div>

          {/* Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Min Price</label>
              <input
                type="number"
                name="priceMin"
                value={formData.priceMin}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Minimum price"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Max Price</label>
              <input
                type="number"
                name="priceMax"
                value={formData.priceMax}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Maximum price"
              />
            </div>
          </div>

          {/* Ready Date */}
          <div>
            <label className="block font-medium text-gray-700">Date Ready</label>
            <input
              type="date"
              name="readyDate"
              value={formData.readyDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold shadow transition"
          >
            Book Appointment 📅
          </button>
        </form>
      </div>
    </div>
  );
}
