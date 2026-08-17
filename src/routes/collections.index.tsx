import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — Idéal Contemporain, Marrakech" },
      {
        name: "description",
        content:
          "Dix catégories de mobilier contemporain fabriqué à Sidi Ghanem : tables, canapés, fauteuils, lits, buffets, consoles, miroirs.",
      },
      { property: "og:title", content: "Collections — Idéal Contemporain" },
      {
        property: "og:description",
        content: "Dix catégories de mobilier contemporain fabriqué à Sidi Ghanem, Marrakech.",
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
      <p className="kicker">Collections</p>
      <h1 className="display-lg mt-6">Nos collections</h1>
      <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-lin border border-lin">
        {CATEGORIES.map((c) => (
          <li key={c.slug} className="bg-ivoire">
            <Link
              to="/collections/$categorie"
              params={{ categorie: c.slug }}
              className="block px-8 py-14 kicker text-noir hover:bg-lin transition-colors"
            >
              {c.nom}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
