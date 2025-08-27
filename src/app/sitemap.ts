export default function sitemap() {
  const base = "https://sargiyim.vercel.app";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/cart`, lastModified: now },
    { url: `${base}/(legal)/kvkk`, lastModified: now },
    { url: `${base}/(legal)/iade`, lastModified: now },
  ];
}
