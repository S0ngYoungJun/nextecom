"use client";

import { create } from "zustand";

interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  addItem: (productId: string, variantId: string, quantity: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isLoading: false,

  addItem: (productId, variantId, quantity) => {
    const existingItem = get().items.find(
      (item) => item.productId === productId && item.variantId === variantId
    );

    if (existingItem) {
      // 기존 상품 수량 업데이트
      set({
        items: get().items.map((item) =>
          item.productId === productId && item.variantId === variantId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      // 새 상품 추가
      set({
        items: [
          ...get().items,
          { productId, variantId, quantity },
        ],
      });
    }
  },

  removeItem: (productId, variantId) => {
    set({
      items: get().items.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
      ),
    });
  },

  clearCart: () => set({ items: [] }),
}));
