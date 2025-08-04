// src/pages/Shop.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/avbar";

export default function Shop() {
  const navigate = useNavigate();
  // TODO: fetch real menu items
  const items = [
    { id: 1, name: "Rice Meal A", price: 75, img: "/rice-meal.jpg" },
    { id: 2, name: "Choco Drink", price: 45, img: "/choco-drink.jpg" },
    // …
  ];

  const handleReserve = (id) => {
    navigate("/cart", { state: { itemId: id } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SITE‑WIDE NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="mt-6">
        <div className="bg-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-6">Canteen Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
                >
                  <img
                    src={it.img}
                    alt={it.name}
                    className="mb-4 h-32 w-full object-cover rounded"
                  />
                  <h3 className="font-medium text-lg mb-2">{it.name}</h3>
                  <p className="mb-4 text-gray-700">₱{it.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleReserve(it.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Reserve
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
