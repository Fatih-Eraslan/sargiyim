"use client";

import Link from "next/link";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, remove, clear, totalCount, totalPriceText } = useCart();

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-6">Sepet</h1>

        {items.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <p>Sepetiniz boş.</p>
            <Link href="/#products" className="inline-block mt-6 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
              Ürünlere Dön
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <ul className="divide-y">
              {items.map((i) => (
                <li key={i.id} className="flex items-center gap-4 p-4">
                  <img src={i.image} alt={i.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="font-semibold">{i.name}</p>
                    <p className="text-gray-600">{i.price} • Adet: {i.quantity}</p>
                  </div>
                  <button onClick={() => remove(i.id)} className="px-3 py-2 border rounded-lg hover:bg-gray-50">
                    Kaldır
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
              <p className="font-medium">
                Toplam ({totalCount} ürün): <span className="font-bold">{totalPriceText}</span>
              </p>
              <div className="flex gap-3">
                <button onClick={clear} className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Sepeti Temizle
                </button>

                {/* Basit ödeme akışı: sepetten ödeme linkine yönlendirme.
                   Shopier toplu sepet işleme sunmadığı için kullanıcıyı "Ürünlere Git"e yönlendirebilir
                   veya popüler ürün için bir Shopier linkine gönderebilirsin. Burada ürünlere dönüyoruz. */}
                <Link href="/#products" className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
                  Ödeme için Ürün Seç
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
