export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-28">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6">KVKK Aydınlatma Metni</h1>
        <p className="text-gray-700 leading-relaxed">
          Sargiyim Tuhafiye olarak kişisel verilerinizi 6698 sayılı KVKK kapsamında
          işliyoruz. Toplanan veriler; sipariş ve iletişim süreçleri için gerekli
          olan ad, soyad, telefon, adres gibi temel bilgilerdir. Verileriniz üçüncü
          kişilerle paylaşılmaz; yalnızca yasal zorunluluk hallerinde resmi
          mercilerle paylaşılabilir.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Veri Sahibi Başvuruları</h2>
        <p className="text-gray-700">
          KVKK kapsamındaki başvurularınızı <a className="text-green-600 underline" href="mailto:info@sargiyim.com">info@sargiyim.com</a> adresine iletebilirsiniz.
        </p>
      </div>
    </main>
  );
}
