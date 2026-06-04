'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Heart, Share2, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const inWishlist = product ? isInWishlist(product.id) : false;
  const [showNotification, setShowNotification] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Product Not Found</h1>
          <Link href="/" className="text-[#4FBFAD] hover:underline">Return to Homepage</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleWishlistToggle = () => {
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
    <div className="bg-[#0a0a0a]">
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-2xl z-50 text-sm font-medium"
        >
          {showNotification}
        </motion.div>
      )}

      {/* Breadcrumb */}
      <div className="bg-[#111] border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <Link href={`/category/${product.category.toLowerCase().replace(/ /g, '-')}`} className="text-gray-500 hover:text-[#4FBFAD]">{product.category}</Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-white font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Column */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 aspect-square relative border border-gray-800"
            >
              <Image
                src={product.images && product.images.length > 0 ? product.images[selectedImage] : product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
              />
            </motion.div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`bg-[#1a1a1a] rounded-lg overflow-hidden aspect-square relative border ${selectedImage === idx ? 'border-[#4FBFAD]' : 'border-gray-800'}`}
                  >
                    <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Column */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>

            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.inStock ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

            {/* Key Features */}
            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="bg-[#1a1a1a] rounded-lg p-6 mb-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-4 text-white">Key Features</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-[#4FBFAD] mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="bg-[#1a1a1a] rounded-lg p-6 mb-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-4 text-white">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications.height && (
                    <div>
                      <span className="text-gray-500 text-sm">Height</span>
                      <p className="font-medium text-white">{product.specifications.height}</p>
                    </div>
                  )}
                  {product.specifications.topDiameter && (
                    <div>
                      <span className="text-gray-500 text-sm">Top Diameter</span>
                      <p className="font-medium text-white">{product.specifications.topDiameter}</p>
                    </div>
                  )}
                  {product.specifications.bottomDiameter && (
                    <div>
                      <span className="text-gray-500 text-sm">Bottom Diameter</span>
                      <p className="font-medium text-white">{product.specifications.bottomDiameter}</p>
                    </div>
                  )}
                  {product.specifications.weight && (
                    <div>
                      <span className="text-gray-500 text-sm">Weight</span>
                      <p className="font-medium text-white">{product.specifications.weight}</p>
                    </div>
                  )}
                  {product.specifications.material && (
                    <div>
                      <span className="text-gray-500 text-sm">Material</span>
                      <p className="font-medium text-white">{product.specifications.material}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Available Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-white">Available Colors</h3>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full border-2 hover:scale-110 transition-transform ${
                        color === 'white' ? 'bg-white border-gray-500' :
                        color === 'black' ? 'bg-black border-gray-600' :
                        color === 'red' ? 'bg-red-500 border-red-400' :
                        color === 'clear' ? 'bg-transparent border-gray-500' :
                        'bg-gradient-to-r from-blue-400 to-purple-400 border-transparent'
                      }`}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={handleWishlistToggle}
                className={`flex items-center space-x-2 px-6 py-3 border rounded-lg transition-all font-medium ${
                  inWishlist
                    ? 'bg-red-500 border-red-500 text-white'
                    : 'border-gray-700 hover:bg-gray-800 text-gray-400'
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                <span>{inWishlist ? 'Saved' : 'Save'}</span>
              </button>
              <button className="p-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors text-gray-400">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#4FBFAD] text-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Enquire About This Product</h3>
              <p className="mb-4">Contact us for bulk orders, custom requirements, or pricing information</p>
              <div className="space-y-2 text-sm">
                <p>📞 0320 4006761 | 0300 2007742</p>
                <p>✉️ Majidindustries@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
