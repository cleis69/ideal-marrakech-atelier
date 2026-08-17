import { createFileRoute } from "@tanstack/react-router";
import { ADRESSE } from "@/lib/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Idéal Contemporain" },
      {
        name: "description",
        content: "Éditeur, hébergement et traitement des données du site Idéal Contemporain, Marrakech.",
      },
      { property: "og:title", content: "Mentions légales — Idéal Contemporain" },
      { property: "og:description", content: "Informations légales du site Idéal Contemporain." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="conteneur pt-40 pb-[var(--section)] max-w-2xl">
      <h1 className="display-lg">Mentions légales</h1>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-greige">
        <p>
          Éditeur : Idéal Contemporain, {ADRESSE.rue}, {ADRESSE.ville} {ADRESSE.cp}, Maroc.
        </p>
        <p>
          Les contenus, photographies et textes de ce site appartiennent à Idéal Contemporain.
          Toute reproduction est soumise à autorisation.
        </p>
        <p>
          Données : les messages envoyés via WhatsApp ou le formulaire de contact servent uniquement
          à répondre à la demande. Ils ne sont ni revendus ni transmis à des tiers.
        </p>
      </div>
    </div>
  );
}
