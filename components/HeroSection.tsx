'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] min-h-[600px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left z-10"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-[#4FBFAD] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Redefining Plastic
              <br />
              Excellence
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafting Essentials for Inspired Living
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
              >
                Shop now
              </Link>
            </motion.div>
          </motion.div>

          {/* Product Images */}
          <div className="relative h-[500px] hidden md:block">
            {/* Floating Product 1 - Top Right */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64"
              initial={{ opacity: 0, y: -50, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Image
                src="/products/hero-bucket-1.png"
                alt="Plastic Bucket"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Product 2 - Bottom Left */}
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80"
              initial={{ opacity: 0, y: 50, rotate: 15 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Image
                src="/products/hero-jar-1.png"
                alt="Plastic Jar"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Product 3 - Center */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Image
                src="/products/hero-bottle-1.png"
                alt="Plastic Bottle"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decoration - Animated Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#4FBFAD] opacity-5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4FBFAD] opacity-5 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
}
