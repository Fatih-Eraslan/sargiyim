"use client";

import type { Product } from "./types/product";
import { products } from "./data/products";
import Header from "./components/Header";
import { useCart } from "./context/CartContext";

export default function Home() {
  const { add } = useCart();

  return (
    <main className="bg-gray-50 text-gray-900">
      <Header />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-600 to-emerald-400 text-white text-center">
        <h2 className="text-5xl font-extrabold mb-6">Sargiyim Tuhafiye</h2>
        <p className="text-xl mb-8">40 Yıllık Güven • İplik, düğme, çorap ve daha fazlası</p>
        <a
          href="#products"
          className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Ürünleri Gör
        </a>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Popüler Ürünler</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((p: Product) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{p.name}</h4>
                <p className="text-gray-600 mb-4">{p.price}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => add(p)}
                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
                  >
                    Sepete Ekle
                  </button>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Hemen Satın Al
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Hakkımızda</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Sargiyim Tuhafiye, 40 yıldır müşterilerine en kaliteli tuhafiye
              ürünlerini sunmaktadır. Dedemizden bize miras kalan bu dükkân,
              iplikten düğmeye, çoraptan ev tekstiline kadar birçok ürünü
              uygun fiyatlarla sizlere ulaştırıyor.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/500x400?text=Tuhafiye+Foto"
            alt="Dükkan Fotoğrafı"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">İletişim</h3>
          <p className="mb-4">📍 Adres: Sultanbeyli, İstanbul</p>
          <p className="mb-4">
            📞 Telefon: <a href="tel:+905551112233" className="text-green-600">+90 555 111 22 33</a>
          </p>
          <a
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            WhatsApp’tan Yaz
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Sargiyim Tuhafiye • Tüm Hakları Saklıdır</p>
        <div className="mt-2 space-x-4 text-sm">
          <a href="/(legal)/kvkk" className="underline">KVKK</a>
          <a href="/(legal)/iade" className="underline">Teslimat & İade</a>
        </div>
      </footer>
    </main>
  );
}
