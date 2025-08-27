"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">Sargiyim</Link>

        <nav className="flex items-center gap-6 font-medium">
          {/* İç sayfalara Link kullan */}
          <Link href="/#products" className="hover:text-green-600">Ürünler</Link>
          <Link href="/#about" className="hover:text-green-600">Hakkımızda</Link>
          <Link href="/#contact" className="hover:text-green-600">İletişim</Link>
          <Link href="/(legal)/kvkk" className="hover:text-green-600">KVKK</Link>
          <Link href="/(legal)/iade" className="hover:text-green-600">İade</Link>

          <Link href="/cart" className="relative px-3 py-1 rounded-lg border hover:bg-gray-50">
            Sepet
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
