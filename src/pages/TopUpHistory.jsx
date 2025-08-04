import React from "react";

export default function TopUpHistory() {
  // TODO: fetch top‑up records
  const tops = [
    { id: 1, date: "2025-07-20", amount: 100.0, status: "Success" },
    { id: 2, date: "2025-07-18", amount: 50.0, status: "Failed" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Top‑Up History</h1>
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Date</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tops.map((t) => (
            <tr key={t.id}>
              <td className="p-2">{t.date}</td>
              <td className="p-2 text-center">₱{t.amount.toFixed(2)}</td>
              <td
                className={`p-2 text-center ${
                  t.status === "Success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
