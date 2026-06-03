'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category.toLowerCase().replace(/ /g, '-') === slug);

  if (!category) {
    return (<div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]"><div className="text-center"><h1 className="text-4xl font-bold mb-4 text-white">Category Not Found</h1><Link href="/" className="text-[#4FBFAD] hover:underline">Return to Homepage</Link></div></div>);
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="bg-[#111] border-b border-gray-800"><div className="container mx-auto px-4 py-3"><div className="flex items-center space-x-2 text-sm"><Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link><span className="text-gray-600">›</span><span className="text-white font-medium">{category.name}</span></div></div></div>

      <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="bg-gradient-to-br from-[#4FBFAD] to-[#0B6A5D] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{category.description || `Explore our range of high-quality ${category.name.toLowerCase()}`}</p>
          <p className="mt-4 text-white/80">{categoryProducts.length} {categoryProducts.length === 1 ? 'Product' : 'Products'} Available</p>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="container mx-auto px-4 py-16">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-6">No products available in this category at the moment.</p>
            <Link href="/" className="inline-block bg-[#4FBFAD] text-white px-8 py-3 rounded-lg hover:bg-[#3da392] transition-colors font-medium">Browse All Products</Link>
          </div>
        )}
      </motion.section>

      {categoryProducts.length > 0 && (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[#111] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Explore Other Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.filter(c => c.slug !== slug).map((cat) => (
                <motion.div key={cat.id} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                  <Link href={`/category/${cat.slug}`} className="block bg-[#1a1a1a] rounded-lg p-6 text-center hover:border-gray-600 transition-all border border-gray-800">
                    <h3 className="font-bold text-white mb-2">{cat.name}</h3>
                    <p className="text-sm text-gray-500">{products.filter(p => p.category.toLowerCase().replace(/ /g, '-') === cat.slug).length} Products</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
