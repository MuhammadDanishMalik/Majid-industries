'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Eye, Repeat } from 'lucide-react';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
      setShowNotification('Removed from wishlist');
    } else {
      addToWishlist(product);
      setShowNotification('✓ Added to wishlist!');
    }
    setTimeout(() => setShowNotification(null), 2000);
  };

  return (
    <motion.div
      className={cn('group relative', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Notification Toast */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-xl z-50 whitespace-nowrap text-sm font-medium"
        >
          {showNotification}
        </motion.div>
      )}

      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden relative border border-gray-800">
        {/* Product Image */}
        <Link href={`/product/${product.slug}`}>
          <motion.div
            className="aspect-square relative bg-[#1a1a1a] cursor-pointer"
            animate={{ y: isHovered ? 8 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
          </motion.div>
        </Link>

        {/* Hover Icons */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col space-y-2"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={handleWishlistToggle}
            className={cn(
              "rounded-full p-2 shadow-md transition-all",
              inWishlist
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-[#2a2a2a] text-gray-300 hover:bg-[#4FBFAD] hover:text-white"
            )}
            aria-label="Add to wishlist"
          >
            <Heart className={cn("w-5 h-5", inWishlist && "fill-current")} />
          </button>
          <button
            className="bg-[#2a2a2a] text-gray-300 rounded-full p-2 shadow-md hover:bg-[#4FBFAD] hover:text-white transition-colors"
            aria-label="Quick view"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            className="bg-[#2a2a2a] text-gray-300 rounded-full p-2 shadow-md hover:bg-[#4FBFAD] hover:text-white transition-colors"
            aria-label="Compare"
          >
            <Repeat className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-medium text-white hover:text-[#4FBFAD] transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-2 mb-3">
            {product.colors.slice(0, 3).map((color) => (
              <button
                key={color}
                className={cn(
                  'w-6 h-6 rounded-full border-2 border-gray-600 hover:border-gray-300 transition-colors',
                  color === 'white' && 'bg-white',
                  color === 'black' && 'bg-black',
                  color === 'red' && 'bg-red-500',
                  color === 'clear' && 'bg-transparent border-gray-500',
                  color === 'custom' && 'bg-gradient-to-r from-blue-400 to-purple-400'
                )}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        )}

        {/* View Details Link */}
        <Link
          href={`/product/${product.slug}`}
          className="inline-block w-full text-center bg-[#1a1a1a] border border-gray-700 text-white py-2.5 px-4 rounded hover:bg-[#4FBFAD] hover:border-[#4FBFAD] transition-colors font-medium text-sm"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
