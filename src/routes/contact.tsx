import { createFileRoute } from "@tanstack/react-router";
import { ADRESSE, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & rendez-vous — Idéal Contemporain, Marrakech" },
      {
        name: "description",
        content:
          "Prendre rendez-vous au showroom de Sidi Ghanem ou demander un devis pour une pièce sur mesure.",
      },
      { property: "og:title", content: "Contact & rendez-vous — Idéal Contemporain" },
      {
        property: "og:description",
        content: "Écrivez-nous sur WhatsApp ou venez au showroom, 437 Quartier Industriel Sidi-Ghanem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="conteneur pt-40 pb-[var(--section)]">
      <p className="kicker">Contact</p>
      <h1 className="display-lg mt-6">Parlons de votre projet</h1>
      <address className="mt-10 not-italic">
        {ADRESSE.rue}
        <br />
        {ADRESSE.ville} {ADRESSE.cp}
      </address>
      <a
        href={whatsappLink("Bonjour, je souhaite prendre rendez-vous au showroom.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-10"
      >
        WhatsApp {WHATSAPP_DISPLAY}
      </a>
    </div>
  );
}
