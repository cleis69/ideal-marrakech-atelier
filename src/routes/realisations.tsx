import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Idéal Contemporain, Marrakech" },
      {
        name: "description",
        content:
          "Appartements, villas et riads équipés par l'atelier Idéal Contemporain à Marrakech et ailleurs au Maroc.",
      },
      { property: "og:title", content: "Réalisations — Idéal Contemporain" },
      {
        property: "og:description",
        content: "Des appartements, des villas, des riads. Des pièces qui ont trouvé leur place.",
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
      <p className="kicker">Réalisations</p>
      <h1 className="display-lg mt-6">Chez nos clients</h1>
      <p className="mt-8 max-w-xl text-greige">Page en préparation.</p>
    </div>
  );
}
