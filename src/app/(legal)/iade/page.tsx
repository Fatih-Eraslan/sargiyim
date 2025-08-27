export default function IadePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-28">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6">Teslimat &amp; İade Şartları</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Siparişler 1-3 iş günü içinde kargoya verilir.</li>
          <li>Ürünü teslim aldıktan sonra 14 gün içinde iade talep edebilirsiniz.</li>
          <li>Etiketi koparılmış / kullanılmış ürünlerde iade kabul edilmez.</li>
          <li>İade ve değişim için WhatsApp: <a className="text-green-600 underline" href="https://wa.me/905551112233" target="_blank">+90 555 111 22 33</a></li>
        </ul>
      </div>
    </main>
  );
}
