// Central translations object — add a new language by adding a top-level key.
const translations = {

  fr: {
    nav: {
      role:      "Notre rôle",
      approche:  "Approche",
      carte:     "Carte",
      domaines:  "Domaines",
      contact:   "Contact"
    },
    hero: {
      surtitre:    "Intermédiation &middot; Développement local &middot; Coopération",
      title:       "Comprendre le terrain.<br />Relier les acteurs.<br /><em>Renforcer les projets.</em>",
      subtitle:    "Nous créons du lien entre les initiatives locales et les organisations internationales, pour que les projets de développement soient mieux informés, mieux ancrés et plus utiles aux communautés concernées.",
      btn_primary:   "Découvrir notre approche",
      btn_secondary: "Nous contacter"
    },
    role: {
      tag:      "Notre rôle",
      title:    "Une passerelle entre le terrain<br />et les acteurs de soutien",
      lead:     "Nous ne remplaçons pas les acteurs locaux ni les organisations internationales. Nous renforçons la qualité du lien entre eux, pour que chaque projet soit mieux adapté aux réalités du territoire.",
      c1_title: "Côté terrain",
      c1_text:  "Nous rencontrons les personnes et organisations locales, documentons leurs initiatives, identifions leurs compétences et comprenons les dynamiques à l'œuvre sur le territoire.",
      c2_title: "Intermédiation",
      c2_text:  "Nous facilitons le dialogue entre acteurs locaux et organisations internationales, afin que la coopération repose sur une compréhension mutuelle et partagée des enjeux.",
      c3_title: "Côté partenaires",
      c3_text:  "Nous produisons des analyses utiles à la décision : rapports de terrain, cartographies d'acteurs, notes stratégiques à destination des financeurs, ONG et fondations."
    },
    approche: {
      tag:      "Notre approche",
      title:    "Comprendre le terrain pour mieux connecter les acteurs",
      lead:     "Un écart structurel existe souvent entre les ressources disponibles et les initiatives locales qui pourraient en bénéficier. Nous intervenons dans cet espace : écouter, documenter, connecter.",
      constat1: "De nombreuses organisations internationales disposent de ressources importantes et recherchent des projets pertinents, crédibles et ancrés localement. Elles souhaitent soutenir des initiatives qui produisent un impact réel et durable.",
      constat2: "Dans le même temps, de nombreux acteurs locaux portent des projets concrets fondés sur une connaissance fine de leur territoire, mais manquent parfois de visibilité, de réseau ou d'accompagnement pour accéder aux ressources nécessaires.",
      flux_left_title:   "Organisations & financeurs",
      flux_left_1:       "Ressources financières",
      flux_left_2:       "Expertises techniques",
      flux_left_3:       "Réseaux internationaux",
      flux_left_4:       "Capacités matérielles",
      flux_center_title: "Intermédiation de terrain",
      flux_center_1:     "Écoute & diagnostic",
      flux_center_2:     "Documentation locale",
      flux_center_3:     "Mise en relation",
      flux_center_4:     "Suivi & co-construction",
      flux_right_title:  "Initiatives locales",
      flux_right_1:      "Connaissance du terrain",
      flux_right_2:      "Besoins identifiés",
      flux_right_3:      "Compétences locales",
      flux_right_4:      "Dynamiques collectives",
      piliers_titre: "Ce que nous faisons",
      p1_title: "Cartographier les acteurs",
      p1_text:  "Identifier qui fait quoi sur le territoire.",
      p2_title: "Créer du lien",
      p2_text:  "Connecter initiatives locales et partenaires.",
      p3_title: "Documenter l'existant",
      p3_text:  "Valoriser compétences et ressources locales.",
      p4_title: "Co-construire",
      p4_text:  "Appuyer la conception de projets ancrés.",
      conclusion: "Les solutions durables émergent souvent des réalités locales elles-mêmes.",
    },
    domaines: {
      tag:   "Domaines d'intervention",
      title: "Domaines d'intervention",
      intro: "Nous accompagnons des projets de développement ancrés localement, construits avec les personnes concernées, les associations locales et les partenaires de terrain. Ces domaines peuvent évoluer selon les besoins identifiés, les compétences locales disponibles et les dynamiques propres à chaque territoire.",
      d1_title: "Sécurité alimentaire",
      d1_ex:    "Production locale, nutrition, élevage, agriculture durable, transformation alimentaire, circuits courts.",
      d2_title: "Eau et assainissement",
      d2_ex:    "Captage et forages, accès à l'eau potable, traitement de l'eau, assainissement, hygiène, gestion durable de la ressource.",
      d3_title: "Environnement et climat",
      d3_ex:    "Gestion des déchets, reforestation, dépollution, protection des océans, rivières et lacs, protection des écosystèmes, adaptation au changement climatique.",
      d4_title: "Accès à l'énergie",
      d4_ex:    "Énergies renouvelables, solaire, biogaz, foyers améliorés, solutions locales d'électrification, autonomie énergétique.",
      d5_title: "Éducation et apprentissage",
      d5_ex:    "Petite enfance, accès au matériel pédagogique adapté, accompagnement scolaire, construction d'infrastructures éducatives.",
      d6_title: "Santé et prévention",
      d6_ex:    "Prévention des risques sanitaires, accès aux soins, distribution de médicaments, dispensaires, vaccination, santé maternelle, santé communautaire.",
      d7_title: "Activités économiques et autonomisation",
      d7_ex:    "Insertion professionnelle, formation, entrepreneuriat, autonomisation des femmes, développement de filières locales, micro-activités.",
      d8_title: "Loisirs, culture et lien social",
      d8_ex:    "Activités sportives, culturelles, espaces collectifs, accès aux loisirs, cohésion sociale.",
      d9_title: "Économie et finance solidaire",
      d9_ex:    "Microcrédit, épargne communautaire, mutuelles, inclusion financière, coopératives, circuits économiques locaux.",
      d10_title: "Protection sociale et accompagnement",
      d10_ex:   "Protection de l'enfance, accompagnement psychosocial, soutien aux familles, travail social de proximité, lutte contre les exclusions.",
      voir_plus: "Voir plus",
      voir_moins: "Voir moins",
      conclusion: "Ces interventions peuvent être développées grâce à des partenariats, des coopérations décentralisées ou des démarches de terrain participatives. L'objectif est de construire ensemble, avec les personnes et organisations concernées, en combinant réponse aux besoins immédiats, durabilité et renforcement des capacités locales.",
      nexus: "Lorsque le contexte l'exige, certains projets peuvent s'inscrire dans une approche nexus, en articulant réponse aux besoins, développement durable, résilience locale et prévention des crises."
    },
    principes: {
      tag:      "Nos principes",
      title:    "Ce qui guide notre démarche",
      lead:     "Nos engagements définissent concrètement la façon dont nous travaillons avec chacun de nos partenaires, sur chaque territoire.",
      p1_title: "Écoute active",
      p1_text:  "Nous pratiquons une écoute intentionnelle et structurée. Comprendre d'abord, proposer ensuite.",
      p2_title: "Non-substitution",
      p2_text:  "Nous n'agissons pas à la place des acteurs locaux. Nous les écoutons, les documentons et les mettons en valeur.",
      p3_title: "Approche participative",
      p3_text:  "Les personnes concernées sont associées à la démarche, pas seulement observées ou interrogées.",
      p4_title: "Transparence",
      p4_text:  "Nos méthodes, nos sources et nos conclusions sont clairement exposées à nos partenaires.",
      p5_title: "Utilité concrète",
      p5_text:  "Chaque mission produit des livrables directement utilisables par les organisations qui nous sollicitent.",
      p6_title: "Coopération durable",
      p6_text:  "Nous privilégions des partenariats de long terme, fondés sur la confiance et la réciprocité.",
      p7_title: "Neutralité",
      p7_text:  "Équidistants de toutes les parties : c'est ce qui fonde notre crédibilité d'intermédiaire.",
      p8_title: "Facilitation",
      p8_text:  "Nous créons les conditions du dialogue : chaque rencontre entre acteurs est pensée, préparée et animée."
    },
    carte: {
      tag:         "Cartographie mondiale",
      title:       "Cartographie des initiatives et études de terrain",
      intro:       "Chaque mission de terrain contribue à documenter des réalités locales, identifier des besoins, valoriser des initiatives existantes et créer des passerelles entre acteurs locaux et partenaires internationaux.",
      note:        "Les projets évoluent dans le temps : certains nécessitent encore un accompagnement, d'autres sont déjà autonomes ou suivis localement. Cette plateforme vise à favoriser les coopérations et les partenariats durables.",
      btn_reset:   "← Vue mondiale",
      legend_needs:    "Soutien recherché",
      legend_progress: "En cours",
      legend_done:     "Terminé / suivi",
      panel_country_intro: "projet(s) référencé(s)",
      panel_no_projects:   "Aucun projet référencé dans ce pays pour l'instant.",
      panel_close:  "Fermer",
      panel_back:   "← Retour",
      panel_domain:          "Domaine",
      panel_status:          "Statut",
      panel_needs_label:     "Soutien recherché",
      panel_summary:         "Résumé",
      panel_local_needs:     "Besoins identifiés",
      panel_local_resources: "Ressources et compétences locales",
      panel_partners:        "Partenaires locaux",
      panel_beneficiaries:   "Bénéficiaires",
      panel_impact:          "Impact attendu",
      panel_followup:        "Suivi prévu",
      panel_btn_support: "Proposer un soutien",
      panel_btn_contact: "Nous contacter",
      support_financial: "Financier",
      support_technical: "Technique",
      support_human:     "Humain",
      support_material:  "Matériel",
      status_needs:    "Soutien recherché",
      status_progress: "En cours",
      status_done:     "Terminé / suivi",
      loading:       "Chargement du globe…",
      tab_carte:     "Carte",
      tab_projets:   "Projets",
      btn_projets:   "Liste des projets",
      carte_idle:    "Cliquez sur un point ou un pays pour afficher les détails d'un projet.",
      projets_empty: "Aucun projet renseigné pour l'instant.",
      projets_back:  "← Liste des projets"
    },
    contact: {
      tag:         "Contact",
      title:       "Échangeons sur votre territoire<br />ou votre projet",
      intro_title: "Vous&nbsp;êtes&hellip;",
      intro_text:  "Que vous représentiez une ONG, une fondation, un financeur de projets, une institution ou une initiative locale — nous sommes disponibles pour discuter d'une collaboration, d'une mission de terrain ou d'un projet en cours de réflexion.",
      prof1: "Une ONG ou association internationale",
      prof2: "Un financeur ou une fondation",
      prof3: "Une initiative ou un collectif local",
      prof4: "Un chercheur ou un acteur de la coopération",
      prof5: "Une institution ou collectivité",
      f_name:    "Nom ou organisation",
      f_email:   "Adresse e-mail",
      f_profile: "Votre profil",
      f_opt1:    "ONG / Association internationale",
      f_opt2:    "Fondation / Financeur",
      f_opt3:    "Initiative locale",
      f_opt4:    "Institution / Collectivité",
      f_opt5:    "Chercheur / Étudiant",
      f_opt6:    "Autre",
      f_country: "Pays ou territoire concerné (optionnel)",
      f_message: "Décrivez votre projet ou votre demande...",
      f_submit:  "Envoyer le message &rsaquo;"
    },
    footer: {
      text: "&copy; 2026 PontLocal &middot; Intermédiation pour le développement local et la coopération internationale"
    }
  },

  en: {
    nav: {
      role:      "Our role",
      approche:  "Approach",
      carte:     "Map",
      domaines:  "Domains",
      contact:   "Contact"
    },
    hero: {
      surtitre:    "Intermediation &middot; Local Development &middot; Cooperation",
      title:       "Understanding the field.<br />Connecting actors.<br /><em>Strengthening projects.</em>",
      subtitle:    "We build bridges between local initiatives and international organisations, so that development projects are better informed, better rooted, and more useful to the communities they concern.",
      btn_primary:   "Discover our approach",
      btn_secondary: "Contact us"
    },
    role: {
      tag:      "Our role",
      title:    "A bridge between the field<br />and supporting organisations",
      lead:     "We do not replace local actors or international organisations. We strengthen the quality of the link between them, so that each project is better suited to the realities of the territory.",
      c1_title: "Field side",
      c1_text:  "We meet local people and organisations, document their initiatives, identify their expertise, and understand the dynamics at work on the ground.",
      c2_title: "Intermediation",
      c2_text:  "We facilitate dialogue between local actors and international organisations, so that cooperation is grounded in a mutual and shared understanding of the issues at stake.",
      c3_title: "Partner side",
      c3_text:  "We produce decision-useful analysis: field reports, stakeholder mapping, strategic briefs for funders, NGOs and foundations."
    },
    approche: {
      tag:      "Our approach",
      title:    "Understanding the field to better connect actors",
      lead:     "A structural gap often exists between available resources and the local initiatives that could benefit from them. We operate in that space: listening, documenting, connecting.",
      constat1: "Many international organisations have significant resources and are actively looking for relevant, credible, locally-rooted projects. They want to support initiatives that produce real and lasting impact.",
      constat2: "At the same time, many local actors are carrying concrete projects built on in-depth knowledge of their territory, but sometimes lack the visibility, networks or support to access the resources they need.",
      flux_left_title:   "Organisations & funders",
      flux_left_1:       "Financial resources",
      flux_left_2:       "Technical expertise",
      flux_left_3:       "International networks",
      flux_left_4:       "Material capacity",
      flux_center_title: "Field intermediation",
      flux_center_1:     "Listening & diagnosis",
      flux_center_2:     "Local documentation",
      flux_center_3:     "Connection & matching",
      flux_center_4:     "Monitoring & co-design",
      flux_right_title:  "Local initiatives",
      flux_right_1:      "Field knowledge",
      flux_right_2:      "Identified needs",
      flux_right_3:      "Local skills",
      flux_right_4:      "Collective dynamics",
      piliers_titre: "What we do",
      p1_title: "Mapping actors",
      p1_text:  "Identifying who does what on the ground.",
      p2_title: "Building connections",
      p2_text:  "Linking local initiatives with international partners.",
      p3_title: "Documenting what exists",
      p3_text:  "Giving visibility to local expertise and resources.",
      p4_title: "Co-designing",
      p4_text:  "Supporting the design of grounded projects.",
      conclusion: "Sustainable solutions often emerge from local realities themselves.",
    },
    domaines: {
      tag:   "Areas of intervention",
      title: "Areas of intervention",
      intro: "We support locally rooted development projects, built with the people concerned, local associations and field partners. These areas may evolve according to identified needs, locally available expertise and the specific dynamics of each territory.",
      d1_title: "Food security",
      d1_ex:    "Local production, livestock, sustainable agriculture, food processing, short supply chains.",
      d2_title: "Water and sanitation",
      d2_ex:    "Water catchment and drilling, access to drinking water, water treatment, sanitation, hygiene, sustainable resource management.",
      d3_title: "Environment and climate",
      d3_ex:    "Waste management, reforestation, decontamination, protection of oceans, rivers and lakes, ecosystem protection, climate change adaptation.",
      d4_title: "Access to energy",
      d4_ex:    "Renewable energy, solar power, biogas, improved cookstoves, local electrification solutions, energy autonomy.",
      d5_title: "Education and learning",
      d5_ex:    "Early childhood, access to suitable educational materials, academic support, construction of educational infrastructure.",
      d6_title: "Health and prevention",
      d6_ex:    "Health risk prevention, access to healthcare, medicine distribution, dispensaries, vaccination, maternal health, community health.",
      d7_title: "Economic activities and empowerment",
      d7_ex:    "Professional integration, training, entrepreneurship, women's empowerment, local value chain development, micro-activities.",
      d8_title: "Leisure, culture and social bonds",
      d8_ex:    "Sports and cultural activities, communal spaces, access to leisure, social cohesion.",
      d9_title: "Solidarity economy and finance",
      d9_ex:    "Microcredit, community savings, mutual funds, financial inclusion, cooperatives, local economic circuits.",
      d10_title: "Social protection and support",
      d10_ex:   "Child protection, psychosocial support, family assistance, community social work, tackling exclusion.",
      voir_plus: "Show more",
      voir_moins: "Show less",
      conclusion: "These interventions can be developed through partnerships, decentralised cooperation or participatory field approaches. The aim is to build together, with the people and organisations concerned, combining immediate needs response, sustainability and local capacity building.",
      nexus: "When the context calls for it, some projects may adopt a nexus approach, combining needs response, sustainable development, local resilience and crisis prevention."
    },
    principes: {
      tag:      "Our principles",
      title:    "What guides our work",
      lead:     "Our commitments define concretely how we work with each of our partners, in every territory.",
      p1_title: "Active listening",
      p1_text:  "We practise intentional, structured listening. Understand first, propose second.",
      p2_title: "Non-substitution",
      p2_text:  "We do not act in place of local actors. We listen to them, document their work, and give them visibility.",
      p3_title: "Participatory approach",
      p3_text:  "The people concerned are part of the process — not merely observed or interviewed.",
      p4_title: "Transparency",
      p4_text:  "Our methods, sources and conclusions are clearly shared with our partners.",
      p5_title: "Concrete usefulness",
      p5_text:  "Every mission produces deliverables that the organisations we work with can use directly.",
      p6_title: "Lasting cooperation",
      p6_text:  "We favour long-term partnerships built on trust and reciprocity.",
      p7_title: "Neutrality",
      p7_text:  "Equidistant from all parties: that is what establishes our credibility as an intermediary.",
      p8_title: "Facilitation",
      p8_text:  "We create the conditions for dialogue: every encounter between actors is designed, prepared and facilitated."
    },
    carte: {
      tag:         "World map",
      title:       "Map of field initiatives and studies",
      intro:       "Each field mission contributes to documenting local realities, identifying needs, highlighting existing initiatives and building bridges between local actors and international partners.",
      note:        "Projects evolve over time: some still need support, others are already autonomous or monitored locally. This platform aims to foster lasting cooperation and partnerships.",
      btn_reset:   "← World view",
      legend_needs:    "Support needed",
      legend_progress: "In progress",
      legend_done:     "Completed / monitored",
      panel_country_intro: "project(s) on record",
      panel_no_projects:   "No projects on record for this country yet.",
      panel_close:  "Close",
      panel_back:   "← Back",
      panel_domain:          "Domain",
      panel_status:          "Status",
      panel_needs_label:     "Support needed",
      panel_summary:         "Summary",
      panel_local_needs:     "Identified needs",
      panel_local_resources: "Local resources and expertise",
      panel_partners:        "Local partners",
      panel_beneficiaries:   "Beneficiaries",
      panel_impact:          "Expected impact",
      panel_followup:        "Follow-up plan",
      panel_btn_support: "Offer support",
      panel_btn_contact: "Contact us",
      support_financial: "Financial",
      support_technical: "Technical",
      support_human:     "Human",
      support_material:  "Material",
      status_needs:    "Support needed",
      status_progress: "In progress",
      status_done:     "Completed / monitored",
      loading:       "Loading globe…",
      tab_carte:     "Map",
      tab_projets:   "Projects",
      btn_projets:   "Project list",
      carte_idle:    "Click on a point or a country to display project details.",
      projets_empty: "No projects listed yet.",
      projets_back:  "← Project list"
    },
    contact: {
      tag:         "Contact",
      title:       "Let's talk about your territory<br />or your project",
      intro_title: "You&nbsp;are&hellip;",
      intro_text:  "Whether you represent an NGO, a foundation, a project funder, an institution or a local initiative — we are available to discuss a collaboration, a field mission or a project under consideration.",
      prof1: "An NGO or international association",
      prof2: "A funder or foundation",
      prof3: "A local initiative or collective",
      prof4: "A researcher or cooperation professional",
      prof5: "An institution or local authority",
      f_name:    "Name or organisation",
      f_email:   "Email address",
      f_profile: "Your profile",
      f_opt1:    "NGO / International association",
      f_opt2:    "Foundation / Funder",
      f_opt3:    "Local initiative",
      f_opt4:    "Institution / Local authority",
      f_opt5:    "Researcher / Student",
      f_opt6:    "Other",
      f_country: "Country or territory concerned (optional)",
      f_message: "Describe your project or your request...",
      f_submit:  "Send message &rsaquo;"
    },
    footer: {
      text: "&copy; 2026 PontLocal &middot; Intermediation for local development and international cooperation"
    }
  }

};

// --- Engine ---

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? null;
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  // Inject text into all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getNestedValue(translations[lang], el.dataset.i18n);
    if (val !== null) el.innerHTML = val;
  });

  // Inject placeholder text into form fields
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = getNestedValue(translations[lang], el.dataset.i18nPlaceholder);
    if (val !== null) el.placeholder = val;
  });

  // Sync <html lang> attribute
  document.documentElement.lang = lang;

  // Update active state on switcher buttons
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
  // Notify other scripts (e.g. globe panel) that language changed
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// --- Init ---

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Use saved preference, fall back to French
  setLanguage(localStorage.getItem('lang') || 'fr');
});
