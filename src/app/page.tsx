"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import { useCart } from "./context/CartContext";
import { products } from "./data/products";
import type { Product } from "./types/product";

export default function Home() {
  const { add } = useCart();

  const handleAdd = (p: Product) => {
    // CartContext: price string, image optional → uyumlu nesne gönderiyoruz
    add({
      id: p.id,
      name: p.name,
      price: p.price,
      image: (p as any).image, // ürün tipinde image varsa al (bizde var)
    });
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      <Header />

      {/* HERO */}
      <section className="h-[60vh] md:h-[70vh] grid place-items-center bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Sargiyim Tuhafiye</h1>
          <p className="text-lg md:text-xl opacity-90">
            40 yıllık güven • İplik, düğme, çorap ve daha fazlası
          </p>
          <div className="mt-8">
            <Link
              href="#products"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg"
            >
              Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p: Product) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={(p as any).image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                />
              </div>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-green-700 font-bold mt-1">{p.price}</p>

              <button
                onClick={() => handleAdd(p)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Hakkımızda</h2>
        <p className="text-gray-700 leading-relaxed">
          Sargiyim, dededen toruna geçen tuhafiyecilik geleneğini modern tasarım ve
          güvenilir hizmetle birleştirir. Uygun fiyat, kaliteli ürün ve samimi hizmet
          önceliğimizdir.
        </p>
      </section>

      {/* İLETİŞİM */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">İletişim</h2>
        <div className="space-y-2 text-gray-700">
          <p>Telefon: 0 (555) 111 22 33</p>
          <p>E-posta: info@sargiyim.com</p>
          <div className="pt-2 space-x-4">
            {/* BURADA DA <a> YOK: iç sayfa linkleri Link ile */}
            <Link href="/(legal)/kvkk" className="underline hover:text-green-700">
              KVKK
            </Link>
            <Link href="/(legal)/iade" className="underline hover:text-green-700">
              Teslimat &amp; İade
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Sargiyim. Tüm hakları saklıdır.
        </div>
      </footer>
    </main>
  );
}
