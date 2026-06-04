'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import type { Product } from '@/types/product';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const q = value.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8));
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#111] border-b border-gray-700 shadow-2xl animate-search-slide">
        <div className="container mx-auto px-4 py-5">
          {/* Search Input Row */}
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-[#4FBFAD] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products, categories…"
              className="flex-1 bg-transparent text-white text-lg placeholder-gray-500 outline-none"
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 flex-shrink-0"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-700 mt-4" />

          {/* Results */}
          {query.trim() && (
            <div className="mt-4 max-h-[60vh] overflow-y-auto pb-4">
              {results.length > 0 ? (
                <>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
                    {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
                  </p>
                  <ul className="space-y-2">
                    {results.map((product) => (
                      <li key={product.id}>
                        <Link
                          href={`/product/${product.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          {/* Product Image */}
                          <div className="w-14 h-14 relative flex-shrink-0 bg-[#1a1a1a] rounded-md overflow-hidden border border-gray-800">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-1"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm truncate group-hover:text-[#4FBFAD] transition-colors">
                              {product.name}
                            </p>
                            <p className="text-gray-500 text-xs mt-0.5">{product.category}</p>
                          </div>

                          {/* Arrow */}
                          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#4FBFAD] flex-shrink-0 transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-gray-400 text-sm">No products found for &ldquo;{query}&rdquo;</p>
                  <p className="text-gray-600 text-xs mt-1">Try a different keyword or browse by category</p>
                </div>
              )}
            </div>
          )}

          {/* Empty state hint */}
          {!query.trim() && (
            <div className="py-6 text-center">
              <p className="text-gray-600 text-sm">Start typing to search products…</p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes searchSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-search-slide {
          animation: searchSlideDown 0.18s ease-out both;
        }
      `}</style>
    </>
  );
}
