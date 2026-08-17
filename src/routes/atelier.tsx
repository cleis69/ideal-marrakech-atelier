import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "L'atelier — Idéal Contemporain, Sidi Ghanem" },
      {
        name: "description",
        content:
          "Travertin, acier noir, bois massif, laque, métal. L'atelier de Sidi Ghanem, ses machines et son équipe.",
      },
      { property: "og:title", content: "L'atelier — Idéal Contemporain" },
      {
        property: "og:description",
        content: "Savoir-faire, équipe et matériaux de l'atelier de Sidi Ghanem.",
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
      <p className="kicker">Atelier</p>
      <h1 className="display-lg mt-6">L'atelier</h1>
      <p className="mt-8 max-w-xl text-greige">Page en préparation.</p>
    </div>
  );
}
