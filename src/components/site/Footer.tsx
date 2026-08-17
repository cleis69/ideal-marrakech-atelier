import { Link } from "@tanstack/react-router";
import { ADRESSE, CATEGORIES, NAV, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-noir text-ivoire">
      <div className="conteneur py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl leading-none">Idéal Contemporain</p>
            <p className="kicker mt-5 text-travertin">Atelier · Organise · Design</p>
          </div>

          <nav aria-label="Pages" className="lg:col-span-2">
            <p className="kicker">Navigation</p>
            <ul className="mt-5 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:opacity-60 transition-opacity">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/amenagement" className="hover:opacity-60 transition-opacity">
                  Aménagement
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-60 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Collections" className="lg:col-span-2">
            <p className="kicker">Collections</p>
            <ul className="mt-5 space-y-2 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/collections/$categorie"
                    params={{ categorie: c.slug }}
                    className="hover:opacity-60 transition-opacity"
                  >
                    {c.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="kicker">Contact</p>
            <address className="mt-5 not-italic text-sm leading-relaxed">
              {ADRESSE.rue}
              <br />
              {ADRESSE.ville} {ADRESSE.cp}
            </address>
            <p className="mt-4 text-sm text-travertin">
              Lundi – Vendredi 9h–17h30
              <br />
              Samedi 9h–13h30
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm hover:opacity-60 transition-opacity"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[color:var(--noir-filet)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="kicker">© {new Date().getFullYear()} Idéal Contemporain</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              Instagram
            </a>
            <Link to="/mentions-legales" className="hover:opacity-60 transition-opacity">
              Mentions légales
            </Link>
            <Link to="/mentions-legales" className="hover:opacity-60 transition-opacity">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
