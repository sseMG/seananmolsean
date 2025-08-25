// src/pages/admin/adminShop.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/avbar";
import { Edit, Trash2 } from "lucide-react";

export default function AdminShop() {
  // --- mock data ---
  const directories = [
    { name: "Home", to: "/admin" },
    { name: "Shop", to: "/admin/shop" },
    { name: "Top-Up", to: "/admin/topup" },
    { name: "Orders", to: "/admin/orders" },
    { name: "Reservations", to: "/admin/reservations" },
    { name: "Stats", to: "/admin/stats" },
  ];

  const products = [
    { id: 1, name: "Rice Meal 1", category: "Meals", price: 69, available: true },
    { id: 2, name: "Nestlé Chuckie", category: "Beverages", price: 25, available: true },
    { id: 3, name: "Oishi Pillows", category: "Snacks", price: 12, available: false },
    { id: 4, name: "Beef Noodle Soup", category: "Meals", price: 95, available: true },
    { id: 5, name: "Choco Drink", category: "Beverages", price: 45, available: true },
    // …
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* site-wide navbar */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* directories */}
        <section>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {directories.map((dir) => (
              <Link
                key={dir.to}
                to={dir.to}
                className={`flex-shrink-0 rounded-lg px-5 py-3 font-medium 
                  ${dir.name === "Shop"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"} 
                  transition`}
              >
                {dir.name}
              </Link>
            ))}
          </div>
        </section>

        {/* header + add button */}
        <section className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
          <div className="space-x-2">
            <Link
              to="/admin/shop/add-rice"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow"
            >
              + Add Rice Meal
            </Link>
            <Link
              to="/admin/shop/add-snacks"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow"
            >
              + Add Snack
            </Link>
            <Link
              to="/admin/shop/add-drinks"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow"
            >
              + Add Drink
            </Link>
          </div>
        </section>

        {/* products grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                    <p className="text-sm text-gray-500">{p.category}</p>
                  </div>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      p.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.available ? "Available" : "Out of Stock"}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-6">₱{p.price.toFixed(2)}</p>
                <div className="flex justify-end space-x-3">
                  <Link
                    to="/admin/shop/edit-items"
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    onClick={() => {/* TODO: delete handler */}}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
