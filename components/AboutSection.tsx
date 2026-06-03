'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/hero-facility.jpg"
              alt="Majid Industries Manufacturing Facility"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Trusted Partners in Plastic Packaging Excellence
            </h2>
            <div className="space-y-4 text-gray-400 mb-8">
              <p>
                MAJID INDUSTRIES (PVT) LTD, a leading manufacturer of high-quality 
                plastic packaging solutions since 1996, is dedicated to innovation, 
                sustainability, and customer satisfaction.
              </p>
              <p>
                We have become Pakistan&apos;s one of the largest plastic manufacturing 
                concerns, with more than 200+ products in our portfolio, serving 
                multiple industries including automotive, household, FMCG, and 
                foods & beverages.
              </p>
              <p>
                Our state-of-the-art facility ensures uninterrupted supply, while 
                our dedicated team guarantees flawless delivery to our customers 
                across all provinces of Pakistan.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block bg-[#4FBFAD] text-white px-8 py-3 rounded-md hover:bg-[#3da392] transition-colors font-medium"
            >
              Know More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
