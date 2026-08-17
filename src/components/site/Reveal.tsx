import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "reveal-on" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Titre en apparition mot à mot, décalage 40ms. */
export function TitreMots({
  texte,
  className = "",
  as: Tag = "h2",
}: {
  texte: string;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const lignes = texte.split("\n");

  return (
    <Tag ref={ref} className={className}>
      {lignes.map((ligne, li) => (
        <span key={li} className="block">
          {ligne.split(" ").map((mot, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span
                className="inline-block reveal"
                style={{
                  transitionDelay: `${(li * 6 + i) * 40}ms`,
                  ...(shown ? { opacity: 1, transform: "none" } : {}),
                }}
              >
                {mot}
                {"\u00A0"}
              </span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
