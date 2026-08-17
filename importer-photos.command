#!/bin/bash
# ============================================================================
# IDÉAL CONTEMPORAIN — Import des photos depuis le projet Lovable
#
# Double-cliquez ce fichier.
# Il trouve le dossier Lovable téléchargé, copie ses 22 images dans le site
# en les renommant aux bons emplacements, puis ouvre le site.
#
# Correspondance établie d'après le contenu réel du dépôt
# github.com/cleis69/ideal-marrakech-atelier (src/assets/)
#
# ULTRA VISION
# ============================================================================

cd "$(dirname "$0")" || exit 1
SITE="$(pwd)"
DEST="$SITE/assets/img"

printf '\n\033[1m  IDÉAL CONTEMPORAIN — Import des photos Lovable\033[0m\n'
printf '  ──────────────────────────────────────────────────\n\n'

# ── 1. Trouver le dossier Lovable ──────────────────────────────────────────
SRC=""
for base in "$HOME/Downloads" "$HOME/Desktop" "$HOME/Documents"; do
  [ -d "$base" ] || continue
  found=$(find "$base" -maxdepth 3 -type d -iname "*ideal-marrakech*" 2>/dev/null | head -1)
  if [ -n "$found" ]; then SRC="$found"; break; fi
done

if [ -z "$SRC" ]; then
  printf '  \033[33mDossier Lovable introuvable.\033[0m\n\n'
  printf '  Faites d abord ceci :\n'
  printf '    1. Ouvrez github.com/cleis69/ideal-marrakech-atelier\n'
  printf '    2. Bouton vert « Code » → « Download ZIP »\n'
  printf '    3. Double-cliquez le ZIP dans Téléchargements\n'
  printf '    4. Relancez ce fichier\n\n'
  printf '  Ou glissez le dossier ici, puis Entrée : '
  read -r SRC
  SRC="${SRC%\'}"; SRC="${SRC#\'}"; SRC=$(echo "$SRC" | xargs)
  if [ ! -d "$SRC" ]; then
    printf '\n  \033[31mDossier introuvable. Abandon.\033[0m\n\n'
    read -r -p "  Entrée pour fermer."
    exit 1
  fi
fi

printf '  Source : %s\n\n' "$SRC"
mkdir -p "$DEST"

# ── 2. Correspondance Lovable → emplacements du site ───────────────────────
# Une même image peut alimenter plusieurs emplacements : c'est voulu.
MAP="
hero-salon|hero-accueil hero-collections salon tables-basses-en-situation vue-d-ensemble-du-sejour
showroom|hero-showroom le-showroom-vue-d-ensemble
cat-tables-basses|tables-basses trio-travertin cannelee talia
cat-tables-manger|tables-a-manger table-a-manger
cat-canapes|canapes canape-en-situation modulable
cat-fauteuils|fauteuils fauteuil
cat-chaises|chaises
cat-lits|lits lit-parental chambre
cat-buffets|buffets buffet-lumiere-rasante buffet-trois-portes buffet-sur-mesure
cat-consoles|consoles console console-fine
cat-decoration-murale|decoration-murale tableaux-en-relief relief-mural
cat-miroirs|miroirs miroir-organique
mat-travertin|grain-du-travertin
mat-bois|fil-du-bois hero-atelier
mat-acier|arete-acier
mat-boucle|macro-matiere-lumiere-rasante-tres-ralenti
real-villa|hero-realisations projet-client-vue-d-ensemble
real-appartement|projet-client
real-riad|patio
avant|avant
apres|apres hero-amenagement
table-fallback|table-basse-travertin
"

printf '  Copie et renommage…\n\n'
copied=0; missing=0; slots=0

while IFS='|' read -r src targets; do
  [ -z "$src" ] && continue
  found=$(find "$SRC" -type f -iname "${src}.jpg" -o -type f -iname "${src}.jpeg" -o -type f -iname "${src}.png" 2>/dev/null | grep -v node_modules | head -1)

  if [ -z "$found" ]; then
    printf '    \033[33m·\033[0m %-24s introuvable\n' "$src"
    missing=$((missing+1))
    continue
  fi

  n=0
  for t in $targets; do
    cp "$found" "$DEST/${t}.jpg" 2>/dev/null && { n=$((n+1)); slots=$((slots+1)); }
  done
  printf '    \033[32m·\033[0m %-24s → %d emplacement(s)\n' "$src" "$n"
  copied=$((copied+1))
done <<< "$MAP"

printf '\n  ──────────────────────────────────────────────────\n'
printf '  \033[32m%d images utilisées · %d emplacements remplis\033[0m\n' "$copied" "$slots"
[ "$missing" -gt 0 ] && printf '  \033[33m%d image(s) attendue(s) non trouvée(s)\033[0m\n' "$missing"

printf '\n  Restent volontairement vides :\n'
printf '    · photos d atelier (main, outil, pièce en cours)\n'
printf '    · portraits d équipe\n'
printf '  Ces visuels n existent nulle part — ni sur Instagram, ni chez\n'
printf '  Lovable. Leur emplacement garde son dégradé : c est le rappel\n'
printf '  que le shooting reste à faire.\n\n'

if [ "$slots" -eq 0 ]; then
  printf '  \033[31mAucune image copiée. Vérifiez que le dossier Lovable\033[0m\n'
  printf '  \033[31mcontient bien src/assets/.\033[0m\n\n'
  read -r -p "  Entrée pour fermer."
  exit 1
fi

printf '  Ouverture du site…\n\n'
open "$SITE/index.html" 2>/dev/null

read -r -p "  Entrée pour fermer cette fenêtre."
