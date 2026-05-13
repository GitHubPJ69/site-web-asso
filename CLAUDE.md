# CLAUDE.md — site_web_asso

Contexte projet à lire en priorité au début de chaque conversation.

---

## Projet

Site web d'une association intervenant dans le **développement local et la coopération internationale**.
Positionnement : **intermédiaire** entre initiatives locales et acteurs internationaux (ONG, fondations, financeurs).
Ne pas confondre avec l'humanitaire d'urgence — logique de développement, coopération, prévention, résilience.

Nom provisoire dans le code : **PontLocal** (à remplacer par le vrai nom quand il sera choisi).

---

## Fichiers

```
site_web_asso/
├── index.html    — page unique, CSS intégré dans <style>, pas de build tool
├── i18n.js       — système multilingue (translations object + setLanguage())
├── projects.js   — données des projets terrain (const projects[]) + STATUS_COLORS
└── countries.js  — GeoJSON pays embarqué localement (const COUNTRIES_GEOJSON)
                    (évite les fetch échouant sur file:// protocol)
```

Site **statique local** pour l'instant — ouverture par double-clic dans le navigateur.
Aucun serveur, aucun framework, aucun bundler. HTML/CSS/JS pur.
CDN externe : `https://unpkg.com/globe.gl/dist/globe.gl.min.js` (Three.js/WebGL).

---

## Palette de couleurs (CSS custom properties)

| Variable       | Valeur    | Usage principal          |
|----------------|-----------|--------------------------|
| `--bleu`       | `#1E3A5F` | Titres, nav, accents     |
| `--vert`       | `#2D7D6F` | Tags, bordures, CTA form |
| `--terre`      | `#C4904A` | Accents chauds, nav CTA  |
| `--beige`      | `#F5F0E8` | Fonds sections impaires  |
| `--gris-clair` | `#F8F9FA` | Fonds sections claires   |
| `--blanc`      | `#FFFFFF` | Cartes, formulaire       |
| `--gris`       | `#6B7280` | Textes secondaires       |
| `--sombre`     | `#111827` | Texte principal, footer  |

---

## Sections (dans l'ordre de la page)

| ID HTML           | Fond         | Contenu                                                       |
|-------------------|--------------|---------------------------------------------------------------|
| `#accueil`        | dégradé bleu | Hero — titre, sous-titre, 2 boutons                          |
| `#notre-role`     | beige        | 3 cartes (terrain / intermédiation / partenaires)            |
| `#notre-approche` | blanc        | Constat + schéma flux animé + 5 étapes + conclusion           |
| `#nos-missions`   | beige        | 6 cartes missions concrètes                                   |
| `#cartographie`   | sombre       | Globe 3D interactif (projets terrain) + panneau latéral       |
| `#domaines`       | gris-clair   | 10 cartes domaines (3 visibles + bouton Voir plus) + conclusion |
| `#nos-principes`  | gris-clair   | 6 blocs principes avec barre colorée                          |
| `#contact`        | beige        | Intro profils + formulaire (select profil)                    |

---

## Section `#notre-approche` — structure fusionnée

Cette section réunit ce qui était anciennement deux sections distinctes (constat + approche).
Structure en 4 temps :

1. **Constat** (`.enjeu-constat`) — 2 paragraphes : tension ressources dispo / initiatives locales
2. **Schéma flux** (`.enjeu-flux`) — 3 blocs colorés reliés par SVG animés :
   - Gauche `--bleu` : Organisations & financeurs
   - Centre `--terre` : Intermédiation de terrain
   - Droite `--vert` : Initiatives locales
   - Connecteurs : SVG 60×60 avec 2 lignes en tirets animés (flux-fwd / flux-bwd)
3. **Sous-titre** `.approche-sous-titre` + **5 étapes numérotées** (`.approche-etapes`)
4. **Conclusion** (`.enjeu-conclusion`) — phrase italique `--terre`

Classes CSS clés : `.enjeu-constat`, `.enjeu-flux`, `.flux-bloc`, `.flux-gauche/centre/droite`,
`.flux-connecteur`, `.flux-svg`, `.flux-line-fwd/bwd`, `.flux-head-fwd/bwd`, `.enjeu-conclusion`

---

## Section `#domaines` — 10 domaines + toggle

10 cartes au total. Les 3 premières (D1–D3) sont visibles par défaut.
D4–D10 ont `style="display:none"` directement en HTML (style inline, priorité maximale).

**Domaines :**
D1 Sécurité alimentaire · D2 Eau et assainissement · D3 Environnement et climat ·
D4 Accès à l'énergie · D5 Éducation et apprentissage · D6 Santé et prévention ·
D7 Activités économiques et autonomisation · D8 Loisirs, culture et lien social ·
D9 Économie et finance solidaire · D10 Protection sociale et accompagnement

**Bouton Voir plus/moins :**
- HTML : `<button id="domaines-toggle" onclick="toggleDomaines(this)" ...>`
- Fonction globale `toggleDomaines(btn)` dans un `<script>` **séparé** en fin de `<body>`
- i18n : clés `domaines.voir_plus` / `domaines.voir_moins` (FR + EN)

**Ajouter un domaine :**
1. Dupliquer un `<div class="domaine-carte">` dans la grille, sans `style="display:none"`
2. Ajouter les clés `dX_title` et `dX_ex` dans `fr.domaines` ET `en.domaines`
3. Ajuster le seuil `i >= 3` dans `toggleDomaines` si besoin

---

## Globe 3D (`#cartographie`)

- Bibliothèque : Globe.gl via CDN unpkg
- Données pays : `countries.js` (GeoJSON local, évite fetch sur file://)
- Données projets : `projects.js` (array `projects[]` + `STATUS_COLORS`)
- Couleurs statuts partagées entre `projects.js` et le script globe :
  - `needs_support` → `#FF7A1A` (orange)
  - `in_progress` → `#00C893` (vert)
  - `completed_followed` → `#38AAFF` (bleu)
- Panneau latéral avec 2 onglets : Carte (détail projet/pays) + Projets (liste groupée)
- Accesseur critique : `.polygonGeoJsonGeometry(feat => feat.geometry)` — **ne pas supprimer**, sans lui les polygones pays sont invisibles

---

## Système multilingue (i18n.js)

### Fonctionnement
- Objet `translations = { fr: {...}, en: {...} }`
- Chaque élément HTML textuel a `data-i18n="section.clé"` (contenu vide dans le HTML)
- Les placeholders de formulaire utilisent `data-i18n-placeholder="section.clé"`
- Fonction `setLanguage(lang)` : injecte via `innerHTML`, met à jour `<html lang>`, sauvegarde dans `localStorage`
- Langue par défaut : **français**
- Sélecteur FR / EN dans la navbar (`.lang-switcher`)

### Structure des namespaces
```
nav, hero, role, approche, missions, carte, domaines, principes, contact, footer
```

### Ajouter une langue (ex. espagnol)
1. Ajouter `es: { ... }` dans `translations` (copier la structure de `fr` ou `en`)
2. Ajouter `<button data-lang="es">ES</button>` dans `.lang-switcher` dans `index.html`

### Ajouter une clé de traduction
- Ajouter la clé dans **les deux** blocs `fr` et `en` (ne jamais en oublier une)
- Ajouter `data-i18n="namespace.clé"` sur l'élément HTML correspondant

---

## Conventions de code

- **Pas de texte en dur dans le HTML** — tout passe par `data-i18n` (sauf icônes emoji et éléments purement visuels)
- CSS dans `<style>` dans `index.html`, organisé en blocs commentés (`/* ── NOM ── */`)
- Responsive via `@media` en bas du CSS : points de rupture à 900px, 700px, 540px
- Pas de framework, pas de dépendances externes (sauf Globe.gl CDN)
- Icônes : emojis en entités HTML décimales (`&#127806;` etc.)

### Piège JS — scripts séparés obligatoires

Le globe s'initialise dans un grand `<script>` IIFE en fin de `<body>`.
**Ne jamais mettre d'autres logiques interactives dans ce même bloc** : si le globe plante
(CDN indisponible, erreur Three.js…), tout le bloc s'arrête et les autres listeners ne s'enregistrent pas.

Règle : chaque fonctionnalité interactive indépendante = son propre `<script>` séparé.
Préférer `onclick="maFonction()"` + fonction globale plutôt que `addEventListener` pour les éléments simples.

---

## Ton éditorial

- Professionnel, humain, sobre, constructif
- Jamais accusateur envers les ONG, financeurs, associations internationales
- Valoriser : coopération, ancrage territorial, écoute, compétences locales, approche participative
- Éviter : humanitaire d'urgence, critique top-down, ton militant agressif
- Public cible : ONG, fondations, financeurs, institutions, associations locales, chercheurs

---

## Règles de travail

- **Toujours proposer la structure ou l'approche avant de modifier**, puis attendre validation
- Ne modifier que les sections demandées (sauf adaptation CSS mineure inévitable)
- Toute modification de contenu → mettre à jour les deux langues (fr + en) dans `i18n.js`
