# Prompt maître — spécification de build

Copier le bloc ci-dessous **tel quel** comme premier message de l'outil de génération.

**Compatible avec** : Claude Code · Cursor · Bolt.new · v0 · Windsurf · Lovable · ou tout agent de code.
Le bloc est volontairement agnostique : il décrit la stack, les tokens et les sections, sans dépendre d'une plateforme.

> **Sans budget d'outil no-code** : ce prompt fonctionne tel quel avec **Claude Code** (gratuit avec un abonnement Claude) ou **Cursor**. C'est même la meilleure option — on garde le contrôle du code, du repo Git et du déploiement.

Il construit la structure complète, la DA et la homepage. Les itérations page par page se trouvent dans `01-iterations.md`.

---

```
Crée un site vitrine premium pour IDÉAL CONTEMPORAIN, un atelier de mobilier
contemporain situé à Sidi Ghanem, Marrakech (Maroc). Site en FRANÇAIS uniquement.

Stack : React + Tailwind + shadcn/ui. Ajoute react-three-fiber et drei
(@react-three/fiber, @react-three/drei) pour les modules 3D.

════════════════════════════════════════════════════════════════
PARTI PRIS : GALERIE, PAS BOUTIQUE
════════════════════════════════════════════════════════════════
Beaucoup d'espace blanc. Grandes images. Peu de texte. Grilles éditoriales
asymétriques. Aucune carte avec bordure/ombre/fond. Aucun badge promotionnel,
aucun compte à rebours, aucune étoile, aucune réduction. L'espace vide est le
principal signal de niveau de gamme — ne le remplis pas.

════════════════════════════════════════════════════════════════
DESIGN TOKENS — à respecter strictement
════════════════════════════════════════════════════════════════
COULEURS
  Ivoire      #FAF7F2   fond principal
  Sable       #F2EDE4   alternance de sections
  Lin         #E8DFD2   surfaces, filets, survol
  Noir mat    #1A1815   texte, section sombre
  Greige      #8A8177   texte secondaire, labels
  Travertin   #C9B79F   accent matière, filets
  Noyer       #6B4A32   chaleur, ponctuel
  Terracotta  #B5643F   accent chaud, 1 usage par page maximum

Répartition : 70% ivoire/sable, 20% image, 8% noir, 2% accent.
UNE SEULE section sombre par page.
Aucun dégradé de fond. Aucune couleur saturée.

TYPOGRAPHIE
  Titres : 'Instrument Serif' (Google Fonts), weight 400, line-height 0.95–1.05
  Corps  : 'Inter', line-height 1.65
  Labels/kickers : Inter, 0.6875rem, UPPERCASE, letter-spacing 0.28em, greige
      → C'EST LA SIGNATURE VISUELLE DE LA MARQUE. Chaque kicker de section,
        chaque label de catégorie, chaque étiquette matériau l'utilise.
  Display hero : clamp(4rem, 9vw, 8.5rem)

FORMES
  border-radius : 0px (2px maximum sur les images)
  AUCUNE box-shadow nulle part
  Séparations : filets 1px #E8DFD2 uniquement
  Boutons : rectangulaires, UPPERCASE, letter-spacing 0.18em, padding 1.125rem 2.25rem
      → au survol : inversion des couleurs uniquement, JAMAIS de scale

MISE EN PAGE
  Grille 12 colonnes, max-width 1440px
  Marges latérales : clamp(1.5rem, 8vw, 8rem)
  Espacement entre sections : clamp(6rem, 12vh, 12rem)
  Texte aligné à gauche sur 5 colonnes, image sur 7 — jamais centré symétrique

ANIMATION
  Apparition au scroll : opacity + translateY(24px), 700ms,
      cubic-bezier(0.16, 1, 0.3, 1)
  Titres : apparition par mots, décalage 40ms
  Parallaxe d'image : facteur 0.15 maximum
  Transitions de page : fondu 400ms
  prefers-reduced-motion → tout est désactivé, contenu statique équivalent

════════════════════════════════════════════════════════════════
ARBORESCENCE
════════════════════════════════════════════════════════════════
/                                    Accueil
/collections                         Index — 10 catégories
/collections/:categorie              Page catégorie
/collections/:categorie/:produit     Fiche produit + visualiseur 3D
/sur-mesure                          Configurateur 3D
/realisations                        Portfolio
/realisations/:projet                Cas client
/atelier                             Savoir-faire, équipe, matériaux
/showroom                            Le lieu + visite virtuelle
/contact                             Contact & devis
/mentions-legales
/politique-confidentialite

NAVIGATION (5 entrées) :
  Collections · Sur-mesure · Réalisations · Atelier · Showroom
  + bouton « Prendre rendez-vous » à droite
  Header transparent sur le hero, devient ivoire opaque au scroll.

BULLE WHATSAPP flottante en bas à droite, persistante sur tout le site.
  Lien : https://wa.me/212605405930?text=Bonjour%2C%20je%20vous%20écris%20depuis%20votre%20site.
  Cercle noir mat 56px, icône ivoire, pas d'animation en boucle.

LES 10 CATÉGORIES (ne pas en inventer d'autres) :
  Tables basses · Tables à manger · Canapés · Fauteuils · Chaises ·
  Lits · Buffets · Consoles · Décoration murale · Miroirs

════════════════════════════════════════════════════════════════
HOMEPAGE — 9 sections
════════════════════════════════════════════════════════════════

SECTION 01 — HERO (100vh)
  Image plein écran d'un salon contemporain : lumière naturelle rasante,
  murs en béton ciré, grande baie vitrée, tables basses en travertin,
  canapé blanc bouclé, tapis clair. Léger zoom parallaxe très lent.
  Overlay dégradé sombre subtil en bas pour la lisibilité.

  Texte apparaissant après 1,5s, aligné à gauche, ancré en bas à gauche :
    kicker  : SIDI GHANEM, MARRAKECH
    titre   : « Le mobilier contemporain, fait à Marrakech. »
              (Instrument Serif, très grand, ivoire)
    sous-titre : « Pièces disponibles en showroom. Sur-mesure sur demande. »
    boutons : [ Voir les collections ] [ Découvrir le sur-mesure ]

  Indicateur de scroll discret en bas au centre.

SECTION 02 — PROPOSITION DE VALEUR  (fond ivoire)
  Deux colonnes asymétriques, énormément d'espace vide.
    kicker : IDÉAL CONTEMPORAIN
    texte, Instrument Serif ~2.5rem :
      « Nous dessinons et réalisons du mobilier contemporain à Sidi Ghanem.
        Certaines pièces vous attendent au showroom.
        Les autres, nous les dessinons avec vous. »
  En dessous, séparés par des filets verticaux 1px :
    ATELIER    ORGANISE    DESIGN
  (labels espacés 0.28em, greige)
  Aucun bouton dans cette section.

SECTION 03 — COLLECTIONS  (fond sable)
  kicker : COLLECTIONS
  titre  : « Nos collections »
  Grille ASYMÉTRIQUE des 10 catégories, images portrait 4:5.
  Alterne les tailles : certaines cartes sur 2 colonnes de large,
  d'autres sur 1, décalages verticaux irréguliers.
  Sur chaque image : nom de la catégorie en UPPERCASE espacé, ivoire,
  ancré en bas à gauche. Au survol : zoom image 1.03 sur 1200ms.
  Bouton en fin de section : [ Voir tout le catalogue ]

SECTION 04 — SUR-MESURE ⭐ MOMENT 3D  (fond ivoire, 200vh, sticky)
  LA SECTION LA PLUS IMPORTANTE DU SITE.

  Canvas react-three-fiber en position sticky, centré, occupant 60% de
  la largeur à droite. Un modèle de table basse en 3D, éclairage doux
  type studio, fond transparent.

  À MESURE QUE L'UTILISATEUR SCROLLE, LE MODÈLE SE TRANSFORME :
    0–33%   : plateau rond, bois noyer, piètement fin
    33–66%  : le matériau devient noir mat, le piètement s'élargit en cannelures
    66–100% : le plateau devient travertin beige, le piètement devient acier noir fin
  Rotation lente et continue sur Y pendant tout le parcours.
  Interpolation fluide entre les états, pas de saut brutal.

  À gauche, texte sticky synchronisé :
    kicker : SUR-MESURE
    titre  : « Vous avez vu la pièce. Maintenant, changez-la. »
    texte  : « Dimensions, essence, finition, piètement.
               Chaque pièce du catalogue est un point de départ. »
    bouton : [ Configurer une pièce ]

  Sous le canvas, 3 labels indiquant l'étape en cours (l'actif en noir,
  les autres en greige) : ESSENCE · FINITION · PIÈTEMENT

  IMPORTANT : charge le canvas 3D en lazy loading (React.lazy + Suspense).
  Affiche une image statique en fallback. Désactive complètement le canvas
  si prefers-reduced-motion est actif.

SECTION 05 — RÉALISATIONS  (fond ivoire)
  kicker : RÉALISATIONS
  titre  : « Chez nos clients »
  sous-titre : « Des appartements, des villas, des riads.
                 Des pièces qui ont trouvé leur place. »
  3 projets en grille éditoriale asymétrique, grandes images,
  légendes minimales (type de lieu · ville · prestation).
  Bouton : [ Voir les réalisations ]

SECTION 06 — SAVOIR-FAIRE & MATIÈRE  (fond NOIR MAT #1A1815, pleine largeur)
  LA SEULE SECTION SOMBRE DE LA PAGE. Rupture visuelle nette.
  Texte ivoire sur noir.

  kicker : MATIÈRE
  Bandeau horizontal de macro-plans de matière (ratio 21:9) :
  grain du travertin, fil du bois, pli du tissu bouclé, arête de l'acier noir.
  Défilement horizontal lent au scroll.

  Les matériaux nommés en Instrument Serif ~3rem, un par ligne,
  séparés par des filets 1px #2E2A26 :
    Travertin
    Acier noir
    Bois massif
    Laque
    Métal

  En regard, en petit :
    « Nous ne parlons pas de qualité.
      Nous nommons ce que nous employons. »
  Bouton contour ivoire : [ L'atelier ]

SECTION 07 — AMÉNAGEMENT  (fond sable, compacte)
  kicker : AMÉNAGEMENT
  titre  : « Parfois, il ne manque pas un meuble. Il manque une organisation. »
  Comparateur avant/après avec curseur glissant horizontal, plein largeur,
  ratio 16:9. Texte court à côté.
  Bouton : [ En savoir plus ]

SECTION 08 — SHOWROOM & CONFIANCE  (fond ivoire)
  Deux colonnes.
  GAUCHE : grande image du showroom, ratio 4:5.
  DROITE : les faits, sans emphase, typographie sobre, filets de séparation :

    kicker : LE SHOWROOM

    437 Quartier Industriel Sidi-Ghanem
    Marrakech 4000

    Lundi – Vendredi     9h00 – 17h30
    Samedi               9h00 – 13h30

    WhatsApp  +212 605 405 930

  Boutons : [ Visiter le showroom en 3D ] [ Prendre rendez-vous ]

  NE METS AUCUN compteur d'abonnés, aucune note en étoiles,
  aucun logo partenaire, aucun chiffre du type « +100 clients ».

SECTION 09 — CTA FINAL  (fond ivoire, 80vh, centré verticalement)
  Une seule phrase, Instrument Serif, taille display, énormément d'espace :
    « Venez voir.
      Ou racontez-nous. »
  Deux boutons de poids visuel égal :
    [ Prendre rendez-vous au showroom ]  [ Parler de mon projet ]
  Ligne discrète en dessous, greige :
    « Ou écrivez-nous directement sur WhatsApp → »

FOOTER  (fond noir mat)
  Logo IDÉAL CONTEMPORAIN
  Baseline : ATELIER · ORGANISE · DESIGN  (uppercase, espacé 0.28em)
  Colonnes : navigation · collections · contact
  437 Quartier Industriel Sidi-Ghanem, Marrakech 4000
  Lundi – Vendredi 9h–17h30 · Samedi 9h–13h30
  WhatsApp +212 605 405 930
  Liens : Instagram · Mentions légales · Politique de confidentialité
  PAS de compteur d'abonnés Instagram.

════════════════════════════════════════════════════════════════
TON DES TEXTES — règle absolue
════════════════════════════════════════════════════════════════
DÉCRIRE, PAS VENDRE. Phrases courtes. Nommer les matières et les dimensions.

N'ÉCRIS JAMAIS :
  « sublimer votre intérieur », « pièce maîtresse », « design épuré »,
  « matériaux premium », « confort optimal », « haut de gamme »,
  « quantités limitées », « précommandez dès maintenant »,
  « élégance et durabilité », « offrez-vous le luxe de »
AUCUN EMOJI nulle part sur le site.

Écris plutôt : « Trois plateaux en travertin, trois hauteurs, piètement en
acier noir. À poser côte à côte, en cascade, ou séparément. »

Statuts produit — trois seulement :
  Disponible au showroom · Sur commande · Réalisable sur mesure

════════════════════════════════════════════════════════════════
CONTRAINTES TECHNIQUES — non négociables
════════════════════════════════════════════════════════════════
- Mobile-first. Le trafic sera majoritairement mobile en 4G.
- 3D en lazy loading, JAMAIS dans le rendu initial. Fallback image statique.
- prefers-reduced-motion → toutes animations et 3D désactivées.
- Images : lazy loading, format moderne, dimensions explicites.
- Sémantique HTML correcte, un seul h1 par page, alt sur toutes les images.
- Balises meta et Open Graph sur chaque page.
- Données structurées JSON-LD LocalBusiness/FurnitureStore sur toutes les
  pages, avec l'adresse et les horaires ci-dessus.
- Focus visible accessible : outline 1px travertin, offset 3px.
- Objectif Lighthouse mobile : performance ≥ 85, accessibilité ≥ 95.

════════════════════════════════════════════════════════════════
IMAGES DE PLACEHOLDER
════════════════════════════════════════════════════════════════
Utilise des images d'intérieurs contemporains dans la palette suivante :
crème, sable, beige, béton ciré, bois clair, noir mat, travertin, végétal.
Lumière naturelle latérale et rasante, ombres longues et douces.
Contexte architectural visible (baies vitrées, plafonds hauts, enduits minéraux).

N'UTILISE JAMAIS : de packshot sur fond dégradé, d'image sans contexte
spatial, de lumière frontale dure, de palette froide ou nordique,
de motif oriental ou de zellige décoratif.

Commence par la homepage complète et le layout global (header, footer,
bulle WhatsApp, tokens, routing). Je te donnerai les pages intérieures ensuite.
```

---

## Après le premier build

1. Vérifier la homepage en desktop **et** en mobile.
2. Contrôler que la Section 04 (3D) se charge bien en différé et ne bloque pas le premier rendu.
3. Vérifier `prefers-reduced-motion` (macOS : Réglages → Accessibilité → Affichage → Réduire les animations).
4. Passer aux pages intérieures : `01-iterations.md`.

## Note d'exécution selon l'outil

| Outil | Ce qu'il faut adapter |
|---|---|
| **Claude Code / Cursor** | Créer d'abord le projet (`npm create vite@latest -- --template react-ts`), installer Tailwind, shadcn/ui, `@react-three/fiber`, `@react-three/drei`. Coller `design/tokens.css` dans `src/index.css`. Puis envoyer le prompt. |
| **Bolt.new / v0** | Coller le prompt directement. Préciser « React + Vite + Tailwind » en tête si l'outil propose un autre framework par défaut. |
| **Lovable** | Coller le prompt comme message initial de `create_project`. |

## Rappel de production

Les images générées par l'outil sont des **placeholders**. Aucune ne doit rester en production.
Voir `docs/07-contenus-a-recuperer.md` — le shooting photo est un prérequis de lancement, pas une option.
