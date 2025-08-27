"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Ürünlerinizde price string (örn: "49,90 TL") olduğu için CartItem da string tutuyor
type CartItem = {
  id: number;
  name: string;
  price: string;     // <-- string
  image?: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  totalCount: number;
  totalPrice: number;
  totalPriceText: string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// "49,90 TL" / "49.90 TL" / "1.299,00 ₺" hepsini sayıya çevirir
function parsePrice(text: string): number {
  const s = text.replace(/\s/g, "");
  const hasComma = s.includes(",");
  const hasDot = s.includes(".");
  let cleaned = s.replace(/[^\d,.-]/g, ""); // sadece rakam , . - kalsın
  if (hasComma && !hasDot) {
    // 1.299,00 → 1299.00
    cleaned = cleaned.replace(/\./g, "").replace(",", ".");
  } else {
    // 1,299.00 → 1299.00
    cleaned = cleaned.replace(/,/g, "");
  }
  const n = Number(cleaned);
  return isNaN(n) ? 0 : n;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (item: Omit<CartItem, "quantity">, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const remove = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0);
  const totalPriceText = `${totalPrice.toFixed(2)} TL`;

  return (
    <CartContext.Provider
      value={{ items, add, remove, clear, totalCount, totalPrice, totalPriceText }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
