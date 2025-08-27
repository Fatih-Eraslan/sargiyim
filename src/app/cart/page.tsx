"use client";
export const dynamic = "force-dynamic";

import Link from "next/link";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, remove, clear, totalCount, totalPriceText } = useCart();

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-6">Sepet</h1>

        {items.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow">
            <p className="mb-4">Sepetiniz boş.</p>
            <Link href="/#products" className="text-green-700 underline">
              Alışverişe başla
            </Link>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            {items.map((it, idx) => (
              <div key={`${it.id}-${idx}`} className="flex items-center justify-between border-b py-3">
                <div className="flex items-center gap-3">
                  {it.image && (
                    <img
                      src={it.image}
                      alt={it.name}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-sm text-gray-600">Adet: {it.quantity}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-medium">{it.price}</div>
                  <button onClick={() => remove(it.id)} className="text-red-600 hover:underline">
                    Kaldır
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-4">
              <div className="text-gray-700">Ürün: {totalCount}</div>
              <div className="text-lg font-bold">{totalPriceText}</div>
            </div>

            <div className="flex items-center justify-between">
              <button onClick={clear} className="text-gray-600 hover:underline">Sepeti Boşalt</button>
              <Link href="/checkout" className="bg-green-600 text-white px-4 py-2 rounded-lg">Devam Et</Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
