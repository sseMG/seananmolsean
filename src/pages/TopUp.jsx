// src/pages/TopUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/avbar";

export default function TopUp() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("gcash");
  const [ref, setRef] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call top‑up API → show final confirmation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SITE‑WIDE NAVBAR */}
      <Navbar />

      <main className="mt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6">Top‑up Request Form</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Method Tabs */}
              <div className="flex space-x-2 mb-4">
                <button
                  type="button"
                  onClick={() => setMethod("gcash")}
                  className={`flex-1 py-2 rounded-lg font-medium ${
                    method === "gcash"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Pay via GCash
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("maya")}
                  className={`flex-1 py-2 rounded-lg font-medium ${
                    method === "maya"
                      ? "bg-green-400 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Pay via Maya
                </button>
              </div>

              {/* Reference Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reference Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount to Top‑up<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
                  I confirm that the exact amount (₱{amount || "0.00"}) has been transferred to the provided e‑wallet account for this top‑up request.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!agreed}
                className={`w-full py-3 rounded-lg font-medium text-white transition-colors ${
                  agreed
                    ? "bg-black hover:bg-gray-800"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Confirm Top‑up Request
              </button>
            </form>

            {/* RIGHT: QR CODE */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                {/* Example QR Card */}
                <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                  {method === "gcash" ? (
                    <div>
                      <img
                        src="/gcash-logo.png"
                        alt="GCash"
                        className="h-12 mx-auto mb-4"
                      />
                      <img
                        src="/placeholder-qr.png"
                        alt="GCash QR"
                        className="mx-auto mb-2"
                      />
                      <p className="text-center text-sm text-gray-600">
                        Transfer fees may apply
                      </p>
                      <p className="text-center font-medium mt-2">
                        SEⁿⁿ A****E D.<br/>
                        Mob No.: 09** *** **52
                      </p>
                    </div>
                  ) : (
                    <div>
                      <img
                        src="/maya-logo.png"
                        alt="Maya"
                        className="h-12 mx-auto mb-4"
                      />
                      <img
                        src="/placeholder-qr.png"
                        alt="Maya QR"
                        className="mx-auto mb-2"
                      />
                      <p className="text-center text-sm text-gray-600">
                        Pay via Maya App
                      </p>
                      <p className="text-center font-medium mt-2">
                        User ID: Z0W7R5
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
);
}
