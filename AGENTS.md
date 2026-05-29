# AGENTS.md — site_web_asso

Contexte projet à lire en priorité avant toute modification.

---

## Projet

Site web de **Linkovia Network**, une association qui agit dans le **développement local et la coopération internationale**.
Le positionnement du projet est celui d'un **intermédiaire** entre initiatives locales et acteurs internationaux : ONG, fondations, financeurs, institutions, partenaires techniques.

Ne pas présenter Linkovia Network comme un acteur d'humanitaire d'urgence. Le vocabulaire et les choix éditoriaux doivent rester ancrés dans : développement, coopération, prévention, résilience, écoute, compétences locales et partenariats durables.

Logo actuellement utilisé dans le site : `Logo.png`.

---

## Équipe

Deux personnes travaillent sur ce projet :

- **Sidonie Tisseau** — fondatrice de Linkovia Network. **Utilisatrice principale de Claude Code sur ce projet** (Claude Code dans VS Code). Pilote le contenu et l'éditorial (textes, ton, choix de communication). Est en phase de découverte technique : elle comprend ce qu'on lui explique, mais le vocabulaire technique ne lui est pas encore familier.
- **Pierre-Jean Martin** — ressource technique. Aide Sidonie sur les points techniques pointus (architecture, choix d'implémentation, git, déploiement). Intervient occasionnellement directement dans les sessions Claude Code.

### Détection de l'interlocuteur

Sidonie et Pierre-Jean **partagent la même machine** : email git, config Claude Code et environnement Windows sont identiques pour les deux. **Pas de détection automatique possible** par signaux machine.

Règle : par défaut, **assumer que c'est Sidonie**. Ne basculer vers le mode "Pierre-Jean" que si :
- la personne dit explicitement *"c'est PJ"* / *"c'est Pierre-Jean"* / *"là c'est moi qui parle"* ;
- la conversation porte sur un sujet très technique manipulé avec aisance (config CLI, debug runtime, choix d'architecture), sans demande d'explication ;
- l'opération en cours est typiquement infra (auth gh, install winget, gestion de tokens).

### Style de communication

**Quand c'est Sidonie** (cas par défaut) :
- Expliquer les termes techniques en français simple au fur et à mesure (par exemple : *"un commit, c'est une photo de l'état du projet à un instant T"*).
- Ne pas cacher les détails techniques pour autant — elle comprend tout, elle découvre juste le vocabulaire. Pas de surnommage condescendant, pas de simplification qui élude.
- Quand on introduit un nouveau concept (commit, push, refactor, variable CSS, etc.), poser brièvement le mot + sa définition la première fois, puis l'utiliser normalement ensuite.
- Préférer décrire les effets concrets (*"ça déclenche un nouveau build de la page"*) plutôt que des abstractions.

**Quand c'est Pierre-Jean** :
- Vocabulaire technique direct, pas d'explications préliminaires.

### Partage des décisions

- **Contenu / éditorial / ton / formulation** : Sidonie tranche en dernier ressort.
- **Choix techniques structurants** (refactor majeur, dépendance, choix d'architecture) : Pierre-Jean est l'autorité ; même si Sidonie est à la conversation, sur ce type de décision il vaut mieux qu'elle valide avec lui avant qu'on parte sur du gros travail.
- **Petits choix techniques du quotidien** (renommage, ajout d'un fichier, compression d'image, etc.) : Sidonie peut décider seule.

---

## Stack et architecture

- Site statique en **HTML / CSS / JavaScript pur**.
- Pas de framework, pas de bundler, pas de build tool.
- Ouverture locale possible par double-clic dans le navigateur.
- CSS embarqué dans chaque page HTML via `<style>`.
- Dépendances externes limitées :
  - Google Fonts (`Plus Jakarta Sans`)
  - Globe.gl via CDN unpkg pour la cartographie 3D
- Les données pays sont embarquées localement dans `countries.js` pour éviter les problèmes de `fetch` en `file://`.

---

## Fichiers importants

```text
site_web_asso/
├── index.html                         — page d'accueil principale + globe 3D
├── projects.html                      — page dédiée à la liste et au détail des projets
├── submit-project.html                — formulaire de soumission de projet
├── i18n.js                            — traductions FR/EN + `setLanguage()`
├── projects.js                        — données projets + couleurs de statut
├── countries.js                       — GeoJSON pays local
├── project_submission_specification_v1.md — spécification métier du formulaire V1
├── og-cover.jpg                       — image Open Graph / Twitter Card (1200×630). **Reste à la racine** : le lien `https://linkovia-network.org/og-cover.jpg` a déjà été partagé sur LinkedIn, on ne le déplace pas pour ne pas casser le preview cache.
├── images/                            — tous les autres assets visuels (voir section dédiée plus bas)
├── AGENTS.md                          — ce fichier : source de vérité unique du contexte projet
├── CLAUDE.md                          — import `@AGENTS.md` (chargé automatiquement par Claude Code)
└── CNAME                              — configuration GitHub Pages / domaine
```

### Dossier `images/`

Contient tous les visuels du site sauf `og-cover.jpg` (qui doit rester à la racine, voir ci-dessus).

**Images servies par le site** (référencées dans le HTML) :

| Fichier | Description |
|---|---|
| `images/logo-linkovia.png` | Logo compressé pour la navbar et le footer (152×152, ~19 KB) |
| `images/favicon-32.png` | Favicon onglet navigateur (32×32 PNG, ~1.4 KB) |
| `images/favicon-180.png` | Apple touch icon iOS (180×180 PNG, ~21 KB) |
| `images/hero-background.jpg` | Image de fond du hero `#accueil` (gradient sombre par-dessus en CSS) |
| `images/photo_pro_sido.jpg` | Photo profil Sidonie Tisseau, section `#qui-sommes-nous` |

**Sources HD dans `images/originals/`** — non référencées par le site, conservées pour réutilisation future (impression, supports comm', déclinaisons graphiques). Ne jamais les linker directement dans le HTML : toujours générer une version optimisée sous `images/` et référencer celle-ci.

| Fichier | Description |
|---|---|
| `images/originals/Logo.png` | Logo canonique HD (1254×1254 PNG, ~1.2 MB). Source pour `logo-linkovia.png`, les favicons, et `og-cover.jpg`. |
| `images/originals/Photo.pro.png` | Photo Sidonie Tisseau HD (1402×1122 PNG, ~1.7 MB). Source pour `photo_pro_sido.jpg`. |
| `images/originals/hero-original.png` | Image de fond du hero, version HD (1536×1024 PNG, ~2.3 MB). Source pour `hero-background.jpg`. |
| `images/originals/Favicon2.png` | Variante historique du favicon (1254×1254 PNG, ~900 KB). Conservé au cas où. |
| `images/originals/FAVicon.png` | Autre variante historique du favicon (1024×1024 PNG, ~1.4 MB). Conservé au cas où. |

---

## Palette actuelle

La palette de référence visible dans les pages actuelles est :

| Variable | Valeur |
|---|---|
| `--bleu` | `#C06800` |
| `--bleu-clair` | `#E08820` |
| `--vert` | `#1E9660` |
| `--vert-clair` | `#28A870` |
| `--terre` | `#D4820A` |
| `--beige` | `#F5F0E8` |
| `--beige-fort` | `#EDE7D9` |
| `--gris` | `#5A6A5E` |
| `--gris-clair` | `#FAF6EE` |
| `--blanc` | `#FFFFFF` |
| `--sombre` | `#0D3A1E` |

Toujours vérifier la page concernée avant de modifier le style, car le CSS est dupliqué entre plusieurs fichiers HTML.

---

## Pages et sections

### `index.html`

Sections dans l'ordre actuel :

1. `#accueil`
2. `#notre-role`
3. `#notre-approche`
4. `#domaines`
5. `#cartographie`
6. `#qui-sommes-nous`
7. `#contact`

### `projects.html`

- Page autonome de consultation des projets.
- Utilise `projects.js` et `i18n.js`.
- Affiche des cartes projets puis une vue détail.

### `submit-project.html`

- Formulaire de soumission structuré en sections A à F.
- Le comportement et le contenu doivent rester cohérents avec `project_submission_specification_v1.md`.
- Soumission V1 : simple, avec revue humaine manuelle avant publication.

---

## Système multilingue

Fichier central : `i18n.js`.

- Langues actuelles : français et anglais.
- `translations = { fr: {...}, en: {...} }`
- Fonction `setLanguage(lang)` : injecte les contenus, met à jour `<html lang>`, persiste le choix dans `localStorage`.
- Les contenus textuels passent par :
  - `data-i18n="namespace.cle"`
  - `data-i18n-placeholder="namespace.cle"`

Namespaces actuellement présents :

```text
nav, hero, demarche, role, approche, domaines, principes, equipe,
carte, continents, projets_page, contact, submit, footer
```

### Règle stricte

Toute modification de contenu visible doit être répercutée dans **les deux langues** (`fr` et `en`) et dans le HTML concerné.

---

## Cartographie et projets

### Globe 3D (`index.html`)

- Bibliothèque : Globe.gl via CDN.
- Données pays : `countries.js`.
- Données projets : `projects.js`.
- Couleurs de statut partagées :
  - `needs_support` → `#FF7A1A`
  - `in_progress` → `#00C893`
  - `completed_followed` → `#38AAFF`
- Accesseur critique à conserver :

```js
.polygonGeoJsonGeometry(feat => feat.geometry)
```

Sans lui, les polygones pays ne s'affichent pas.

### Règle JS importante

Le globe est initialisé dans un gros `<script>` IIFE. Ne pas y mélanger d'autres logiques interactives indépendantes.
Si le CDN ou Three.js plante, tout le bloc s'arrête ; les autres fonctionnalités doivent donc vivre dans leurs propres `<script>` séparés.

---

## Conventions de code

- Pas de texte éditorial en dur dans le HTML quand une clé i18n est appropriée.
- CSS organisé en blocs commentés.
- Responsive géré dans les `@media` en bas des feuilles intégrées.
- Préférer des scripts simples et séparés pour les interactions indépendantes.
- Les emojis décoratifs peuvent rester dans le HTML ; le texte utile doit passer par i18n.
- Éviter d'introduire une dépendance ou un outil de build sans demande explicite.
- Quand une modification touche plusieurs pages, vérifier les variantes du même composant sur toutes les pages concernées (nav, footer, palette, langue, boutons).

---

## Ton éditorial

- Professionnel, humain, sobre, constructif.
- Jamais accusateur envers les ONG, financeurs ou associations internationales.
- Valoriser : coopération, ancrage territorial, écoute, compétences locales, approche participative.
- Éviter : ton militant agressif, critique caricaturale du top-down, confusion avec l'humanitaire d'urgence.
- Public cible : ONG, fondations, financeurs, institutions, associations locales, chercheurs.

## Workflow GitHub

- **Nouvelle tâche** → créer une Issue GitHub d'abord.
- **Développement** → travailler sur une branche dédiée. Jamais directement sur `master`.
- **Livraison** → ouvrir une Pull Request, vérifier, puis merger. Jamais de `git push` direct sur `master` pour du nouveau code.

### Convention de nommage des PRs et des branches

Le titre d'une PR doit commencer par un préfixe qui indique la nature du changement :

| Préfixe | Quand l'utiliser |
|---|---|
| `feat:` | Nouvelle fonctionnalité ou nouvelle section |
| `fix:` | Correction d'un bug ou d'un problème visible |
| `content:` | Texte, images, traductions |
| `style:` | CSS / design sans impact sur la logique |
| `chore:` | Maintenance : renommage, réorganisation, compression |
| `docs:` | Mise à jour de la documentation (AGENTS.md, etc.) |

Exemple : `feat: ajouter la section Témoignages sur index.html`

La branche suit le même préfixe : `feat/issue-<n>-<slug>`, `fix/issue-<n>-<slug>`, etc.

Le titre de la PR devient le message du commit sur `master` après merge — il doit être compréhensible seul, sans contexte supplémentaire.

---

## Règles de travail avec l'agent

### Début de chaque nouvelle conversation

Avant toute chose, exécuter systématiquement :

```bash
git fetch origin
git status
```

- Si la branche locale est **en retard** sur `origin/master` → signaler et proposer un `git pull` avant de commencer.
- Si des fichiers sont **modifiés localement sans être commités** → les signaler pour éviter toute confusion sur l'état du code.
- Résumer en une phrase l'état du dépôt ("À jour", "X commits en retard", "Y fichiers modifiés non commités").

### Pour chaque nouvelle tâche — checklist légale

Avant de modifier des données, du contenu ou des fonctionnalités publiques, vérifier :

1. **Données exposées** : les informations publiées sur les organisations se limitent-elles à ce qui est publiquement disponible ? Aucune donnée de prospection interne (priorité, budget, statut, contact ciblé, notes) ne doit apparaître dans les fichiers servis.
2. **RGPD** : la tâche introduit-elle une collecte de données personnelles (email, nom de personne physique, formulaire) ? Si oui, signaler que cela peut nécessiter une politique de confidentialité.
3. **Droits sur les contenus** : tout texte, image ou donnée ajouté doit être soit produit par Linkovia, soit issu de sources publiques et reformulé — jamais copié-collé d'un site tiers.
4. **Mentions légales** : si une nouvelle page est créée, vérifier qu'elle est liée à la page mentions légales (issue #40).
5. **Fichiers sensibles** : avant tout commit, confirmer que `git status` ne liste aucun fichier Excel, CSV, script de prospection ou fichier interne.

### Règles générales

1. Avant une modification significative, expliquer brièvement l'approche proposée et vérifier qu'elle correspond bien à l'intention demandée.
2. Ne modifier que les zones demandées, sauf petites adaptations techniques indispensables.
3. Avant de modifier, regarder l'état réel du dépôt : le code actuel fait foi si la documentation est en retard.
4. Ne pas écraser ou annuler les changements non liés déjà présents dans le dépôt.
5. Après modification, résumer clairement :
   - ce qui a changé,
   - pourquoi,
   - les points à vérifier manuellement.
6. Pour les changements de contenu : mettre à jour le français et l'anglais ensemble.
7. Pour le formulaire de soumission : rester aligné avec `project_submission_specification_v1.md`, sauf consigne explicite contraire.

---

## Points de vigilance connus

- `CLAUDE.md` ne contient plus qu'un import `@AGENTS.md` : toute mise à jour du contexte projet doit donc se faire dans **AGENTS.md** uniquement, jamais dans CLAUDE.md.
- Le CSS est dupliqué entre pages HTML, donc une évolution visuelle peut nécessiter plusieurs modifications coordonnées.
- Le site est volontairement simple : préserver cette simplicité au lieu d'introduire prématurément une architecture lourde.
