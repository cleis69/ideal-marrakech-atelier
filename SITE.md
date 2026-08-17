# Idéal Contemporain — Site

Prototype fonctionnel. Vitrine expérientielle 3D + catalogue.
Conçu par **ULTRA VISION** à partir de l'audit de [@ideal.contemporain](https://www.instagram.com/ideal.contemporain/).

---

## Ouvrir le site

**Double-cliquez sur `index.html`.** Aucune installation, aucun serveur, aucune dépendance à installer.

Le site est volontairement en HTML/CSS/JS natif : il s'ouvre directement depuis le disque.
Seul three.js est chargé depuis un CDN — **une connexion internet est nécessaire** pour que la 3D s'affiche.
Sans connexion, les zones 3D basculent automatiquement sur un visuel de repli.

---

## Les deux moments 3D

### `index.html` — section 04, transformation au scroll

Une table basse en rotation lente. En descendant, elle **se transforme en temps réel** :
noyer sur piètement bois → noir mat cannelé → travertin sur acier noir fin.
Les dimensions glissent en continu, l'essence et le piètement basculent au milieu de chaque segment.

C'est le moment signature du site : le sur-mesure n'est pas raconté, il est montré en train de se faire.

### `sur-mesure.html` — configurateur temps réel

Six paramètres, rendu mis à jour à chaque frame :

| Paramètre | Valeurs |
|---|---|
| Type de pièce | Table basse · Table à manger · Buffet · Console |
| Longueur / Largeur / Hauteur | curseurs, bornes propres à chaque type |
| Essence | Travertin · Noyer · Chêne · Noir mat · Laque blanche |
| Piètement | Acier noir fin · Cannelé · Bois massif · Central |

Rotation libre à la souris. **« Envoyer ma configuration »** ouvre WhatsApp avec le récapitulatif
pré-rempli — le canal de conversion réel du client.

Les piètements *cannelé* et *central* produisent un plateau rond, conformément aux pièces
réellement observées sur le compte.

---

## Comment marche la 3D

**Aucun modèle 3D externe.** Toute la géométrie est construite à la volée en JavaScript, et les
matières sont générées par canvas (veines du travertin, fil du bois, micro-grain des laques).

Conséquences :
- le site pèse **172 Ko** au total, hors three.js ;
- n'importe quelle dimension est modifiable en temps réel, sans re-télécharger de modèle ;
- rien à produire en amont pour faire la démonstration.

Le jour où le client fournit de vrais modèles (glTF/GLB), ils remplacent la géométrie procédurale
sans toucher au reste.

**Éclairage** : lumière latérale rasante, ombres portées longues et douces, fond transparent.
C'est la signature lumineuse relevée sur les visuels Instagram, transposée en 3D.

---

## Fichiers

```
ideal-contemporain-site/
├── index.html            Accueil — 9 sections, moment 3D au scroll
├── collections.html      Catalogue — 10 catégories + grille filtrable
├── sur-mesure.html       Configurateur 3D temps réel
├── realisations.html     Portfolio + variante « état vide »
├── atelier.html          Savoir-faire, matériaux, équipe
├── showroom.html         Le lieu, horaires, visite virtuelle
├── amenagement.html      Réorganisation d'espace
├── contact.html          Formulaire qualifié
├── mentions-legales.html
├── 404.html
└── assets/
    ├── css/main.css      Design system complet
    └── js/
        ├── site.js       Header, nav, apparitions, curseur, filtres, comparateur
        └── engine.js     Moteur 3D procédural
```

**Note d'architecture** — `engine.js` et `site.js` sont des scripts classiques, pas des modules ES.
C'est délibéré : les modules ES sont bloqués par CORS en `file://`, le site ne s'ouvrirait pas
par double-clic. Le pilotage 3D, lui, est un module inline dans les deux pages concernées, parce
qu'il importe three.js depuis le CDN.

---

## Mettre en ligne

Le site est statique. Glissez le dossier sur **Netlify Drop** ou **Vercel** — c'est en ligne en une minute, gratuitement.

Aucune étape de build. Aucun `npm install`.

---

## Ce qui n'est pas réel dans ce prototype

Sois clair là-dessus en rendez-vous client :

| Élément | État |
|---|---|
| **Toutes les images** | Placeholders. Compositions abstraites dans la palette de marque, avec le libellé de la photo attendue. |
| **Les 9 produits du catalogue** | Placeholders. Seul **TALIA** est un nom réellement observé sur l'Instagram. |
| **Les 5 réalisations** | Inventées pour la démonstration. Aucun projet client n'existe. |
| **Le processus sur-mesure** | Hypothèse de structure, à valider en entretien. |
| **La page Aménagement** | Coquille. Ce service est absent à 100 % de l'Instagram. |
| **Le formulaire de contact** | Démonstration, aucun envoi. À brancher sur Formspree, Resend ou un backend. |
| **Les mentions légales** | Tous les champs juridiques en attente. Rien n'a été inventé. |

Chaque page porte une **note de production** encadrée qui signale précisément ce qui manque.
Elles sont visibles à l'écran, en terracotta — à retirer avant la mise en ligne réelle.

---

## Les trois conditions de lancement

1. **Photos réelles** — showroom, atelier, matières, équipe. Un shooting est un prérequis, pas une option.
2. **Trois réalisations clientes** minimum, documentées et autorisées. En dessous, la page Réalisations ne sort pas.
3. **Un entretien de cadrage de 90 minutes** — fabricant ou distributeur ? périmètre du sur-mesure ? le service d'aménagement ?

Détail complet dans `../ideal-contemporain-web/docs/07-contenus-a-recuperer.md`.

---

## Accessibilité et performance

- `prefers-reduced-motion` respecté : toute la 3D et toutes les animations sont désactivées, contenu statique équivalent.
- Repli automatique si WebGL est indisponible.
- Rendu 3D mis en pause dès que la scène sort de l'écran.
- `devicePixelRatio` plafonné à 1,75 — le trafic sera majoritairement mobile en 4G.
- Un seul `h1` par page, `lang="fr"`, `title` et `meta description` uniques, focus visible.
- JSON-LD `FurnitureStore` avec l'adresse et les horaires réels sur l'accueil.

---

## Vérification restante

Les liens internes, la structure HTML, l'accessibilité de base, l'absence de termes bannis et
l'absence d'emojis ont été contrôlés automatiquement — tout passe.

**Le rendu 3D n'a pas pu être exécuté depuis l'environnement de production de ce brief.**
Ouvre `index.html` et `sur-mesure.html`, et signale tout ce qui ne s'affiche pas comme prévu.
