import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/amenagement")({
  head: () => ({
    meta: [
      { title: "Aménagement d'espace — Idéal Contemporain, Marrakech" },
      {
        name: "description",
        content:
          "Réorganisation d'espace : circulation, proportions, implantation du mobilier existant avant tout achat.",
      },
      { property: "og:title", content: "Aménagement d'espace — Idéal Contemporain" },
      {
        property: "og:description",
        content: "Parfois, il ne manque pas un meuble. Il manque une organisation.",
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
      <p className="kicker">Aménagement</p>
      <h1 className="display-lg mt-6">Réorganiser l'espace</h1>
      <p className="mt-8 max-w-xl text-greige">Page en préparation.</p>
    </div>
  );
}
