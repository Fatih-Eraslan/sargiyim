import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404 - Sayfa Bulunamadı</h1>
        <p className="text-gray-600 mb-6">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <Link href="/" className="text-green-700 underline">
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
