"use client";

import { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";

export function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);

  return (
    <CartProvider>
      {children}
      <CartSidebar />
    </CartProvider>
  );
}
