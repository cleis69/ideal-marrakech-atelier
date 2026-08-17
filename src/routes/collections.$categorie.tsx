import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/collections/$categorie")({
  head: ({ params }) => {
    const nom =
      CATEGORIES.find((c) => c.slug === params.categorie)?.nom ?? "Collection";
    return {
      meta: [
        { title: `${nom} — Idéal Contemporain, Marrakech` },
        {
          name: "description",
          content: `${nom} en travertin, bois massif, acier noir. Pièces disponibles en showroom à Sidi Ghanem, ou réalisables sur mesure.`,
        },
        { property: "og:title", content: `${nom} — Idéal Contemporain` },
        {
          property: "og:description",
          content: `${nom} fabriqués à Sidi Ghanem, Marrakech.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { categorie } = Route.useParams();
  const nom = CATEGORIES.find((c) => c.slug === categorie)?.nom ?? "Collection";
  return (
    <div className="conteneur pt-40 pb-[var(--section)]">
      <p className="kicker">Collection</p>
      <h1 className="display-lg mt-6">{nom}</h1>
      <p className="mt-8 max-w-xl text-greige">
        Page en préparation. Les pièces de cette catégorie seront présentées ici.
      </p>
    </div>
  );
}
