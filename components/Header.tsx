'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';
import { categories } from '@/data/products';
import SearchModal from '@/components/SearchModal';

export default function Header() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]">
      {/* Main Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-[75px] h-[75px] relative">
                <Image
                  src="/trademark-seal.png"
                  alt="Majid Industries"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <Link href="/" className="text-[#4FBFAD] hover:text-[#6fd4c4] font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#4FBFAD] font-medium">
                  About Us
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
              >
                <button className="text-gray-300 flex items-center hover:text-[#4FBFAD] font-medium">
                  Product Category
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {isProductDropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-72 bg-[#1a1a1a] shadow-lg rounded-md py-2 border border-gray-700">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="block px-4 py-3 hover:bg-gray-800 text-gray-300 hover:text-[#4FBFAD]"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-[#4FBFAD] font-medium">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#4FBFAD] font-medium">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-[#4FBFAD] text-gray-300 transition-colors"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
