# Oman Lara Events – Site Web

Agence de décoration événementielle haut de gamme.

---

## Structure du projet

```
oman-lara-events/
│
├── index.html                    ← Page principale (HTML)
│
├── css/
│   └── style.css                 ← Tous les styles (variables, layout, responsive)
│
├── js/
│   └── main.js                   ← Interactions (scroll, formulaire, navigation)
│
├── images/                       ← Vos photos intégrées
│   ├── hero.jpg                  ← Image héro principale
│   ├── about-1.jpg               ← À propos – grande photo
│   ├── about-2.jpg               ← À propos – petite photo
│   ├── service-mariage.jpg       ← Carte service Mariage
│   ├── service-anniversaire.jpg  ← Carte service Anniversaire
│   ├── service-bapteme.jpg       ← Carte service Baptême
│   ├── service-corporate.jpg     ← Carte service Corporate
│   ├── service-location.jpg      ← Carte service Location
│   ├── service-surmesure.jpg     ← Carte service Sur-mesure
│   ├── gallery-1.jpg             ← Galerie (grande, 2 colonnes)
│   ├── gallery-2.jpg             ← Galerie
│   ├── gallery-3.jpg             ← Galerie
│   ├── gallery-4.jpg             ← Galerie (2 colonnes)
│   ├── gallery-5.jpg             ← Galerie
│   └── gallery-6.jpg             ← Galerie
│
└── README.md                     ← Ce fichier
```

---

## Remplacer / ajouter des photos

Pour mettre à jour une photo, placez simplement votre nouveau fichier
dans le dossier `images/` avec le même nom (ex: `hero.jpg`).

### Tailles recommandées

| Fichier           | Utilisation                  | Taille optimale  |
|-------------------|------------------------------|------------------|
| hero.jpg          | Grande image héro            | 1400 × 900 px   |
| about-1.jpg       | À propos – grande            | 900 × 700 px    |
| about-2.jpg       | À propos – petite            | 700 × 600 px    |
| service-*.jpg     | Cartes services              | 800 × 500 px    |
| gallery-*.jpg     | Grille galerie               | 800 × 600 px    |

---

## Personnalisation rapide

### Couleurs – `css/style.css`
```css
:root {
  --violet:       #7B4FA6;
  --violet-deep:  #5C2D8A;
  --rose:         #F4A7C0;
  --rose-deep:    #E87FAB;
}
```

### Coordonnées – `index.html`
Rechercher `Cotonou, Bénin` et `+229 XX XX XX XX` pour mettre à jour
l'adresse, le téléphone, l'email et l'Instagram.

### Statistiques – `index.html`
Section `À PROPOS` → modifier les `.stat-num` et `.stat-label`.

### Lien Google Forms (avis clients)
Dans le footer ou la section témoignages, remplacez `#` par le lien
de votre formulaire Google dans la balise `<a>` correspondante.

---

## Mise en ligne

Ce site est en **HTML / CSS / JS pur** — aucune installation requise.

1. Uploadez le dossier complet sur votre hébergeur (FTP, cPanel…)
2. Assurez-vous que `index.html` est à la racine
3. Le site est immédiatement fonctionnel

### Hébergement gratuit recommandé
- **Netlify Drop** : glissez le dossier sur netlify.com/drop
- **GitHub Pages** : poussez sur GitHub et activez Pages

---

## Fonctionnalités

- ✅ Photos réelles Oman Lara Events intégrées et optimisées
- ✅ Design violet & rose clair haut de gamme
- ✅ Typographies Cormorant Garamond + Jost
- ✅ Animations au scroll (fade-in)
- ✅ Navigation fixe avec effet blur
- ✅ Hero pleine hauteur avec badge statistique
- ✅ Section À propos avec images superposées
- ✅ 6 cartes services avec hover effect
- ✅ Galerie photo en grille asymétrique
- ✅ Processus en 4 étapes
- ✅ 3 témoignages clients
- ✅ Bannière CTA dégradée
- ✅ Formulaire de contact avec validation
- ✅ Footer complet avec réseaux sociaux
- ✅ 100% responsive (mobile, tablette, desktop)

---

Créé pour **Oman Lara Events** © 2025
