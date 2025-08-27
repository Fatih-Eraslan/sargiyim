export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    // deploydan sonra kendi domaininle güncelle
    sitemap: "https://sargiyim.vercel.app/sitemap.xml",
  };
}
