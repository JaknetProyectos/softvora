"use client";

import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import {Link} from "@/i18n/routing";

export default function CartSidebar() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
        onKeyDown={(e) => e.key === "Escape" && closeCart()}
        role="button"
        tabIndex={0}
        aria-label="Cerrar carrito"
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-safeware-blue" />
            <h2 className="font-inter-tight text-xl font-bold text-gray-800">
              Tu Carrito ({totalItems})
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg mb-2">Tu carrito esta vacio</p>
              <p className="text-gray-400 text-sm mb-6">Agrega servicios para comenzar</p>
              <button
                type="button"
                onClick={closeCart}
                className="bg-safeware-blue text-white px-6 py-3 rounded-full hover:bg-safeware-blue/90 transition-colors"
              >
                Ver Servicios
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl p-4 flex gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-inter-tight font-semibold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-safeware-blue font-bold">
                      ${item.price.toLocaleString("es-MX")} MXN
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-red-100 rounded-full text-red-500 transition-colors"
                      aria-label="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus className="w-3 h-3 text-gray-600" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3 h-3 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-inter-tight font-bold text-xl text-gray-800">
                ${totalPrice.toLocaleString("es-MX")} MXN
              </span>
            </div>
            <Link
              href="/paga-tu-cotizacion"
              onClick={closeCart}
              className="block w-full bg-safeware-coral hover:bg-yellow-600 text-white font-semibold py-4 rounded-full text-center transition-colors"
            >
              Proceder al Pago
            </Link>
            <button
              type="button"
              onClick={clearCart}
              className="w-full text-gray-500 hover:text-red-500 text-sm transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
