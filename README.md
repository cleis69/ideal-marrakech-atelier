# Ideal Contemporain: Galerie Épurée

Crée un site vitrine premium pour IDÉAL CONTEMPORAIN, un atelier de mobilier
contemporain situé à Sidi Ghanem, Marrakech (Maroc). Site en FRANÇAIS uniquement.

Stack : React + Vite + Tailwind + shadcn/ui.
Ajoute @react-three/fiber et @react-three/drei pour les modules 3D.

════════════════════════════════════════════════════════════════
PARTI PRIS : GALERIE, PAS BOUTIQUE
════════════════════════════════════════════════════════════════
Beaucoup d'espace blanc. Grandes images. Peu de texte. Grilles éditoriales
asymétriques. Aucune carte avec bordure, ombre ou fond. Aucun badge
promotionnel, aucun compte à rebours, aucune étoile, aucune réduction.
L'espace vide est le principal signal de niveau de gamme — ne le remplis pas.

════════════════════════════════════════════════════════════════
DESIGN TOKENS — à respecter strictement
════════════════════════════════════════════════════════════════
COULEURS
  Ivoire      #FAF7F2   fond principal
  Sable       #F2EDE4   alternance de sections
  Lin         #E8DFD2   surfaces, filets, survol
  Noir mat    #1A1815   texte, section sombre
  Greige      #787066   texte secondaire, labels
  Travertin   #C9B79F   accent matière, filets
  Noyer       #6B4A32   chaleur, ponctuel
  Terracotta  #B5643F   accent chaud, 1 usage par page maximum

Répartition : 70% ivoire/sable, 20% image, 8% noir, 2% accent.
UNE SEULE section sombre par page.
Aucun dégradé de fond. Aucune couleur saturée.

TYPOGRAPHIE
  Titres : 'Instrument Serif' (Google Fonts), weight 400, line-height 0.95–1.05
  Corps  : 'Inter', line-height 1.65
  Labels et kickers : Inter, 0.6875rem, UPPERCASE, letter-spacing 0.28em, greige
      → C'EST LA SIGNATURE VISUELLE DE LA MARQUE, reprise de la baseline
        du logo. Chaque kicker de section, chaque label de catégorie et
        chaque étiquette matériau l'utilise.
  Display hero : clamp(3rem, 9vw, 8.5rem)

FORMES
  border-radius : 0px (2px maximum sur les images)
  AUCUNE box-shadow nulle part
  Séparations : filets 1px #E8DFD2 uniquement
  Boutons : rectangulaires, UPPERCASE, letter-spacing 0.18em,
            padding 1.0625rem 2.125rem
      → au survol : inversion des couleurs uniquement, JAMAIS de scale

MISE EN PAGE
  Grille 12 colonnes, max-width 1440px
  Marges latérales : clamp(1.25rem, 7vw, 7rem)
  Espacement entre sections : clamp(5rem, 12vh, 11rem)
  Texte aligné à gauche sur 5 colonnes, image sur 7 — jamais centré symétrique

ANIMATION
  Apparition au scroll : opacity + translateY(24px), 700ms,
      cubic-bezier(0.16, 1, 0.3, 1)
  Titres : apparition mot à mot, décalage 40ms
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
/amenagement                         Réorganisation d'espace
/contact                             Contact & devis
/mentions-legales

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
    sous-titre : « Pièces disponibles en showroom. Sur-mesure sur demande. »
    boutons : [ Voir les collections ] [ Découvrir le sur-mesure ]

  Indicateur de scroll discret en bas au centre.

SECTION 02 — PROPOSITION DE VALEUR (fond ivoire)
  Deux colonnes asymétriques, énormément d'espace vide.
    kicker : IDÉAL CONTEMPORAIN
    texte, Instrument Serif ~2.5rem :
      « Nous dessinons et réalisons du mobilier contemporain à Sidi Ghanem.
        Certaines pièces vous attendent au showroom.
        Les autres, nous les dessinons avec vous. »
  En dessous, séparés par des filets verticaux 1px :
    ATELIER    ORGANISE    DESIGN
  Aucun bouton dans cette section.

SECTION 03 — COLLECTIONS (fond sable)
  kicker : COLLECTIONS
  titre  : « Nos collections »
  Grille ASYMÉTRIQUE des 10 catégories, images portrait 4:5.
  Alterne les tailles : certaines cartes sur 2 colonnes, d'autres sur 1,
  décalages verticaux irréguliers.
  Sur chaque image : nom de la catégorie en UPPERCASE espacé, ivoire,
  ancré en bas à gauche. Au survol : zoom image 1.03 sur 1200ms.
  Bouton en fin de section : [ Voir tout le catalogue ]

SECTION 04 — SUR-MESURE ⭐ MOMENT 3D (fond ivoire, 300vh, sticky)
  LA SECTION LA PLUS IMPORTANTE DU SITE.

  Canvas react-three-fiber en position sticky, à droite, 60% de la largeur.
  Une table basse en 3D, éclairage doux type studio, fond transparent.

  À MESURE QUE L'UTILISATEUR SCROLLE, LE MODÈLE SE TRANSFORME :
    0–33%   : plateau rectangulaire, noyer, piètement en joues de bois massif
    33–66%  : plateau rond, noir mat, piètement cannelé
    66–100% : plateau rectangulaire, travertin, piètement en acier noir fin
  Les dimensions glissent en CONTINU entre les états (interpolation linéaire).
  L'essence et le piètement basculent au MILIEU de chaque segment.
  Rotation lente et continue sur Y pendant toute la traversée.

  À gauche, texte sticky :
    kicker : SUR-MESURE
    titre  : « Vous avez vu la pièce. Maintenant, changez-la. »
    texte  : « Dimensions, essence, finition, piètement.
               Chaque pièce du catalogue est un point de départ. »
    bouton : [ Configurer une pièce ]

  Sous le canvas, 3 labels indiquant l'étape en cours (l'actif en noir,
  les autres en greige) : ESSENCE · FINITION · PIÈTEMENT

  IMPORTANT : lazy loading du canvas (React.lazy + Suspense), image statique
  en fallback, canvas totalement désactivé si prefers-reduced-motion.

SECTION 05 — RÉALISATIONS (fond ivoire)
  kicker : RÉALISATIONS
  titre  : « Chez nos clients »
  sous-titre : « Des appartements, des villas, des riads.
                 Des pièces qui ont trouvé leur place. »
  3 projets en grille éditoriale asymétrique, grandes images,
  légendes minimales (type de lieu · ville · prestation).
  Bouton : [ Voir les réalisations ]

SECTION 06 — SAVOIR-FAIRE & MATIÈRE (fond NOIR MAT #1A1815, pleine largeur)
  LA SEULE SECTION SOMBRE DE LA PAGE. Rupture visuelle nette.
  Texte ivoire sur noir.

  kicker : MATIÈRE
  Bandeau horizontal de macro-plans de matière (ratio 21:9) : grain du
  travertin, fil du bois, pli du tissu bouclé, arête de l'acier noir.
  Défilement horizontal lent au scroll.

  Les matériaux nommés en Instrument Serif ~3rem, un par ligne, séparés
  par des filets 1px #2E2A26, avec une mention discrète à droite :
    Travertin     Pierre calcaire
    Acier noir    Structure, piètement
    Bois massif   Noyer, chêne
    Laque         Finition
    Métal         Détails

  En regard, en petit :
    « Nous ne parlons pas de qualité.
      Nous nommons ce que nous employons. »
  Bouton contour ivoire : [ L'atelier ]

SECTION 07 — AMÉNAGEMENT (fond sable, compacte)
  kicker : AMÉNAGEMENT
  titre  : « Parfois, il ne manque pas un meuble.
             Il manque une organisation. »
  Comparateur avant/après avec curseur glissant horizontal, pleine largeur,
  ratio 16:9. Texte court à côté.
  Bouton : [ En savoir plus ]

SECTION 08 — SHOWROOM & CONFIANCE (fond ivoire)
  Deux colonnes.
  GAUCHE : grande image du showroom, ratio 4:5.
  DROITE : les faits, sans emphase, filets de séparation :

    kicker : LE SHOWROOM

    437 Quartier Industriel Sidi-Ghanem
    Marrakech 40000

    Lundi – Vendredi     9h00 – 17h30
    Samedi               9h00 – 13h30
    Dimanche             Fermé

    WhatsApp  +212 605 405 930

  Boutons : [ Visiter le showroom ] [ Prendre rendez-vous ]

  NE METS AUCUN compteur d'abonnés, aucune note en étoiles, aucun logo
  partenaire, aucun chiffre du type « +100 clients satisfaits ».

SECTION 09 — CTA FINAL (fond ivoire, 76vh, centré verticalement)
  Une seule phrase, Instrument Serif, taille display, énormément d'espace :
    « Venez voir.
      Ou racontez-nous. »
  Deux boutons de poids visuel égal :
    [ Prendre rendez-vous au showroom ]  [ Parler de mon projet ]
  Ligne discrète en dessous, greige :
    « Ou écrivez-nous directement sur WhatsApp → »

FOOTER (fond noir mat)
  Logo IDÉAL CONTEMPORAIN
  Baseline : ATELIER · ORGANISE · DESIGN (uppercase, espacé 0.28em)
  Colonnes : navigation · collections · contact
  437 Quartier Industriel Sidi-Ghanem, Marrakech 40000
  Lundi – Vendredi 9h–17h30 · Samedi 9h–13h30
  WhatsApp +212 605 405 930
  Liens : Instagram · Mentions légales · Politique de confidentialité
  PAS de compteur d'abonnés Instagram.

════════════════════════════════════════════════════════════════
PAGE /sur-mesure — LE CONFIGURATEUR
════════════════════════════════════════════════════════════════
Le visiteur entre DIRECTEMENT dans l'outil, pas dans un texte d'intro.

Canvas react-three-fiber plein écran, fond ivoire, OrbitControls
(rotation libre, pan et zoom désactivés).

Panneau de contrôle à gauche, 340px, fond ivoire, filets 1px, sans ombre :

  TYPE DE PIÈCE  Table basse · Table à manger · Buffet · Console
  LONGUEUR       curseur, bornes selon le type, valeur affichée en cm
  LARGEUR        curseur
  HAUTEUR        curseur
  ESSENCE        pastilles rondes 34px :
                 Travertin #C9B79F · Noyer #6B4A32 · Chêne #C2A277 ·
                 Noir mat #22201C · Laque blanche #F1ECE3
  PIÈTEMENT      Acier noir fin · Cannelé · Bois massif · Central

Bornes dimensionnelles par type (min, max, défaut) en cm :
  Table basse    L 60-240-120   l 40-120-70   H 30-80-38
  Table à manger L 140-320-200  l 70-120-95   H 70-82-75
  Buffet         L 100-280-180  l 35-60-45    H 60-110-78
  Console        L 80-200-130   l 25-45-34    H 70-95-82

Le modèle 3D se met à jour EN TEMPS RÉEL à chaque changement.
Les piètements « cannelé » et « central » donnent un plateau ROND.

Récapitulatif de la configuration sous le panneau, en liste de définitions.

Boutons : [ Envoyer ma configuration ] [ Réinitialiser ]
  « Envoyer ma configuration » ouvre WhatsApp avec un message pré-rempli
  reprenant type, dimensions, essence et piètement.

Sous le configurateur :
  - Le processus en 4 étapes numérotées 01 à 04 :
    Rencontre · Dessin · Fabrication · Livraison & pose
  - Les 5 matériaux, section sombre
  - Un bloc « Ce qui est possible / Ce qui ne l'est pas », deux colonnes
  - CTA final

Le configurateur doit rester fluide sur mobile : réduis la qualité de rendu
et le nombre de polygones sous 768px. Fallback image statique sans WebGL.

════════════════════════════════════════════════════════════════
GÉOMÉTRIE 3D — construction procédurale
════════════════════════════════════════════════════════════════
N'utilise AUCUN modèle 3D externe. Construis toute la géométrie à la volée
avec les primitives Three.js. C'est ce qui permet de modifier n'importe
quelle dimension en temps réel.

PLATEAU
  rectangulaire → RoundedBoxGeometry(L, épaisseur, l, 3, 0.006)
                  épaisseur 0.028 (table basse) ou 0.032 (table à manger)
  rond          → CylinderGeometry(r, r, épaisseur, 56)

PIÈTEMENT « acier noir fin »
  4 cylindres verticaux r=0.011, placés à (L/2 - 0.075, l/2 - 0.065)
  + 3 traverses horizontales r=0.008 en partie basse (16% de la hauteur)

PIÈTEMENT « cannelé »
  1 cylindre central r = rayonPlateau × 0.44
  + N petits cylindres r = 0.115 × rayonFût répartis en cercle autour,
    N = max(14, rayonFût × 150) — c'est ce qui crée l'effet de cannelure

PIÈTEMENT « bois massif »
  2 joues pleines RoundedBoxGeometry(0.032, hauteur, l × 0.86, 2, 0.004)
  + 1 entretoise horizontale à 22% de la hauteur

PIÈTEMENT « central »
  1 fût CylinderGeometry(r×0.26, r×0.30, hauteur, 28)
  + 1 socle disque CylinderGeometry(r×0.62, r×0.66, 0.022, 32)

BUFFET et CONSOLE
  Corps RoundedBoxGeometry(L, hauteur - 0.11, l, 2, 0.006)
  + façades légèrement en relief (3 pour le buffet, 2 pour la console),
    épaisseur 0.012, avancées de 0.004 sur la face avant
  + socle métal : 2 rails horizontaux + 4 pieds cylindriques

ÉCHELLE : 1 cm = 0.01 unité de scène.

MATIÈRES — génère-les par canvas, pas de texture externe :
  Travertin : fond #CFBEA4, 60 veines elliptiques horizontales douces,
              1600 pores fins. roughness 0.82, metalness 0
  Noyer     : fond #6B4A32, 220 courbes de Bézier verticales #3E2717,
              roughness 0.58
  Chêne     : fond #C2A277, même technique, veines #8A6B45, roughness 0.66
  Noir mat  : #22201C + bruit aléatoire ±11 par pixel, roughness 0.88
  Laque     : #F1ECE3 + même bruit, MeshPhysicalMaterial,
              roughness 0.22, clearcoat 0.7
  Acier     : #1A1815, roughness 0.42, metalness 0.82

ÉCLAIRAGE — lumière naturelle latérale et rasante, ombres longues et douces :
  HemisphereLight(0xfff6e9, 0xd8ccb9, 0.66)
  DirectionalLight clé (0xfff2e0, 2.05) à (3.2, 3.4, 1.9), castShadow,
    shadow.mapSize 1024, shadow.radius 3, bias -0.0015
  DirectionalLight remplissage froid (0xdfe8f0, 0.42) à (-2.8, 1.5, -1.6)
  DirectionalLight contre-jour (0xffffff, 0.5) à (-0.8, 1.2, -3)
  Sol : PlaneGeometry(24,24) + ShadowMaterial(opacity 0.19), reçoit l'ombre
  Renderer : alpha true, ACESFilmicToneMapping, exposure 1.18,
             PCFSoftShadowMap, pixelRatio plafonné à 1.75

Caméra PerspectiveCamera(fov 34), recadrée sur le rayon de la pièce
à chaque changement de dimensions.

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
acier noir. À poser côte à côte, en cascade, ou séparément dans la pièce. »

Statuts produit — trois seulement :
  Disponible au showroom · Sur commande · Réalisable sur mesure

Un seul nom de produit réel existe : TALIA, une table basse en bois.
Marque tous les autres produits comme placeholders en commentaire.

════════════════════════════════════════════════════════════════
CONTRAINTES TECHNIQUES — non négociables
════════════════════════════════════════════════════════════════
- Mobile-first. Le trafic sera majoritairement mobile en 4G.
- 3D en lazy loading, JAMAIS dans le rendu initial. Fallback image statique.
- prefers-reduced-motion → toutes animations et 3D désactivées.
- Images : lazy loading, dimensions explicites.
- Sémantique HTML correcte, un seul h1 par page, alt sur toutes les images.
- Meta title et description uniques par page, Open Graph.
- JSON-LD FurnitureStore sur toutes les pages, avec l'adresse et les
  horaires ci-dessus.
- Focus visible : outline 1px travertin, offset 3px.
- Objectif Lighthouse mobile : performance ≥ 85, accessibilité ≥ 95.

════════════════════════════════════════════════════════════════
IMAGES DE PLACEHOLDER
════════════════════════════════════════════════════════════════
Utilise des images d'intérieurs contemporains dans la palette : crème,
sable, beige, béton ciré, bois clair, noir mat, travertin, végétal.
Lumière naturelle latérale et rasante, ombres longues et douces.
Contexte architectural visible (baies vitrées, plafonds hauts, enduits).

N'UTILISE JAMAIS : de packshot sur fond dégradé, d'image sans contexte
spatial, de lumière frontale dure, de palette froide ou nordique, de motif
oriental ou de zellige décoratif. La marque est contemporaine, à Marrakech,
pas l'inverse.

Commence par la homepage complète et le layout global (header, footer,
bulle WhatsApp, tokens, routing). Je te donnerai les pages intérieures
ensuite.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/584e4a0d-f500-4962-b232-b79ad601ce80).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
