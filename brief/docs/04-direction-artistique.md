# 04 — Direction artistique web

Toute la DA découle de ce qui a été observé sur Instagram. Rien n'est importé d'ailleurs.

---

## Le parti pris

**Galerie, pas boutique.**

L'Instagram actuel oscille entre deux registres : des intérieurs architecturaux méditerranéens et des packshots de marketplace. Le site tranche pour le premier, sans exception.

Traduction concrète :
- L'espace vide n'est pas de la place perdue, c'est le principal signal de niveau de gamme.
- Une image plein écran vaut mieux que trois vignettes.
- Le texte est rare, court, et posé — jamais empilé.
- Aucun badge promotionnel, aucun compte à rebours, aucune étoile, aucun « -20 % ».

---

## Couleurs

Palette relevée directement sur les visuels du compte. C'est le point fort de la marque : elle est déjà cohérente, il suffit de la systématiser.

### Principales

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Fond principal | **Ivoire** | `#FAF7F2` | Fond de toutes les pages claires |
| Fond secondaire | **Sable** | `#F2EDE4` | Alternance de sections, cartes |
| Surface | **Lin** | `#E8DFD2` | Séparateurs, états au survol, champs |
| Encre | **Noir mat** | `#1A1815` | Texte, sections sombres, acier noir |
| Texte secondaire | **Greige** | `#8A8177` | Légendes, labels, métadonnées |

### Accents

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Matière signature | **Travertin** | `#C9B79F` | Filets, soulignés, éléments 3D |
| Chaleur | **Noyer** | `#6B4A32` | Ponctuel, jamais en aplat large |
| Accent chaud | **Terracotta** | `#B5643F` | Très ponctuel — un seul usage par page maximum |

### Interdits

- **Vert anis** (`#A8B830`) — vu une seule fois, sur un canapé. Ce n'est pas une couleur de marque. Utilisable uniquement comme couleur produit sur la fiche concernée.
- **Aucun dégradé de fond.** Les fonds en dégradé des packshots Instagram sont exactement le registre à quitter.
- **Aucune couleur pure saturée.** Pas de rouge alerte, pas de vert validation criard. Les états système utilisent des versions désaturées.

### Règle de composition

**70 % ivoire/sable · 20 % image · 8 % noir · 2 % travertin/terracotta.**

Une section sombre par page maximum — elle sert de respiration inversée et de mise en valeur de la matière (Section 06 de la homepage).

---

## Typographie

Le logo donne la direction : un serif à empattements fins, un script cursif, et des capitales très espacées. Le système web reprend deux de ces trois registres. Le script reste réservé au logo.

### Titres — serif éditorial

**Recommandé (payant)** : Canela · GT Sectra · Editorial New
**Alternative libre (Google Fonts, recommandée pour la V1)** : **Instrument Serif**

Contraste modéré, empattements fins, allure éditoriale plutôt que luxe classique. Utilisé en très grandes tailles, interlignage serré (0.95–1.05), sans graisse excessive.

### Corps — sans-serif neutre

**Recommandé (payant)** : Suisse Int'l · ABC Monument Grotesk
**Alternative libre (recommandée pour la V1)** : **Inter**

Neutre, très lisible, sans personnalité concurrente au serif.

### Labels et kickers — la signature typographique de la marque

Reprise directe de la baseline du logo :

```css
text-transform: uppercase;
letter-spacing: 0.28em;
font-size: 0.6875rem;
font-weight: 500;
```

Ce traitement est **l'élément de reconnaissance le plus fort disponible**. Il apparaît sur chaque kicker de section, chaque label de catégorie, chaque étiquette de matériau. C'est ce qui fera qu'une page de ce site est reconnaissable comme celle d'Idéal Contemporain.

### Échelle

| Niveau | Desktop | Mobile | Usage |
|---|---|---|---|
| Display | `clamp(4rem, 9vw, 8.5rem)` | 3rem | Hero, CTA final |
| H1 | `clamp(2.75rem, 5.5vw, 4.5rem)` | 2.25rem | Titres de page |
| H2 | `clamp(2rem, 3.5vw, 3rem)` | 1.75rem | Titres de section |
| H3 | `1.5rem` | 1.25rem | Sous-sections, noms de produits |
| Corps | `1.0625rem` / 1.65 | 1rem | Texte courant |
| Petit | `0.875rem` | 0.8125rem | Légendes |
| Label | `0.6875rem` espacé 0.28em | idem | Kickers, labels |

---

## Images

### Style photographique à tenir

Lumière naturelle latérale et rasante · ombres portées longues et douces · températures chaudes · profondeur de champ réelle · contexte architectural visible · matière lisible.

Palette dans l'image : crème, sable, béton, bois, noir mat, végétal.

### Bannis

Fonds en dégradé plat · packshots flottants sans échelle · lumière frontale · retouche excessive · images sans contexte spatial · toute image dont on ne peut pas dire dans quelle pièce elle a été prise.

### Formats

| Usage | Ratio |
|---|---|
| Hero | 16:9 ou plein écran |
| Catégorie | 4:5 portrait |
| Produit en situation | 3:2 |
| Produit isolé | 1:1, fond ivoire uni — **jamais dégradé** |
| Réalisation | mixte, grille éditoriale asymétrique |
| Matière macro | 21:9 panoramique |

### Traitement

Grain fin (2–4 %) appliqué globalement pour unifier des sources hétérogènes — utile compte tenu du mélange rendus/photos. Vignettage très léger. Aucune bordure, aucune ombre portée sur les images. Les coins sont légèrement arrondis (2 px) ou droits, jamais plus.

---

## Vidéo

**Registre** : contemplatif, lent, silencieux par défaut.

- Mouvements de caméra lents et continus — travelling latéral, glissement vertical. Aucun plan à main levée nerveux.
- Ralenti sur la matière : le grain, le fil du bois, le pli du tissu.
- Aucune musique en lecture automatique. Aucune voix off.
- Aucun texte incrusté, aucune transition marquée.
- Format hero : boucle 8–12 s, sans coupe apparente.
- Format matière : 15–20 s, une seule matière par plan.
- Format atelier : 30–45 s, le geste, la main, l'outil.

**Poids** : hero ≤ 3 Mo en WebM/AV1, image fixe de repli obligatoire, désactivation en `prefers-reduced-motion`.

---

## Interface

### Principes

- **Bords droits ou quasi droits.** Rayon 0 à 2 px. Le mobilier de la marque est sculptural et net — l'interface l'est aussi.
- **Aucune ombre portée.** La séparation se fait par le fond et par le filet, jamais par l'élévation.
- **Filets de 1 px** en `#E8DFD2` pour toute séparation.
- **Boutons** : rectangulaires, remplissage plein ou contour 1 px, texte en capitales espacées 0.18em. Transition de couleur sur 400 ms, jamais de changement d'échelle.
- **Grille** : 12 colonnes, gouttière 24 px, largeur maximale 1440 px, marges généreuses (≥ 8 % de la largeur du viewport sur desktop).
- **Rythme vertical** : sections espacées de `clamp(6rem, 12vh, 12rem)`. Le blanc est un composant.

### Curseur

Curseur personnalisé discret : un point de 6 px en noir mat, qui s'agrandit en cercle de 40 px avec un label (`Voir` · `Faire pivoter` · `Configurer`) au survol des éléments interactifs. Désactivé sur tactile.

### États

Survol : opacité 0.7 ou léger décalage vertical de 2 px. Jamais de rebond, jamais de changement de couleur brutal.
Focus : contour 1 px travertin, décalé de 3 px. Accessible, discret.

---

## Animation

**Niveau : expérientiel — avec discipline.**

Le mot « expérientiel » ne signifie pas « animé partout ». Il signifie **un petit nombre de moments forts, et un calme absolu entre eux**. Une page qui bouge en permanence n'est pas premium, elle est fatigante.

### Les 4 moments 3D du site

| # | Où | Quoi |
|---|---|---|
| 1 | Homepage Section 04 | Une pièce se transforme au scroll — dimensions, essence, piètement. **Le moment signature.** |
| 2 | `/sur-mesure` | Configurateur 3D complet, rendu temps réel |
| 3 | Fiche produit | Visualiseur 3D en rotation libre + sélecteur de finitions |
| 4 | `/showroom` | Visite virtuelle du showroom |

### Partout ailleurs

- Apparition au scroll : opacité + translation verticale de 24 px, 700 ms, `cubic-bezier(0.16, 1, 0.3, 1)`
- Parallaxe d'image : très léger, facteur 0.15 maximum
- Titres : apparition par mots, décalage de 40 ms entre chaque
- Transitions de page : fondu de 400 ms, sans effet de balayage
- **Aucun élément flottant animé en boucle**, sauf le hero

### Performance et accessibilité — non négociable

- Chargement 3D différé, jamais dans le chemin critique
- Image de repli statique systématique
- `prefers-reduced-motion: reduce` → toutes les animations et la 3D sont désactivées, contenu statique équivalent
- Objectif Lighthouse : Performance ≥ 85 mobile, Accessibilité ≥ 95
- **Contrainte marché** : une part significative du trafic sera sur mobile en 4G. Un site 3D lourd est un site invisible. La 3D se charge à la demande, jamais au premier rendu.

---

## Mise en page

| Question | Réponse |
|---|---|
| Beaucoup d'espace blanc ? | **Oui, énormément.** C'est le premier levier de perception premium. |
| Grilles éditoriales ? | **Oui.** Asymétriques, décalées, jamais de grille produit régulière type e-commerce. |
| Pleine largeur ? | **Oui**, pour les héros, la section matière et les réalisations. |
| Asymétrie ? | **Oui.** Texte aligné à gauche sur 5 colonnes, image sur 7 — jamais centré symétrique. |
| Grandes typographies ? | **Oui.** Le display en 8 rem est un élément graphique à part entière. |
| Cartes ? | **Non.** Pas de carte avec bord, ombre et fond. Image + label, à même le fond. |
| Galerie immersive ? | **Oui**, sur `/realisations` et `/showroom`. |

---

## Références visuelles

Cinq directions à explorer. **Aucune n'est à copier** — chacune apporte un principe.

### 1. Éditeur de mobilier européen contemporain
*Type : Vitra, Hem, Ferm Living, &Tradition*

**Pourquoi** : c'est le niveau de rigueur catalogue à atteindre — nomenclature produit, fiches techniques, photographie en contexte.

**À reprendre** : chaque pièce porte un nom · dimensions et matériaux affichés en clair · alternance image en situation / image isolée · typographie sobre.

**À éviter** : la froideur nordique. Idéal Contemporain est méditerranéenne — la chaleur, la lumière et la matière doivent rester dominantes.

### 2. Site d'architecte ou de studio d'intérieur
*Type : portfolios d'agences d'architecture d'intérieur haut de gamme*

**Pourquoi** : c'est le modèle de la page Réalisations, et le registre qui légitime le sur-mesure.

**À reprendre** : projet raconté comme un cas · grandes images plein écran · légendes minimales et factuelles · navigation projet suivant / précédent.

**À éviter** : le site 100 % portfolio sans catalogue. Idéal Contemporain vend aussi des pièces disponibles — il faut les deux régimes.

### 3. Configurateur produit 3D
*Type : configurateurs automobiles, configurateurs de cuisine ou de mobilier modulaire*

**Pourquoi** : c'est la référence technique du cœur du site.

**À reprendre** : rendu temps réel · sélecteur de matière visuel plutôt que textuel · dimensions ajustables avec retour immédiat · export ou partage de la configuration.

**À éviter** : la surcharge d'options. Trois à quatre paramètres maximum par pièce. Un configurateur à quinze curseurs ne convertit personne.

### 4. Maison de mode ou de joaillerie — page produit
*Type : maisons de luxe, pages produit éditoriales*

**Pourquoi** : c'est la référence de traitement de la matière et de la retenue typographique.

**À reprendre** : macro-plans de matière · noir profond en section unique · lettrage très espacé · silence visuel autour du produit.

**À éviter** : le luxe froid et distant. Idéal Contemporain doit rester accessible — un showroom où l'on entre, pas une boutique intimidante.

### 5. Marque d'artisanat contemporain ancrée dans un lieu
*Type : ateliers, céramistes, ébénistes, maisons de production locales*

**Pourquoi** : c'est le modèle du récit « Sidi Ghanem, Marrakech » — un lieu qui devient un argument.

**À reprendre** : le lieu comme personnage · le geste filmé · les visages · la matière brute avant le produit fini.

**À éviter** : le folklore. Aucun cliché marocain décoratif — pas de zellige d'illustration, pas de motif oriental, pas de palette safran/turquoise. La marque est **contemporaine**, à Marrakech. Pas l'inverse.

---

## L'écueil à ne pas commettre

Le risque principal de ce projet est de faire un beau site 3D **vide**.

Une expérience premium sur une marque sans preuve produit une dissonance : le visiteur est impressionné, puis cherche des réalisations, n'en trouve pas, et repart avec l'impression d'une coquille.

**La 3D doit servir la preuve, pas la remplacer.** Le configurateur démontre une capacité de fabrication ; il ne remplace pas trois projets clients documentés.
