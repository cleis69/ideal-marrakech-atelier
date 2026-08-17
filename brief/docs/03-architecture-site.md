# 03 — Architecture du site

---

## Principe directeur

L'arborescence est construite pour résoudre **le problème central** identifié à l'audit : une marque qui affirme sans démontrer.

Chaque page a donc deux fonctions — une fonction commerciale et une fonction de preuve. Une page qui ne fait que vendre est retirée.

**Trois pages sont volontairement absentes de la V1** : Blog/Journal, Espace pro/Contract, Boutique en ligne. Toutes trois exigent du contenu ou des décisions que le client n'a pas encore fournis. Les créer vides ferait plus de mal que de bien.

---

## Arborescence

```
/                                    Accueil
│
├── /collections                     Catalogue — index des 10 catégories
│   ├── /collections/tables-basses
│   ├── /collections/tables-a-manger
│   ├── /collections/canapes
│   ├── /collections/fauteuils
│   ├── /collections/chaises
│   ├── /collections/lits
│   ├── /collections/buffets
│   ├── /collections/consoles
│   ├── /collections/decoration-murale
│   ├── /collections/miroirs
│   └── /collections/[categorie]/[produit]      Fiche produit + visualisation 3D
│
├── /sur-mesure                      Le sur-mesure + CONFIGURATEUR 3D
│
├── /amenagement                     Réorganisation & optimisation d'espace
│
├── /realisations                    Portfolio
│   └── /realisations/[projet]       Cas client
│
├── /atelier                         Qui nous sommes · savoir-faire · matériaux
│
├── /showroom                        Le lieu · visite virtuelle 3D · venir nous voir
│
├── /contact                         Contact & demande de devis
│
├── /mentions-legales
└── /politique-confidentialite
```

**Navigation principale (5 entrées maximum) :**
`Collections` · `Sur-mesure` · `Réalisations` · `Atelier` · `Showroom`
CTA persistant en tête : **Prendre rendez-vous**
Bulle WhatsApp flottante, persistante sur tout le site.

`Aménagement` est accessible depuis le menu Collections déroulant et depuis la homepage, pas en navigation principale de niveau 1 — tant que le contenu n'existe pas, il ne mérite pas une place au premier niveau.

---

## Détail par page

### `/` — Accueil

**Objectif** : faire comprendre en dix secondes *qui*, *où*, *quoi*, et donner deux portes d'entrée — le catalogue et le sur-mesure.

**Sections** : voir la section « Homepage » ci-dessous.

**CTA** : Prendre rendez-vous au showroom (principal) · Voir les collections (secondaire) · WhatsApp (flottant)

**Images nécessaires** : 1 hero pleine page (post 01 — salon travertin) · 10 visuels de catégorie · 3 visuels de réalisation · 1 visuel atelier/matière · 1 visuel showroom
**Vidéos nécessaires** : 1 boucle hero 8–12 s · 1 séquence matière 15 s

---

### `/collections` — Index catalogue

**Objectif** : donner une vue d'ensemble immédiate de l'offre et diriger vers la bonne catégorie.

**Contenu** : grille éditoriale des 10 catégories. Pas de filtre à ce niveau — dix entrées se lisent, ne se filtrent pas.

**Sections**
1. Titre + une phrase de contexte
2. Grille 10 catégories, format asymétrique (2-1-2-1... pour éviter l'effet marketplace)
3. Bloc « Vous ne trouvez pas ? » → renvoi sur-mesure
4. CTA showroom

**CTA** : Découvrir le sur-mesure · Prendre rendez-vous
**Images** : 10 visuels de catégorie, un par entrée, format portrait 4:5

---

### `/collections/[categorie]` — Page catégorie

**Objectif** : présenter les pièces d'une famille, permettre la comparaison, amener à la fiche produit.

**Sections**
1. Hero éditorial de catégorie — visuel large + titre + 2 lignes de contexte matière
2. Grille produits (nom, visuel, matériau principal, disponibilité)
3. Filtres légers : matériau, disponibilité (En showroom / Sur commande / Sur mesure)
4. Bloc sur-mesure contextualisé — « Ces pièces existent aussi en dimensions sur mesure »
5. Catégories liées

**CTA** : Voir la pièce · Demander un devis
**Images** : 1 hero + 1 visuel par produit
**⚠️ Prérequis** : la liste réelle des produits par catégorie n'existe pas. **À demander au client.**

---

### `/collections/[categorie]/[produit]` — Fiche produit

**Objectif** : donner tout ce qu'il faut pour décider — et démontrer le sur-mesure au passage.

**Sections**
1. **Visualiseur 3D** — la pièce en rotation libre, fond neutre, zoom matière. *C'est l'élément différenciant du site.*
2. Nom, description courte (3 lignes maximum, factuelle)
3. Dimensions · matériaux · finitions disponibles
4. Statut : En showroom · Sur commande · Sur mesure
5. **Sélecteur de finitions en direct sur le modèle 3D** — changer l'essence ou la couleur met le rendu à jour
6. Bloc « Cette pièce en sur-mesure » → lien configurateur préchargé sur ce modèle
7. La pièce en situation — 2 à 4 visuels d'ambiance
8. Pièces associées
9. CTA sticky : Demander un devis · WhatsApp

**CTA principal** : Demander un devis
**Images** : 1 modèle 3D + 3 visuels d'ambiance par produit
**⚠️ Prérequis** : dimensions, matériaux, finitions, statut de disponibilité — **aucun n'est disponible aujourd'hui.**

---

### `/sur-mesure` — Le sur-mesure ⭐ page stratégique

**Objectif** : transformer le service à plus forte marge, aujourd'hui invisible, en expérience démontrée.

**Sections**
1. **Hero configurateur** — le visiteur entre directement dans l'outil, pas dans un texte
2. **LE CONFIGURATEUR 3D** — choisir un type de pièce, ajuster dimensions, essence, finition, piètement · rendu temps réel · vue en situation · export de la configuration
3. Le processus en 4 temps — Rencontre → Dessin → Fabrication → Livraison & pose
4. Matériaux et finitions — nuancier interactif, macro de matière
5. Ce qui est possible / ce qui ne l'est pas — bloc d'honnêteté rare et très rassurant
6. Réalisations sur mesure — 3 cas
7. Délais et déroulé
8. CTA — Envoyer ma configuration · Parler de mon projet

**CTA principal** : Parler de mon projet
**Images** : 1 modèle 3D paramétrique par typologie · nuancier de matières en macro · 4 visuels de processus
**Vidéo** : 1 séquence de fabrication 20–30 s — **n'existe pas, à tourner**
**⚠️ Prérequis** : le processus, les délais, les limites du sur-mesure sont **non observables**. Atelier de contenu obligatoire avec le client.

---

### `/amenagement` — Réorganisation & optimisation d'espace

**Objectif** : donner une existence à un service qui n'en a aucune.

**Sections**
1. Hero — définition simple du service
2. Le problème → la méthode → le résultat
3. Déroulé d'une intervention
4. **Avant / après** — comparateur au curseur, sur au moins 2 cas
5. Ce que comprend la prestation
6. CTA — Demander une visite

**CTA** : Demander une visite
**Images** : avant/après par projet — **n'existent pas**
**⚠️ Prérequis bloquant** : **aucune matière source.** Cette page ne peut pas être maquettée avant un entretien dédié avec le client. Si aucun cas réel n'existe, **la page est reportée en phase 2** — mieux vaut trois services démontrés que quatre dont un vide.

---

### `/realisations` — Portfolio

**Objectif** : la page qui fabrique la confiance. Aujourd'hui la plus vide, demain la plus importante.

**Sections**
1. Hero — grille immersive plein écran
2. Filtres : par type de lieu (Appartement · Villa · Riad) et par prestation (Mobilier · Sur-mesure · Aménagement)
3. Grille de projets, format éditorial asymétrique
4. CTA final

**CTA** : Voir le projet · Parler de mon projet
**⚠️ Prérequis bloquant** : **zéro réalisation disponible.** La story à la une « Chez vous » est la seule piste. **À réclamer immédiatement.**

**Règle de lancement : minimum 3 projets. En dessous, la page ne sort pas.** Une page portfolio avec un seul projet est plus destructrice qu'une absence de page portfolio.

---

### `/realisations/[projet]` — Cas client

**Sections** : Contexte (type de lieu, ville, demande) · Ce que nous avons fait · Pièces réalisées → liens catalogue · Galerie · Matériaux employés · Témoignage client · Projet suivant

**Images** : 6 à 10 par projet, dont au moins une vue d'ensemble
**⚠️ Prérequis** : accord client pour publication, photos, verbatim.

---

### `/atelier` — Qui nous sommes

**Objectif** : répondre à la question que tout le site laisse en suspens — *fabricant ou revendeur ?*

**Sections**
1. Hero — l'atelier ou le showroom en photo réelle
2. L'histoire — depuis quand, par qui, pourquoi
3. Le savoir-faire — ce que nous faisons nous-mêmes
4. Les matériaux — travertin, acier noir, bois massif, laqué, métal
5. L'équipe — visages et noms
6. Le showroom → lien
7. CTA — Nous rencontrer

**Images** : atelier, mains, machines, matière brute, équipe — **aucune n'existe**
**Vidéo** : 1 film d'atelier 30–45 s
**⚠️ Prérequis bloquant** : histoire, date de création, taille de l'équipe, périmètre de fabrication — **tout est non observable.**

---

### `/showroom` — Le lieu

**Objectif** : exploiter le seul actif de crédibilité réel de la marque, et convertir en visite.

**Sections**
1. **Visite virtuelle 3D du showroom** — parcours libre, points d'intérêt cliquables renvoyant aux fiches produits
2. Adresse, horaires, plan
3. Ce que vous y trouverez
4. Prise de rendez-vous
5. Comment venir — repères Sidi Ghanem, stationnement

**CTA principal** : Prendre rendez-vous
**Images** : 8 à 12 photos réelles du showroom · scan 3D ou photos 360° pour la visite virtuelle
**⚠️ Prérequis bloquant** : **aucune photo du showroom n'existe.**

**Données confirmées et utilisables immédiatement** :
`437 Quartier Industriel Sidi-Ghanem, Marrakech 4000` · `Lun–Ven 9h–17h30, Sam 9h–13h30` · `WhatsApp +212 605 405 930`

---

### `/contact` — Contact & devis

**Sections**
1. Formulaire qualifié : nom, contact, **type de demande** (Pièce du catalogue · Projet sur mesure · Aménagement d'espace · Autre), description, budget indicatif (facultatif), fichiers joints
2. Contact direct — WhatsApp, téléphone, e-mail
3. Adresse, horaires, plan
4. Délai de réponse annoncé

**CTA** : Envoyer ma demande · WhatsApp
**⚠️ À demander** : e-mail professionnel, ligne fixe, délai de réponse à annoncer.

---

## Homepage — structure section par section

Neuf sections. Chacune répond à une question précise du visiteur, dans l'ordre où elle se pose.

---

### SECTION 01 — HERO

**Question du visiteur** : *Où suis-je tombé ?*

**Ce qu'on voit**
Plein écran. Vidéo en boucle silencieuse ou photo fixe du salon travertin (post 01) — lumière rasante, baie vitrée, olivier, béton ciré, trio de tables basses. Léger mouvement de caméra lent en parallaxe. Grain fin. Aucun texte pendant les 1,5 premières secondes : l'image respire d'abord.

Puis apparition typographique par lettres, sans effet tape-à-l'œil.

**Message**
> **Le mobilier contemporain,
> fait à Marrakech.**
>
> Pièces disponibles en showroom · Sur-mesure sur demande
> Sidi Ghanem, Marrakech

**CTA** : `Voir les collections` (plein) · `Découvrir le sur-mesure` (contour)
**Micro-indice de scroll** en bas, discret.

---

### SECTION 02 — PROPOSITION DE VALEUR

**Question** : *Je fais quoi ici ?*

Bloc éditorial calme, beaucoup de blanc. Typographie large, texte court, aligné à gauche, sur deux colonnes asymétriques.

> Nous dessinons et réalisons du mobilier contemporain à Sidi Ghanem.
> Certaines pièces vous attendent au showroom. Les autres n'existent pas encore — nous les dessinons avec vous.

Trois marqueurs en ligne, en capitales espacées :
`ATELIER` — `ORGANISE` — `DESIGN`

**CTA** : aucun. Cette section respire, elle ne convertit pas.

---

### SECTION 03 — COLLECTIONS

**Question** : *Qu'est-ce que vous vendez ?*

Grille horizontale à défilement, ou grille asymétrique. Les 10 catégories, visuel portrait 4:5, nom en capitales espacées en surimpression basse. Au survol : léger zoom de l'image, révélation du nombre de pièces.

`Tables basses` · `Tables à manger` · `Canapés` · `Fauteuils` · `Chaises` · `Lits` · `Buffets` · `Consoles` · `Décoration murale` · `Miroirs`

**Titre** : *Nos collections*
**CTA** : `Voir tout le catalogue`

---

### SECTION 04 — SUR-MESURE ⭐ le moment 3D

**Question** : *Vous fabriquez vraiment ?*

**La section la plus importante de la page.**

Une pièce en 3D occupe le centre de l'écran, en rotation lente. À mesure que le visiteur scrolle, le modèle **se transforme** : les dimensions changent, l'essence passe du noyer au noir mat, le piètement se modifie. Le sur-mesure n'est pas raconté, il est **montré en train de se faire**.

En regard, un texte court synchronisé sur le scroll :

> Vous avez vu la pièce.
> Maintenant, changez-la.
>
> Dimensions, essence, finition, piètement.
> Chaque pièce du catalogue est un point de départ.

**CTA** : `Configurer une pièce` → `/sur-mesure`

*Repli technique si la 3D n'est pas prête au lancement : séquence d'images en scroll-through (30 à 60 images) — même effet perçu, coût de production bien inférieur.*

---

### SECTION 05 — RÉALISATIONS

**Question** : *Qui vous a fait confiance ?*

Trois projets en grille asymétrique éditoriale. Grandes images, légendes minimales : type de lieu, ville, prestation.

**Titre** : *Chez nos clients* — reprise directe de la story à la une « Chez vous », qui est le bon mot.

**CTA** : `Voir toutes les réalisations`

**⚠️ Si moins de 3 projets réels sont disponibles au lancement : cette section est supprimée**, et la Section 08 (preuves) est renforcée. Ne jamais afficher une réalisation fictive ou un rendu présenté comme un projet client.

---

### SECTION 06 — SAVOIR-FAIRE & MATIÈRE

**Question** : *C'est bien fait ?*

Section sombre — rupture visuelle nette au milieu d'une page claire. Fond noir mat, texte crème.

Macro-plans en plein écran : le grain du travertin, le fil du bois, le pli du bouclé, l'arête de l'acier noir. Vidéo courte, très ralentie, lumière rasante.

Les matériaux nommés, un par un, en typographie large :
`Travertin` · `Acier noir` · `Bois massif` · `Laque` · `Métal`

> Nous ne parlons pas de qualité.
> Nous nommons ce que nous employons.

**CTA** : `L'atelier` → `/atelier`

*C'est la section qui répond à l'audit : elle transforme une faiblesse (aucune photo d'atelier) en parti pris (la matière en gros plan, pas la mise en scène).*

---

### SECTION 07 — AMÉNAGEMENT D'ESPACE

**Question** : *Vous faites autre chose ?*

Section horizontale, format plus compact que les précédentes. Un comparateur avant/après au curseur, à la fois démonstratif et interactif.

> Parfois, il ne manque pas un meuble.
> Il manque une organisation.

Texte court sur la prestation de réorganisation et d'optimisation d'espace.

**CTA** : `En savoir plus` → `/amenagement`

**⚠️ Section conditionnelle** : sans cas réel disponible, elle est retirée de la V1 et le service est simplement mentionné en une ligne dans la Section 02.

---

### SECTION 08 — LE SHOWROOM & LA CONFIANCE

**Question** : *Vous existez pour de vrai ?*

**La section qui règle le problème de crédibilité.** Elle est délibérément factuelle, presque sèche.

Deux colonnes.

À gauche — une photo réelle du showroom, ou l'entrée de la visite virtuelle 3D.

À droite — les faits, sans emphase :

```
437 Quartier Industriel Sidi-Ghanem
Marrakech 4000

Lundi – Vendredi   9h00 – 17h30
Samedi             9h00 – 13h30

WhatsApp  +212 605 405 930
```

Sous ce bloc, quand la matière existera : 2 à 3 avis clients en verbatim court, avec prénom et type de projet. **Pas d'étoiles inventées, pas de compteur d'abonnés, pas de logo partenaire fictif.**

**CTA** : `Visiter le showroom en 3D` · `Prendre rendez-vous`

---

### SECTION 09 — CTA FINAL

**Question** : *Bon, je fais quoi ?*

Pleine hauteur. Fond crème, une seule phrase en très grande typographie, beaucoup d'espace autour.

> **Venez voir.
> Ou racontez-nous.**

Deux boutons, même poids visuel :
`Prendre rendez-vous au showroom` · `Parler de mon projet`

Sous les boutons, une ligne discrète : `Ou écrivez-nous directement sur WhatsApp →`

---

### Pied de page

Logo · baseline `ATELIER · ORGANISE · DESIGN` · navigation · adresse et horaires · WhatsApp · Instagram · mentions légales et confidentialité.

**Pas de compteur d'abonnés Instagram.** Une galerie de derniers posts est acceptable, un chiffre ne l'est pas.

---

## Récapitulatif des conditions de lancement

| Élément | Condition | Sans quoi |
|---|---|---|
| Section 05 Réalisations | ≥ 3 projets réels | supprimée |
| Section 07 Aménagement | ≥ 2 cas avant/après | supprimée, service mentionné en une ligne |
| Page `/realisations` | ≥ 3 projets réels | reportée |
| Page `/amenagement` | entretien de cadrage client | reportée |
| Page `/atelier` | photos réelles + histoire | reportée, contenu fusionné dans `/showroom` |
| Avis clients Section 08 | verbatims réels | bloc retiré, seuls les faits restent |
| Configurateur 3D | modèles paramétriques | remplacé par scroll-through d'images |
