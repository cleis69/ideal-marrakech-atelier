import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const surHero = pathname === "/";
  const [scrolled, setScrolled] = useState(!surHero);
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    if (!surHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [surHero]);

  const opaque = scrolled || ouvert;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        opaque ? "bg-ivoire border-b border-lin" : "bg-transparent"
      }`}
    >
      <div className="conteneur flex h-[76px] items-center justify-between gap-8">
        <Link
          to="/"
          className={`font-display text-[1.0625rem] leading-none tracking-[0.06em] uppercase ${
            opaque ? "text-noir" : "text-ivoire"
          }`}
        >
          Idéal Contemporain
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`kicker transition-opacity hover:opacity-60 ${
                opaque ? "text-noir" : "text-ivoire"
              }`}
              activeProps={{ style: { opacity: 0.55 } }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={opaque ? "btn-ligne" : "btn-ivoire"}
            style={{ padding: "0.8125rem 1.5rem" }}
          >
            Prendre rendez-vous
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          className={`kicker lg:hidden ${opaque ? "text-noir" : "text-ivoire"}`}
        >
          {ouvert ? "Fermer" : "Menu"}
        </button>
      </div>

      {ouvert && (
        <div className="lg:hidden border-t border-lin bg-ivoire">
          <nav aria-label="Navigation mobile" className="conteneur flex flex-col py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOuvert(false)}
                className="font-display text-3xl py-3 border-b border-lin text-noir"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOuvert(false)}
              className="btn mt-8 self-start"
            >
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
