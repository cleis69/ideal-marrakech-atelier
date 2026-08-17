# Itérations — page par page

À envoyer **dans l'ordre**, une itération à la fois, après validation de la précédente.
Le prompt maître (`00-prompt-maitre.md`) doit avoir été exécuté avant.

Ces prompts sont agnostiques : ils fonctionnent avec Claude Code, Cursor, Bolt, v0, Windsurf ou Lovable.

---

## ITÉRATION 1 — `/collections` (index catalogue)

```
Crée la page /collections.

kicker : COLLECTIONS
titre  : « Nos collections »
intro (1 phrase) : « Dix familles de pièces, en showroom ou sur commande. »

Grille ÉDITORIALE ASYMÉTRIQUE des 10 catégories — pas une grille régulière.
Alterne : certaines entrées sur 2 colonnes, d'autres sur 1, avec des décalages
verticaux irréguliers. Images portrait 4:5.

Sur chaque image, ancré en bas à gauche : nom de la catégorie en UPPERCASE,
letter-spacing 0.28em, ivoire. Au survol : zoom image 1.03 sur 1200ms.
Aucune bordure, aucune ombre, aucun fond de carte.

Les 10 catégories et leurs routes :
  Tables basses      /collections/tables-basses
  Tables à manger    /collections/tables-a-manger
  Canapés            /collections/canapes
  Fauteuils          /collections/fauteuils
  Chaises            /collections/chaises
  Lits               /collections/lits
  Buffets            /collections/buffets
  Consoles           /collections/consoles
  Décoration murale  /collections/decoration-murale
  Miroirs            /collections/miroirs

En fin de page, bloc sur fond sable :
  titre  : « Vous ne trouvez pas ? »
  texte  : « Chaque pièce existe aussi dans vos dimensions, votre essence,
             votre finition. »
  bouton : [ Découvrir le sur-mesure ]

Puis bloc CTA showroom reprenant l'adresse et les horaires.
```

---

## ITÉRATION 2 — `/collections/:categorie` (page catégorie)

```
Crée le gabarit de page catégorie, /collections/:categorie.

1. HERO ÉDITORIAL (60vh)
   Image large de la catégorie en contexte.
   kicker : COLLECTIONS
   titre  : nom de la catégorie (Instrument Serif, très grand)
   2 lignes de contexte matière sous le titre.

2. FILTRES (barre discrète, filets 1px, pas de dropdown lourd)
   Matériau      : Tous · Travertin · Bois massif · Acier noir · Laque · Métal
   Disponibilité : Tous · Disponible au showroom · Sur commande · Sur mesure
   Labels en UPPERCASE espacé. Le filtre actif est souligné d'un filet noir.

3. GRILLE PRODUITS
   3 colonnes desktop, 2 tablette, 1 mobile.
   Par produit : image 4:5, nom (Instrument Serif 1.5rem),
   matériau principal (label greige espacé), statut de disponibilité.
   AUCUN PRIX. Aucune carte avec bordure ou ombre — image + texte à même le fond.
   Au survol : zoom image 1.03.

4. BLOC SUR-MESURE contextualisé (fond sable)
   « Ces pièces existent aussi en dimensions sur mesure. »
   bouton : [ Configurer une pièce ]

5. CATÉGORIES LIÉES — 3 vignettes en bas de page.

Crée 6 à 8 produits de démonstration par catégorie, avec des noms de pièces
(un seul nom réel existe à ce jour : TALIA, une table basse en bois).
Marque clairement les produits de démonstration en commentaire dans le code :
ils seront remplacés par le catalogue réel du client.
```

---

## ITÉRATION 3 — `/collections/:categorie/:produit` (fiche produit)

```
Crée le gabarit de fiche produit.

1. VISUALISEUR 3D (haut de page, 70vh)
   Canvas react-three-fiber, modèle du produit, fond ivoire uni.
   Rotation libre à la souris/au doigt. Éclairage studio doux.
   Curseur personnalisé au survol avec le label « Faire pivoter ».
   LAZY LOADING obligatoire + image statique en fallback.

2. INFORMATIONS (colonne droite, sticky au scroll)
   kicker : nom de la catégorie
   titre  : nom du produit (Instrument Serif)
   description : 3 LIGNES MAXIMUM, factuelles. Aucun adjectif de vente.
   Exemple de ton attendu :
     « Trois plateaux en travertin, trois hauteurs, piètement en acier noir.
       À poser côte à côte, en cascade, ou séparément dans la pièce. »

   Blocs séparés par des filets 1px :
     Dimensions   L × P × H en cm
     Matériaux    liste
     Finitions    pastilles de couleur cliquables
     Disponibilité  Disponible au showroom / Sur commande / Réalisable sur mesure

3. SÉLECTEUR DE FINITIONS
   Pastilles rondes de matière. Le clic met à jour LE MODÈLE 3D en temps réel.
   Finitions : Travertin · Noyer · Noir mat · Laque blanche · Acier noir

4. BLOC « CETTE PIÈCE EN SUR-MESURE » (fond sable)
   « Dimensions particulières, autre essence, autre piètement ? »
   bouton : [ Configurer cette pièce ] → /sur-mesure préchargé sur ce modèle

5. LA PIÈCE EN SITUATION
   3 à 4 grandes images en contexte, grille asymétrique.

6. PIÈCES ASSOCIÉES — 3 produits.

7. BARRE CTA STICKY en bas sur mobile :
   [ Demander un devis ]  [ WhatsApp ]
```

---

## ITÉRATION 4 — `/sur-mesure` ⭐ page stratégique

```
Crée /sur-mesure. C'est la page la plus importante du site.

1. HERO CONFIGURATEUR (100vh) — le visiteur entre DIRECTEMENT dans l'outil,
   pas dans un texte d'introduction.

   CONFIGURATEUR 3D react-three-fiber, plein écran, fond ivoire.

   Panneau de contrôle discret à gauche (fond ivoire, filets 1px, sans ombre) :

     TYPE DE PIÈCE   Table basse · Table à manger · Buffet · Console
     LONGUEUR        curseur 60–240 cm, valeur affichée
     LARGEUR         curseur 40–120 cm
     HAUTEUR         curseur 30–80 cm
     ESSENCE         pastilles : Travertin · Noyer · Chêne · Noir mat · Laque blanche
     PIÈTEMENT       Acier noir fin · Cannelé · Bois massif · Central

   Le modèle 3D se met à jour EN TEMPS RÉEL à chaque changement.
   Maximum 4 paramètres visibles à la fois — ne surcharge pas.

   Boutons sous le panneau :
     [ Envoyer ma configuration ]  [ Réinitialiser ]

   Titre discret en haut : « Configurez votre pièce »

2. LE PROCESSUS — 4 étapes horizontales, numérotées 01 à 04,
   séparées par des filets verticaux 1px :
     01 Rencontre    02 Dessin    03 Fabrication    04 Livraison & pose
   Une ligne de description sous chaque étape.
   NOTE EN COMMENTAIRE DANS LE CODE : contenu à valider avec le client,
   le processus réel n'est pas encore documenté.

3. MATÉRIAUX ET FINITIONS
   Nuancier interactif. Au clic sur une matière : macro-plan en grand
   + nom + une ligne de description.
   Travertin · Acier noir · Bois massif · Laque · Métal

4. CE QUI EST POSSIBLE / CE QUI NE L'EST PAS
   Deux colonnes, honnêtes et factuelles. Bloc de confiance rare et efficace.
   PLACEHOLDER — à remplir avec le client.

5. RÉALISATIONS SUR MESURE — 3 cas, grille éditoriale.

6. CTA FINAL
   « Envoyez-nous votre configuration, ou racontez-nous simplement votre projet. »
   [ Envoyer ma configuration ]  [ Parler de mon projet ]

Le configurateur doit rester fluide sur mobile : réduis la qualité du rendu
et le nombre de polygones sous 768px. Fallback image statique si WebGL absent.
```

---

## ITÉRATION 5 — `/showroom`

```
Crée /showroom.

1. HERO — grande image du showroom, 70vh.
   kicker : LE SHOWROOM
   titre  : « 437 Quartier Industriel, Sidi Ghanem. »

2. VISITE VIRTUELLE 3D
   Visionneuse panoramique 360°, plein largeur, hauteur 80vh.
   Points d'intérêt cliquables qui ouvrent un panneau latéral avec la pièce
   et un lien vers sa fiche produit.
   LAZY LOADING + fallback galerie photo classique.
   Curseur personnalisé avec le label « Explorer ».

3. INFORMATIONS PRATIQUES — deux colonnes.

   GAUCHE, sans emphase, filets de séparation :
     ADRESSE
     437 Quartier Industriel Sidi-Ghanem
     Marrakech 4000, Maroc

     HORAIRES
     Lundi – Vendredi    9h00 – 17h30
     Samedi              9h00 – 13h30
     Dimanche            Fermé

     CONTACT
     WhatsApp  +212 605 405 930

   DROITE : carte, en niveaux de gris ou teintée dans la palette ivoire/greige.
   Aucune épingle colorée standard — un point noir mat discret.

4. CE QUE VOUS Y TROUVEREZ — 3 colonnes courtes :
   Les pièces du catalogue · Les matières et finitions · Le conseil sur-mesure

5. PRENDRE RENDEZ-VOUS
   Formulaire court : nom, téléphone/WhatsApp, date souhaitée, motif de la visite.
   bouton : [ Confirmer ma demande ]

6. COMMENT VENIR — repères pour rejoindre Sidi Ghanem, stationnement.
   PLACEHOLDER, à valider avec le client.
```

---

## ITÉRATION 6 — `/realisations` + `/realisations/:projet`

```
Crée /realisations et le gabarit de cas client.

PAGE INDEX /realisations
  kicker : RÉALISATIONS
  titre  : « Chez nos clients »

  Filtres discrets, mêmes styles que les pages catégorie :
    Type de lieu  : Tous · Appartement · Villa · Riad
    Prestation    : Toutes · Mobilier · Sur-mesure · Aménagement

  Grille éditoriale ASYMÉTRIQUE, grandes images, légendes minimales :
    type de lieu · ville · prestation

  ÉTAT VIDE — si moins de 3 projets, affiche à la place :
    « Nos premiers projets seront publiés ici. En attendant, le showroom
      est le meilleur endroit pour voir notre travail. »
    [ Prendre rendez-vous ]
  C'est important : mieux vaut cet état vide honnête qu'une galerie remplie
  de rendus présentés comme des projets clients.

GABARIT /realisations/:projet
  1. Hero plein écran — image principale du projet
  2. Contexte : type de lieu, ville, demande initiale — 3 lignes
  3. Ce que nous avons fait — texte court
  4. Pièces réalisées → liens vers les fiches produit du catalogue
  5. Galerie — 6 à 10 images, grille asymétrique, lightbox au clic
  6. Matériaux employés — labels espacés
  7. Témoignage client — verbatim court, prénom, type de projet.
     Aucune étoile, aucune note.
  8. Navigation : projet précédent / projet suivant
```

---

## ITÉRATION 7 — `/atelier` et `/amenagement`

```
Crée /atelier et /amenagement.

/atelier
  1. Hero — photo réelle de l'atelier ou du showroom, 70vh.
     kicker : L'ATELIER
     titre  : « Atelier · Organise · Design »
  2. L'histoire — texte éditorial, colonne étroite, beaucoup de blanc.
     PLACEHOLDER — contenu à obtenir en entretien client.
  3. Le savoir-faire — ce que nous faisons nous-mêmes. PLACEHOLDER.
  4. Les matériaux — macro-plans en grille, sur fond noir mat.
     Travertin · Acier noir · Bois massif · Laque · Métal
  5. L'équipe — portraits en noir et blanc ou dans la palette, prénoms et rôles.
     PLACEHOLDER.
  6. Le showroom — bloc de renvoi vers /showroom.
  7. CTA : [ Nous rencontrer ]

  Marque clairement chaque PLACEHOLDER en commentaire dans le code.

/amenagement
  1. Hero
     kicker : AMÉNAGEMENT
     titre  : « Parfois, il ne manque pas un meuble. Il manque une organisation. »
  2. Le problème → la méthode → le résultat — 3 blocs. PLACEHOLDER.
  3. Déroulé d'une intervention — étapes numérotées. PLACEHOLDER.
  4. COMPARATEUR AVANT/APRÈS — curseur glissant horizontal, 16:9, plein largeur.
     Prévois-en 2.
  5. Ce que comprend la prestation. PLACEHOLDER.
  6. CTA : [ Demander une visite ]

  ⚠️ Cette page repose entièrement sur du contenu qui n'existe pas encore.
  Construis la structure, marque tous les placeholders, et laisse le contenu
  vide plutôt que de l'inventer.
```

---

## ITÉRATION 8 — `/contact` et pages légales

```
Crée /contact, /mentions-legales et /politique-confidentialite.

/contact
  1. Titre : « Parlons de votre projet »
  2. FORMULAIRE QUALIFIÉ — champs à filets 1px, sans fond, sans ombre :
     - Nom
     - Téléphone / WhatsApp
     - E-mail
     - Type de demande (boutons radio, pas de menu déroulant) :
         Une pièce du catalogue · Un projet sur mesure ·
         Un espace à réorganiser · Autre
     - Votre projet (zone de texte)
         placeholder : « Une pièce, une pièce entière, un espace à repenser… »
     - Budget indicatif (facultatif)
     - Pièces jointes (photos, plans)
     bouton : [ Envoyer ma demande ]
     Message de confirmation : « Message reçu. Nous vous répondons rapidement. »
     N'ÉCRIS PAS « sous 24h » ni « sous 48h » — aucun délai n'est validé.

  3. CONTACT DIRECT — trois blocs séparés par des filets :
     WhatsApp  +212 605 405 930
     Adresse   437 Quartier Industriel Sidi-Ghanem, Marrakech 4000
     Horaires  Lun–Ven 9h–17h30 · Sam 9h–13h30
     (E-mail et téléphone fixe : PLACEHOLDER, à obtenir du client.)

  4. Carte en niveaux de gris.

/mentions-legales et /politique-confidentialite
  Gabarits structurés, typographie sobre, colonne étroite.
  Tous les champs juridiques en PLACEHOLDER explicite :
  raison sociale, forme juridique, ICE, RC, siège social,
  directeur de publication, hébergeur.
  N'INVENTE AUCUNE information juridique.
```

---

## ITÉRATION 9 — Finitions

```
Passe de finition sur l'ensemble du site.

1. CURSEUR PERSONNALISÉ (desktop uniquement, désactivé au tactile)
   Point noir mat de 6px. S'agrandit en cercle de 40px avec un label
   au survol des éléments interactifs : « Voir » · « Faire pivoter » ·
   « Configurer » · « Explorer ».

2. TRANSITIONS DE PAGE — fondu 400ms, sans effet de balayage.

3. APPARITION AU SCROLL — vérifie que toutes les sections utilisent
   opacity + translateY(24px), 700ms, cubic-bezier(0.16, 1, 0.3, 1).
   Les titres apparaissent mot à mot, décalage 40ms.

4. PAGE 404
   « Cette page n'existe pas encore. Comme certaines de nos pièces. »
   [ Retour à l'accueil ]  [ Voir les collections ]

5. GRAIN — overlay de grain fin (opacité 0.03) sur toutes les images,
   pour unifier des sources visuelles hétérogènes.

6. SEO
   - Balises meta title et description uniques par page
   - Open Graph + Twitter Card
   - JSON-LD LocalBusiness/FurnitureStore global (adresse, horaires, téléphone)
   - JSON-LD Product sur les fiches, ItemList sur les catégories,
     BreadcrumbList partout
   - N'AJOUTE PAS de schéma Review ou AggregateRating — aucun avis réel n'existe
   - sitemap.xml et robots.txt

7. ACCESSIBILITÉ
   - Vérifie tous les contrastes (greige #8A8177 sur ivoire #FAF7F2 :
     à contrôler, remonter la valeur si le ratio est insuffisant)
   - Focus visible partout : outline 1px travertin, offset 3px
   - Navigation complète au clavier, y compris dans le configurateur
   - Attributs alt sur toutes les images
   - prefers-reduced-motion : vérifie que TOUTE la 3D est désactivée
     et remplacée par du contenu statique équivalent

8. PERFORMANCE
   - Vérifie qu'aucun canvas 3D n'est dans le rendu initial
   - Images en lazy loading avec dimensions explicites
   - Découpage du bundle par route
   - Cible Lighthouse mobile : performance ≥ 85, accessibilité ≥ 95
```

---

## Après les itérations

**Ne pas mettre en ligne** avant d'avoir traité `docs/07-contenus-a-recuperer.md`.

Le site sera structurellement complet, mais toutes les images seront des placeholders,
et les pages Atelier, Aménagement et Réalisations resteront vides de contenu réel.

Rappel des trois conditions de lancement :

1. Photos réelles — showroom, atelier, matières, équipe
2. Minimum 3 réalisations clientes documentées et autorisées
3. Entretien de cadrage client pour écrire l'Atelier, le Sur-mesure et l'Aménagement
