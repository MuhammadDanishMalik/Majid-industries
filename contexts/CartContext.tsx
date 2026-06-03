'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
  type: 'sample' | 'carton';
}

interface CartContextType {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, type: 'sample' | 'carton', quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart = (product: Product, type: 'sample' | 'carton', quantity = 1) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(
        item => item.id === product.id && item.type === type
      );

      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id && item.type === type
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { ...product, quantity, type }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const addToWishlist = (product: Product) => {
    setWishlist(currentWishlist => {
      if (currentWishlist.find(item => item.id === product.id)) {
        return currentWishlist;
      }
      return [...currentWishlist, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(currentWishlist =>
      currentWishlist.filter(item => item.id !== productId)
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;
  
  const cartTotal = cart.reduce((total, item) => {
    const price = item.type === 'sample' ? item.samplePrice : item.cartonPrice;
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        cartCount,
        wishlistCount,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
