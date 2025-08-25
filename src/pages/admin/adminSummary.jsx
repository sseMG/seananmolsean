import React from 'react'
import Navbar from '../../components/avbar'

export default function AdminSummary() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
        {/* TODO: implement Order Summary */}
      </main>
    </div>
  )
}
