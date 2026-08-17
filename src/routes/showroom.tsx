import { createFileRoute } from "@tanstack/react-router";
import { ADRESSE, HORAIRES } from "@/lib/site";

export const Route = createFileRoute("/showroom")({
  head: () => ({
    meta: [
      { title: "Showroom Sidi Ghanem — Idéal Contemporain" },
      {
        name: "description",
        content:
          "437 Quartier Industriel Sidi-Ghanem, Marrakech. Lundi–vendredi 9h–17h30, samedi 9h–13h30.",
      },
      { property: "og:title", content: "Showroom Sidi Ghanem — Idéal Contemporain" },
      {
        property: "og:description",
        content: "Le lieu, les horaires, la visite. 437 Quartier Industriel Sidi-Ghanem, Marrakech.",
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
      <p className="kicker">Le showroom</p>
      <h1 className="display-lg mt-6">Sidi Ghanem</h1>
      <address className="mt-10 not-italic">
        {ADRESSE.rue}
        <br />
        {ADRESSE.ville} {ADRESSE.cp}
      </address>
      <dl className="mt-8 max-w-md">
        {HORAIRES.map((h) => (
          <div key={h.jours} className="flex justify-between border-t border-lin py-3 text-sm">
            <dt className="text-greige">{h.jours}</dt>
            <dd>{h.heures}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
