"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Product } from "@/lib/types";

type CartContextValue = {
  items: CartItem[]; count: number; subtotal: number; open: boolean;
  setOpen: (open: boolean) => void;
  addItem: (product: Product, color: string, quantity?: number) => void;
  removeItem: (id: string, color: string) => void;
  updateQuantity: (id: string, color: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem("maw3aw-cart") || "[]")); } catch { setItems([]); }
    setHydrated(true);
  }, []);
  useEffect(() => { if (hydrated) localStorage.setItem("maw3aw-cart", JSON.stringify(items)); }, [items, hydrated]);

  const addItem = (product: Product, color: string, quantity = 1) => {
    setItems((current) => {
      const found = current.find((item) => item.product.id === product.id && item.color === color);
      return found ? current.map((item) => item === found ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { product, color, quantity }];
    });
    setOpen(true);
  };
  const removeItem = (id: string, color: string) => setItems((current) => current.filter((item) => item.product.id !== id || item.color !== color));
  const updateQuantity = (id: string, color: string, quantity: number) => quantity < 1 ? removeItem(id, color) : setItems((current) => current.map((item) => item.product.id === id && item.color === color ? { ...item, quantity } : item));
  const value = useMemo(() => ({ items, open, setOpen, addItem, removeItem, updateQuantity, count: items.reduce((n, i) => n + i.quantity, 0), subtotal: items.reduce((n, i) => n + i.quantity * i.product.price, 0) }), [items, open]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
