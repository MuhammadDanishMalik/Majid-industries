'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="bg-[#111] border-b border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link>
              <span className="text-gray-600">›</span>
              <span className="text-white font-medium">Saved Products</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-20 text-center"
        >
          <Heart className="w-24 h-24 text-gray-700 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-white">No Saved Products</h1>
          <p className="text-gray-500 mb-8">Save your favourite products here so you can easily find them later!</p>
          <Link href="/" className="inline-block bg-[#4FBFAD] text-white px-8 py-3 rounded-lg hover:bg-[#3da392] transition-colors font-medium">
            Browse Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="bg-[#111] border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link>
            <span className="text-gray-600">›</span>
            <span className="text-white font-medium">Saved Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white">Saved Products ({wishlist.length})</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all group"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="relative aspect-square bg-[#111]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/product/${product.slug}`}>
                  <h3 className="font-semibold text-white hover:text-[#4FBFAD] mb-3 line-clamp-2">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.inStock ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <div className="flex space-x-2">
                    <Link
                      href={`/product/${product.slug}`}
                      className="bg-[#4FBFAD] text-white py-2 px-4 rounded-lg hover:bg-[#3da392] transition-colors font-medium text-sm"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-2 border border-gray-700 rounded-lg hover:bg-red-900/30 hover:border-red-700 hover:text-red-400 transition-colors text-gray-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="inline-block bg-[#1a1a1a] border border-gray-700 text-white px-8 py-3 rounded-lg hover:bg-[#222] transition-colors font-medium">
            Browse More Products
          </Link>
        </div>
      </div>
    </div>
  );
}
