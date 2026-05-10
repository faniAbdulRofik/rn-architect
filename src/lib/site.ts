export const SITE = {
  name: "RN_ARCHITECT",
  tagline: "Arsitektur & Interior yang Berbicara",
  whatsapp: "6281234567890", // ganti via admin nanti
  email: "hello@rn-architect.com",
  address: "Jakarta, Indonesia",
  hours: "Senin – Sabtu, 09.00 – 18.00 WIB",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
