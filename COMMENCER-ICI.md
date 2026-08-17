# Commencer ici

Ton site, avec les photos générées par Lovable, mis en ligne avec **GitHub Desktop**.
**Environ 15 minutes.** Aucune ligne de commande, aucun token.

Le dossier est déjà un dépôt Git prêt à publier — 6 commits, branche `main`.

---

# Étape 1 — Récupérer les photos de Lovable (5 min)

Lovable a généré **22 images**. On les récupère.

> ### ⚠️ Important : les images ont été supprimées de la version actuelle
>
> Trois commits récents (`delete`, `change`, puis un merge) ont retiré des fichiers
> du dépôt. C'est pour ça que **rien ne s'affiche sur Lovable** : les fichiers de
> l'application ont disparu.
>
> **Rien n'est perdu.** Git conserve tout l'historique. Les 22 images sont
> intactes dans une version antérieure, et on va télécharger celle-là.

### 1.1 Télécharger la bonne version

**Clique ce lien** — il télécharge directement la version qui contient les images :

> ### [⬇️ Télécharger les images (commit 605a127)](https://github.com/cleis69/ideal-marrakech-atelier/archive/605a127e8caf980ced276267d96ac57a5c2d98f1.zip)

1. Le ZIP arrive dans **Téléchargements**
2. **Double-clique-le** pour le décompresser
3. Tu obtiens un dossier au nom très long qui commence par `ideal-marrakech-atelier-605a127…`

C'est normal. Le script le trouvera quand même.

> **Le lien ne marche pas ?** Va sur
> [cette page](https://github.com/cleis69/ideal-marrakech-atelier/tree/605a127) →
> bouton vert `Code` → `Download ZIP`.

### 1.2 Lancer l'import

Dans le dossier `ideal-contemporain` sur ton Bureau, **double-clique** :

> ### `importer-photos.command`

Une fenêtre noire s'ouvre. Elle trouve toute seule le dossier téléchargé, copie les 22 images aux bons emplacements, et ouvre le site à la fin.

> **Si macOS refuse** (« développeur non identifié ») :
> clic droit sur le fichier → **Ouvrir** → **Ouvrir** dans la boîte de dialogue.
> Sécurité normale pour tout script téléchargé.

**47 emplacements sur 51** seront remplis.

### Les 4 qui restent vides — et pourquoi

La vue d'ensemble de l'atelier · une main, un outil · une pièce en cours · les portraits d'équipe.

Ces visuels n'existent **nulle part** : ni sur l'Instagram du client, ni chez Lovable. Leur emplacement garde son dégradé.

C'est volontaire. Ce sont exactement les photos qui prouveraient qu'il y a un vrai atelier derrière — le point n°1 de l'audit. Les laisser vides te rappelle ce qu'il faut demander au client.

---

# Étape 2 — Vérifier le site (2 min)

Le script ouvre `index.html` tout seul. Sinon, double-clique-le.

**Ce que tu dois voir :**

- une grande photo de salon en plein écran
- les 10 catégories illustrées en descendant
- une table basse en 3D qui **change de matière quand tu scrolles** (bois → noir → travertin)
- le comparateur avant/après qui glisse à la souris

Clique **Sur-mesure** dans le menu : les curseurs transforment la pièce en direct.

> Pas de 3D ? Vérifie ta connexion internet — le moteur 3D se charge en ligne.

---

# Étape 3 — Ajouter le dossier dans GitHub Desktop (2 min)

1. Ouvre **GitHub Desktop**
2. Menu **File** → **Add Local Repository…**
   *(ou `Cmd + O`)*
3. Bouton **Choose…** → va sur le **Bureau** → sélectionne le dossier **`ideal-contemporain`** → **Open**
4. Clique **Add Repository**

GitHub Desktop reconnaît le dépôt et affiche son historique. Tu dois voir **6 commits** dans l'onglet *History*.

> **Si un message dit « this directory does not appear to be a Git repository »** :
> tu as sélectionné le mauvais dossier. Ce doit être `ideal-contemporain` lui-même,
> pas son dossier parent ni un sous-dossier.

---

# Étape 4 — Enregistrer les photos importées (1 min)

Onglet **Changes**, à gauche : tu vois la liste des photos ajoutées à l'étape 1.

1. En bas à gauche, dans le champ **Summary**, écris :
   `Photos importees depuis Lovable`
2. Clique le bouton bleu **Commit to main**

---

# Étape 5 — Publier sur GitHub (2 min)

1. En haut, bouton **Publish repository**
2. Une fenêtre s'ouvre. Remplis :

| Champ | Valeur |
|---|---|
| **Name** | `ideal-contemporain` |
| **Description** | *(laisse vide)* |
| **Keep this code private** | 🔴 **DÉCOCHE CETTE CASE** |

> ⚠️ **La case « Keep this code private » doit être décochée.**
> L'hébergement gratuit de GitHub ne fonctionne que sur un dépôt public.
> Si tu la laisses cochée, ton site restera invisible.

3. Clique **Publish repository**

Quelques secondes, et c'est envoyé. Pas de mot de passe demandé : GitHub Desktop gère la connexion.

---

# Étape 6 — Mettre le site en ligne (2 min)

1. Dans GitHub Desktop, bouton **View on GitHub** *(ou `Cmd + Maj + G`)*
   → ton navigateur ouvre le dépôt
2. Onglet **Settings** (en haut, icône engrenage)
3. Menu de gauche → **Pages**
4. Sous *Build and deployment* :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` · dossier `/ (root)`
   - **Save**
5. **Attends 2 minutes**, rafraîchis la page

Un bandeau vert affiche ton adresse :

```
https://cleis69.github.io/ideal-contemporain/
```

🎉 **En ligne.** Ouvre-la pour vérifier, puis envoie-la au client.

---

# Publier une modification, plus tard

Trois clics dans GitHub Desktop, à chaque fois :

1. Onglet **Changes** — tes modifications apparaissent
2. Champ **Summary** : décris en trois mots (`Nouvelles photos`, `Correction textes`…)
3. **Commit to main**, puis **Push origin** en haut

Le site en ligne se met à jour tout seul en une minute.

---

# Si ça coince

| Situation | Solution |
|---|---|
| GitHub Desktop ne voit pas le dépôt | Tu as choisi le mauvais dossier. Sélectionne `ideal-contemporain` lui-même. |
| Pas de bouton **Publish repository** | Le dépôt est déjà publié. Cherche **Push origin** à la place. |
| **Push origin** grisé | Rien à envoyer, ou il faut d'abord faire un commit (étape 4). |
| Page 404 après activation de Pages | Attends 2 min de plus. Vérifie que `index.html` est visible à la racine du dépôt sur github.com. |
| Site en ligne sans mise en forme | Le dépôt est en Private → **Settings** → tout en bas → **Change visibility** → Public |
| Photos absentes en ligne | Relance `importer-photos.command`, puis refais commit + push |

---

# Avant d'envoyer le lien au client

Le site contient des **encadrés en terracotta** qui expliquent ce qui est réel et ce qui ne l'est pas.

**Garde-les** pour une présentation interne ou une première discussion honnête.
**Retire-les** pour une présentation finale — cherche `prodnote` dans les fichiers HTML.

Et dis clairement que les photos sont des **images d'illustration**, pas les produits du client. Sinon il croira que tu as déjà ses photos, et la déception plus tard sera pire que la franchise aujourd'hui.

> « Les images que vous voyez donnent le ton et la mise en page. Elles seront
> remplacées par vos photos — c'est ce dont j'ai besoin de votre côté. »

Ça t'ouvre naturellement la demande de shooting.

---

# Faut-il réparer le projet Lovable ?

**Non, pas pour ce site.** Tu utilises la version HTML, elle est complète et ne dépend de rien.

Mais si tu veux quand même remettre Lovable en état plus tard, sache que **c'est réparable** : les commits `delete` et `change` sont annulables.

Sur GitHub, pour chacun des deux : ouvre le commit → bouton **`Revert`** en haut à droite → **Create pull request** → **Merge**. Lovable resynchronisera et retrouvera ses fichiers.

Ça ne coûte **aucun crédit** — c'est une opération GitHub, pas Lovable.

Fais-le seulement si tu comptes réellement continuer là-bas. Sinon, laisse.

---

# Ne mélange jamais les deux dépôts

| | `ideal-contemporain` | `ideal-marrakech-atelier` |
|---|---|---|
| Quoi | **ce site** — HTML natif | le site Lovable — React |
| Modifiable par | toi, gratuitement | Lovable, 1 crédit par message |
| Hébergement | GitHub Pages, gratuit | Vercel ou Netlify |

Les structures sont incompatibles. Ne copie jamais de fichiers de l'un vers l'autre — sauf les images, comme on vient de le faire.

---

# Et tes 5 crédits Lovable ?

**Garde-les.** Tu utilises ce site-ci maintenant, et il ne coûte rien à héberger ni à modifier.

Ils te serviront le jour où le client demandera quelque chose que ce site ne sait pas faire : un formulaire qui envoie vraiment des emails, un espace de connexion, une base produits qu'il modifie lui-même.

Ce jour-là, `PROMPT-LOVABLE.md` t'attend.
