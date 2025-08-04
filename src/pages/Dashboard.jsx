import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/avbar";

export default function Dashboard() {
  const navigate = useNavigate();

  // Load the registered user’s name and balance from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const username = storedUser.name || "Guest";
  const balance =
    typeof storedUser.balance === "number"
      ? storedUser.balance
      : storedUser.balance
      ? parseFloat(storedUser.balance)
      : 150.0;

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from local storage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Good afternoon, {username}
              </h1>
              <p className="text-gray-600">Ready to order something delicious?</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                onClick={() => navigate("/profile")}
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow font-medium text-gray-700 hover:text-gray-900"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                ₱{balance.toFixed(2)} Balance
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => navigate("/shop")}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-gray-900">Order Food</h3>
                  <p className="text-sm text-gray-500">Browse menu</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => navigate("/topup")}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-gray-900">Add Money</h3>
                  <p className="text-sm text-gray-500">Top up wallet</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => navigate("/transactions")}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-gray-900">Order History</h3>
                  <p className="text-sm text-gray-500">View orders</p>
                </div>
              </div>
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-gray-900">Logout</h3>
                  <p className="text-sm text-gray-500">Sign out of your account</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Featured Promotion */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Today's Special Offer</h2>
                <p className="text-red-100 mb-4 sm:mb-0">
                  Filipino Breakfast Combo - Save 30%
                </p>
                <div className="text-3xl font-bold">
                  ₱89{" "}
                  <span className="text-lg font-normal line-through text-red-200">
                    ₱129
                  </span>
                </div>
              </div>
              <button
                onClick={() => navigate("/shop")}
                className="mt-4 sm:mt-0 bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Order Now
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-400 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-400 rounded-full opacity-10 transform translate-x-8 translate-y-8"></div>
        </div>

        {/* Recent Orders & Favorites */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Order Again</h2>
              <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                See all
              </button>
            </div>

            {[
              {
                icon: "🍛",
                name: "Chicken Rice Meal",
                ordered: "2 days ago",
                price: "₱85",
              },
              {
                icon: "🍜",
                name: "Beef Noodle Soup",
                ordered: "5 days ago",
                price: "₱95",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 flex items-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Ordered {item.ordered}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-lg font-bold text-gray-900">
                      {item.price}
                    </span>
                    <div className="ml-2 flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    navigate("/cart", {
                      state: { prefill: item.name.toLowerCase().replace(/ /g, "-") },
                    })
                  }
                  className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl font-medium transition-colors"
                >
                  Reorder
                </button>
              </div>
            ))}
          </div>

          {/* Your Stats */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Stats</h2>
            {[
              { label: "This Month", value: "15 orders", icon: "🛒", color: "orange" },
              { label: "Total Spent", value: "₱1,250", icon: "💰", color: "green" },
              { label: "Member Status", value: "Gold", icon: "🏆", color: "yellow" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div
                  className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Quick Access */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Rice Meals", icon: "🍛" },
              { name: "Noodles", icon: "🍜" },
              { name: "Snacks", icon: "🍿" },
              { name: "Beverages", icon: "🧋" },
              { name: "Desserts", icon: "🍰" },
              { name: "Breakfast", icon: "🥞" },
            ].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => navigate("/shop")}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 text-center group"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <p className="font-medium text-gray-900 text-sm">{cat.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
