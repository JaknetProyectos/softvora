"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (
    id: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

const CART_STORAGE_KEY = "creativaworks-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const [isLoaded, setIsLoaded] =
    useState(false);

  /* Load cart from localStorage */
  useEffect(() => {
    try {
      const storedCart =
        localStorage.getItem(
          CART_STORAGE_KEY
        );

      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error(
        "Error loading cart from localStorage:",
        error
      );
    } finally {
      setIsLoaded(true);
    }
  }, []);

  /* Save cart to localStorage */
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error(
        "Error saving cart to localStorage:",
        error
      );
    }
  }, [items, isLoaded]);

  const addItem = useCallback(
    (newItem: Omit<CartItem, "quantity">) => {
      setItems((prev) => {
        const existingItem = prev.find(
          (item) => item.id === newItem.id
        );

        if (existingItem) {
          return prev.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
          );
        }

        return [
          ...prev,
          {
            ...newItem,
            quantity: 1,
          },
        ];
      });

      setIsCartOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (id: string) => {
      setItems((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (
      id: string,
      quantity: number
    ) => {
      if (quantity <= 0) {
        setItems((prev) =>
          prev.filter(
            (item) => item.id !== id
          )
        );
      } else {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id
              ? { ...item, quantity }
              : item
          )
        );
      }
    },
    []
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(
    () => setIsCartOpen(true),
    []
  );

  const closeCart = useCallback(
    () => setIsCartOpen(false),
    []
  );

  const toggleCart = useCallback(
    () =>
      setIsCartOpen((prev) => !prev),
    []
  );

  const totalItems = items.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (context === undefined) {
    throw new Error(
      "useCart must be used within a CartProvider"
    );
  }

  return context;
}