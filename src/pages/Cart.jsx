import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Navbar from "../components/avbar";



export default function Cart() {
  const { state } = useLocation();
  const itemId = state?.itemId;
  // TODO: fetch item details & quantity
  const item = { name: "Rice Meal A", price: 75, qty: 1 };

  const total = item.price * item.qty;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <table className="w-full bg-white rounded-lg shadow mb-6">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Item</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Price</th>
            <th className="p-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">{item.name}</td>
            <td className="p-2 text-center">{item.qty}</td>
            <td className="p-2 text-right">₱{item.price.toFixed(2)}</td>
            <td className="p-2 text-right">₱{(item.price * item.qty).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-bold">₱{total.toFixed(2)}</span>
      </div>

      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Confirm Reservation
      </button>
    </div>
  );
}
