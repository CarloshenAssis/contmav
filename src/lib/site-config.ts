export const siteConfig = {
  name: "ContMav Contabilidade",
  shortName: "ContMav",
  url: "https://contmav.com",
  description:
    "ContMav Contabilidade em São José dos Campos. Serviços contábeis, fiscais, trabalhistas, MEI e consultoria empresarial.",
  address: {
    street: "R. Benedito da Silva Ramos, 20 - Esplanada",
    city: "São José dos Campos - SP",
    zip: "12242-650",
    country: "Brasil",
  },
  google: {
    rating: "5,0",
    reviews: 256,
  },
  experienceYears: 11,
  region: "Vale do Paraíba",
  // TODO: substituir pelo número oficial de WhatsApp da ContMav (formato: 55DDDNUMERO, apenas dígitos).
  whatsappNumber: "5512999999999",
  // TODO: substituir pelo Instagram oficial da ContMav.
  instagramUrl: "https://www.instagram.com/",
  googleReviewsUrl: "https://www.google.com/search?q=contmav+contabilidade",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Contato", href: "/#contato" },
] as const;

export const footerLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Pré-diagnóstico", href: "/pre-diagnostico" },
  { label: "Contato", href: "/#contato" },
] as const;
