'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { categories } from '@/data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black">

      {/* Certification Badges Bar */}
      <div className="border-b border-gray-200 py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-start gap-10">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 relative rounded-full overflow-hidden">
                <Image
                  src="/certifications/green-clean.png"
                  alt="Green Clean Certified"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 font-medium text-center">Green Clean<br/>Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 relative rounded-full overflow-hidden">
                <Image
                  src="/certifications/halal.png"
                  alt="Halal Certified"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 font-medium text-center">Halal<br/>Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 relative rounded-full overflow-hidden">
                <Image
                  src="/certifications/iso.png"
                  alt="ISO 14001:2015 & ISO 45001:2018 Certified"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 font-medium text-center">ISO 14001:2015<br/>ISO 45001:2018</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info & Logo */}
          <div>
            <div className="mb-6">
              <div className="w-[120px] h-[120px] relative">
                <Image
                  src="/logo-main.jpg"
                  alt="Majid Industries"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="space-y-2 text-gray-600 text-sm">
              <p>Your Vision, Our Precision</p>
              <p>Since 1996</p>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">INFORMATION</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-black transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">POPULAR CATEGORIES</h3>
            <ul className="space-y-2 text-gray-600">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="hover:text-black transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">CONTACT US</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div>
                <p className="font-semibold text-black mb-1">Head Office</p>
                <p>Plot 9, Block 4 Karim Park</p>
                <p>Ravi Road, Lahore</p>
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Manufacturing Facility</p>
                <p>Bara Dari Road</p>
                <p>Javed Forman Street</p>
                <p>Shahdara Industrial Zone, Lahore</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-black">Phone:</p>
                <p>0320 4006761</p>
                <p>0300 2007742</p>
              </div>
              <div>
                <p className="font-semibold text-black">Email:</p>
                <p>Majidindustries@hotmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-black">Working Hours:</p>
                <p>9 AM – 5 PM</p>
                <p>Monday to Saturday</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Trademark */}
        <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <p className="text-gray-500 text-sm">
              Copyright © 2026 Majid Industries (Private) Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
