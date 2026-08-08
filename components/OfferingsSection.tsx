'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const offerings = [
  {
    id: 1,
    title: 'Smart Series Buckets',
    image: '/offerings/smart-series.jpg',
    description: 'Durable, Hygienic, Ready to serve',
    href: '/category/smart-series-buckets',
  },
  {
    id: 2,
    title: 'Signature Series Buckets',
    image: '/offerings/signature-series.jpg',
    description: 'Premium heavy-duty packaging',
    href: '/category/signature-series-buckets',
  },
  {
    id: 3,
    title: 'Square Series Buckets',
    image: '/offerings/square-series.jpg',
    description: 'Space-efficient & stackable',
    href: '/category/square-series-buckets',
  },
  {
    id: 4,
    title: 'Jars',
    image: '/offerings/jars.jpg',
    description: 'Crystal clear & versatile',
    href: '/category/jars',
  },
  {
    id: 5,
    title: 'Bottles & Containers',
    image: '/offerings/bottles.jpg',
    description: 'For every liquid need',
    href: '/category/bottles',
  },
  {
    id: 6,
    title: 'Jerry Cans',
    image: '/offerings/jerry-cans.jpg',
    description: 'Heavy-duty liquid storage',
    href: '/category/jerry-cans',
  },
  {
    id: 7,
    title: 'Household Products',
    image: '/offerings/household.jpg',
    description: 'Everyday storage solutions',
    href: '/category/household-products',
  },
];

export default function OfferingsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What we are offering
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="bg-[#1a1a1a] border border-gray-700 p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-[#1a1a1a] border border-gray-700 p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80"
            >
              <Link href={offering.href}>
                <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                    <p className="text-sm text-gray-200">{offering.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
