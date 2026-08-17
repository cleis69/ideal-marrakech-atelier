export const WHATSAPP_NUMBER = "212605405930";
export const WHATSAPP_DISPLAY = "+212 605 405 930";

export function whatsappLink(
  message = "Bonjour, je vous écris depuis votre site.",
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const ADRESSE = {
  rue: "437 Quartier Industriel Sidi-Ghanem",
  ville: "Marrakech",
  cp: "40000",
  pays: "MA",
};

export const HORAIRES = [
  { jours: "Lundi – Vendredi", heures: "9h00 – 17h30" },
  { jours: "Samedi", heures: "9h00 – 13h30" },
  { jours: "Dimanche", heures: "Fermé" },
];

export const CATEGORIES = [
  { slug: "tables-basses", nom: "Tables basses" },
  { slug: "tables-a-manger", nom: "Tables à manger" },
  { slug: "canapes", nom: "Canapés" },
  { slug: "fauteuils", nom: "Fauteuils" },
  { slug: "chaises", nom: "Chaises" },
  { slug: "lits", nom: "Lits" },
  { slug: "buffets", nom: "Buffets" },
  { slug: "consoles", nom: "Consoles" },
  { slug: "decoration-murale", nom: "Décoration murale" },
  { slug: "miroirs", nom: "Miroirs" },
] as const;

export const NAV = [
  { to: "/collections", label: "Collections" },
  { to: "/sur-mesure", label: "Sur-mesure" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/atelier", label: "Atelier" },
  { to: "/showroom", label: "Showroom" },
] as const;

export const jsonLdFurnitureStore = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Idéal Contemporain",
  description:
    "Atelier de mobilier contemporain à Sidi Ghanem, Marrakech. Pièces disponibles en showroom, sur-mesure sur demande.",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADRESSE.rue,
    addressLocality: ADRESSE.ville,
    postalCode: ADRESSE.cp,
    addressCountry: ADRESSE.pays,
  },
  telephone: "+212605405930",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:30",
    },
  ],
};
