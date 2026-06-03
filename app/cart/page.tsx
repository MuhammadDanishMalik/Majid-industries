'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="bg-[#111] border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link>
            <span className="text-gray-600">›</span>
            <span className="text-white font-medium">Enquiries</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <ShoppingBag className="w-24 h-24 text-gray-700 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-white">Interested in Our Products?</h1>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          We do not process orders online. Please contact us directly for pricing, bulk orders, or custom requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#4FBFAD] text-white px-8 py-3 rounded-lg hover:bg-[#3da392] transition-colors font-medium"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="inline-block bg-[#1a1a1a] border border-gray-700 text-white px-8 py-3 rounded-lg hover:bg-[#222] transition-colors font-medium"
          >
            Browse Products
          </Link>
        </div>
        <div className="mt-10 text-gray-500 text-sm space-y-1">
          <p>📞 0320 4006761 | 0300 2007742</p>
          <p>✉️ Majidindustries@hotmail.com</p>
        </div>
      </motion.div>
    </div>
  );
}
