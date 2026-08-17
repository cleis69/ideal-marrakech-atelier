# IDÉAL CONTEMPORAIN — Web Creative Brief

**Client** : Idéal Contemporain — Mobilier & déco d'intérieur, Marrakech
**Agence** : ULTRA VISION
**Source unique de l'audit** : [@ideal.contemporain](https://www.instagram.com/ideal.contemporain/) (relevé le 16 août 2026)
**Ambition** : vitrine expérientielle 3D premium + catalogue

---

## Le constat en une phrase

Idéal Contemporain a une **esthétique déjà juste** et **zéro preuve** — le site ne doit pas être une vitrine de plus, il doit être la machine à fabriquer la crédibilité que l'Instagram ne fabrique pas.

## Les 5 choses à retenir avant de coder

| # | Constat | Conséquence sur le site |
|---|---|---|
| 1 | **Aucune empreinte web.** Pas de site, pas de Google Business trouvé, 49 abonnés. Le site sera le premier actif digital de la marque. | Page blanche totale. Aucune contrainte d'existant. SEO local à conquérir intégralement. |
| 2 | **Les visuels sont des rendus / images catalogue, pas des preuves.** Aucune photo d'atelier, de fabrication, de chantier, de client, d'équipe. | Le site ne peut pas reposer sur la galerie. Il faut des **modules de preuve** structurels, et un shooting réel avant lancement. |
| 3 | **La taxonomie produit est déjà écrite** — par le client, dans ses 10 stories à la une. | L'arborescence catalogue est validée d'avance. Ne pas la réinventer. |
| 4 | **Deux services facturés sont invisibles** : le sur-mesure (mentionné 4× en légende, jamais montré) et la réorganisation d'espace (0 occurrence). | Deux pages à construire **sans matière**. Contenu à produire de zéro avec le client. |
| 5 | **Le tunnel de conversion est cassé.** Deux posts renvoient vers « lien en bio pour shopper la collection » — le lien en bio est un WhatsApp. | Le site règle une fuite de conversion qui existe déjà. Argument de vente immédiat. |

## Le pari stratégique

> **La 3D n'est pas une décoration du site. La 3D EST la preuve.**

Une marque qui ne peut pas montrer son atelier peut montrer sa **maîtrise**. Un configurateur sur-mesure qui laisse le visiteur composer sa pièce, changer l'essence, la finition, les dimensions, et voir le résultat en temps réel, **démontre** une capacité de fabrication mieux qu'une photo d'établi. C'est la colonne vertébrale du projet.

---

## Structure du dépôt

```
ideal-contemporain-web/
├── README.md                          ← vous êtes ici
├── docs/
│   ├── 01-audit-instagram.md          Identité, offre, inventaire, portfolio, perception, cibles
│   ├── 02-positionnement.md           Phrase, promesse, différenciation, signatures
│   ├── 03-architecture-site.md        Arborescence complète + homepage section par section
│   ├── 04-direction-artistique.md     Palette, typo, image, vidéo, UI, animation, références
│   ├── 05-copywriting.md              Copy FR prêt à intégrer, 3 propositions par bloc
│   ├── 06-ux-seo.md                   Parcours, CTA, mots-clés, pages SEO
│   ├── 07-contenus-a-recuperer.md     Ce qui existe / ce qu'il faut demander / ce qui manque
│   └── 08-brief-final.md              BRIEF ULTRA VISION en 15 points + scores
├── design/
│   └── tokens.css                     Variables CSS prêtes à coller dans le projet
└── prompts/
    ├── 00-prompt-maitre.md            Spéc de build complète — premier message à l'agent
    └── 01-iterations.md               Prompts de suivi, page par page
```

## Ordre de lecture recommandé

1. Ce README
2. `docs/08-brief-final.md` — la synthèse actionnable
3. `docs/03-architecture-site.md` — ce qu'on construit
4. `prompts/00-prompt-maitre.md` — on lance

Le reste sert de référence pendant la production.

## Avec quel outil construire

Les prompts sont **agnostiques**. Ils fonctionnent avec Claude Code, Cursor, Bolt.new, v0, Windsurf ou Lovable.

**Recommandé sans budget no-code** : Claude Code (inclus dans un abonnement Claude) ou Cursor. On garde le code, le repo Git et le déploiement — ce qui est de toute façon préférable pour un site client qu'on devra maintenir.

Stack visée : React + Vite + Tailwind + shadcn/ui + `@react-three/fiber` / `@react-three/drei`.
Déploiement : Vercel ou Netlify, tous deux gratuits sur ce volume.

---

## Statut des informations

Toute affirmation factuelle de ce dépôt est qualifiée :

- **CERTAIN** — lu directement sur le compte Instagram
- **PROBABLE** — déduction solide, plusieurs signaux convergents
- **HYPOTHÈSE** — lecture plausible, à valider avec le client
- **NON OBSERVABLE** — aucune information disponible, à demander

Rien dans ce dépôt n'est inventé. Les zones vides sont signalées comme vides.

---

## Avertissement de production

Ce brief décrit un site que le contenu actuel **ne permet pas encore de remplir**.
Voir `docs/07-contenus-a-recuperer.md` — trois blocages sont bloquants pour la mise en ligne :

1. Photos réelles (atelier + showroom + au moins 3 réalisations)
2. Périmètre exact du sur-mesure et de la réorganisation d'espace
3. Décision e-commerce : vend-on en ligne, oui ou non
