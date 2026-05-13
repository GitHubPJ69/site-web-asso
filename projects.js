/**
 * projects.js — Études de terrain et projets recensés
 *
 * Pour ajouter un projet : copier un bloc ci-dessous et renseigner tous les champs.
 * - countryCode : code ISO 3166-1 alpha-3 (ex. "KEN", "SEN", "FRA")
 * - status      : needs_support | in_progress | completed_followed
 * - supportNeeds: tableau parmi financial | technical | human | material
 */

// Couleurs des statuts — partagées avec le script globe
const STATUS_COLORS = {
  needs_support:      '#FF7A1A',  // orange vif
  in_progress:        '#00C893',  // vert électrique
  completed_followed: '#38AAFF'   // bleu ciel
};

const projects = [

  // ─── KENYA ──────────────────────────────────────────────────────────────────
  {
    id: 'ken-water-001',
    title: "Accès à l'eau potable en zone périurbaine",
    country: 'Kenya',
    countryCode: 'KEN',
    region: 'Comté de Kiambu',
    city: 'Nairobi',
    lat: -1.286,
    lng: 36.817,
    domain: "Eau et assainissement",
    status: 'needs_support',
    supportNeeds: ['financial', 'technical'],
    summary: "Plusieurs villages périurbains du comté de Kiambu sont confrontés à un accès insuffisant à l'eau potable. Une étude de terrain a permis d'identifier les besoins prioritaires et les dynamiques locales existantes.",
    localNeeds: "Points d'eau sûrs insuffisants, distances importantes à parcourir, forte prévalence des maladies hydriques en saison des pluies.",
    localResources: "Un comité local de gestion de l'eau actif depuis 2 ans. Plusieurs jeunes volontaires disponibles pour la maintenance des infrastructures.",
    proposedSupport: "Financement pour la construction de 4 bornes-fontaines. Appui technique pour la conception et le suivi des infrastructures.",
    localPartners: ["Comité eau de Kiambu", "Association MAJI Community"],
    targetBeneficiaries: "Environ 2 000 habitants répartis dans 4 villages périurbains.",
    timeline: "Étude de terrain réalisée en janvier 2026.",
    impact: "Réduction estimée à 60 % des maladies hydriques. Gain de temps significatif pour les femmes et les enfants.",
    followUp: "Suivi trimestriel prévu avec le comité local. Rapport annuel transmis aux partenaires financeurs."
  },

  // ─── SÉNÉGAL ─────────────────────────────────────────────────────────────────
  {
    id: 'sen-edu-001',
    title: "Appui à la scolarisation en zone rurale",
    country: 'Senegal',
    countryCode: 'SEN',
    region: 'Région de Kaolack',
    city: 'Kaolack',
    lat: 14.152,
    lng: -16.072,
    domain: "Éducation et apprentissage",
    status: 'in_progress',
    supportNeeds: ['material'],
    summary: "Un partenariat avec une association locale et une commune sénégalaise soutient l'accès à l'éducation dans plusieurs villages ruraux peu desservis.",
    localNeeds: "Manque de matériel pédagogique, classes surchargées, faible taux de scolarisation des filles après 10 ans.",
    localResources: "Réseau d'enseignants volontaires actif. Association de parents d'élèves structurée et engagée. Local communautaire disponible.",
    proposedSupport: "Fourniture de matériel pédagogique et de mobilier scolaire. Mise en relation avec des organismes de formation pédagogique.",
    localPartners: ["Association Jangal Bi", "Commune de Kaolack", "APES Sénégal"],
    targetBeneficiaries: "350 enfants scolarisés dans 3 villages ruraux, dont 180 filles.",
    timeline: "Partenariat établi en octobre 2025. Première livraison de matériel en mars 2026.",
    impact: "Taux de scolarisation des filles en hausse de 12 % depuis le début du partenariat.",
    followUp: "Suivi mensuel avec l'association locale. Évaluation annuelle co-construite avec les familles."
  },

  // ─── MADAGASCAR ──────────────────────────────────────────────────────────────
  {
    id: 'mdg-food-001',
    title: "Renforcement de la sécurité alimentaire",
    country: 'Madagascar',
    countryCode: 'MDG',
    region: 'Région Analamanga',
    city: 'Antananarivo',
    lat: -18.914,
    lng: 47.536,
    domain: "Sécurité alimentaire",
    status: 'needs_support',
    supportNeeds: ['financial', 'technical', 'material'],
    summary: "Des coopératives agricoles locales cherchent à développer une filière maraîchère durable permettant l'approvisionnement des marchés locaux et la réduction de la dépendance aux importations.",
    localNeeds: "Accès limité aux semences améliorées, manque de matériel d'irrigation, circuits de distribution peu structurés.",
    localResources: "3 coopératives actives regroupant 120 agriculteurs. Fort savoir-faire traditionnel. Terres arables disponibles.",
    proposedSupport: "Financement pour semences et équipements d'irrigation. Accompagnement en agronomie durable. Mise en relation avec des acheteurs institutionnels.",
    localPartners: ["Coopérative Tantsaha", "Association Fihavanana", "Direction régionale de l'agriculture"],
    targetBeneficiaries: "120 agriculteurs et leurs familles, soit environ 600 personnes.",
    timeline: "Étude réalisée en novembre 2025. Démarrage du projet prévu au premier semestre 2026.",
    impact: "Augmentation estimée de 40 % des revenus agricoles. Réduction de l'insécurité alimentaire pour 600 personnes.",
    followUp: "Accompagnement sur 18 mois. Bilan intermédiaire à 9 mois avec les coopératives."
  },

  // ─── COLOMBIE ────────────────────────────────────────────────────────────────
  {
    id: 'col-eco-001',
    title: "Insertion économique des jeunes",
    country: 'Colombia',
    countryCode: 'COL',
    region: "Département d'Antioquia",
    city: 'Medellín',
    lat: 6.244,
    lng: -75.574,
    domain: "Activités économiques locales",
    status: 'completed_followed',
    supportNeeds: [],
    summary: "Un programme de formation professionnelle et d'accompagnement à l'entrepreneuriat local a permis à 85 jeunes de quartiers défavorisés d'accéder à une activité économique durable.",
    localNeeds: "Taux de chômage élevé chez les 18-30 ans. Peu d'accès aux formations qualifiantes. Manque de modèles entrepreneuriaux locaux.",
    localResources: "Réseau dense d'associations de quartier. Mairie engagée dans la réinsertion. Plusieurs micro-entreprises locales prêtes à accueillir des stagiaires.",
    proposedSupport: "Projet terminé. Suivi de la pérennité des activités créées.",
    localPartners: ["Fundación Génesis", "Alcaldía de Medellín", "Réseau d'entreprises REEL"],
    targetBeneficiaries: "85 jeunes formés, dont 60 % ont créé ou rejoint une micro-activité économique.",
    timeline: "Programme réalisé de janvier à décembre 2025. Suivi en cours.",
    impact: "68 % des participants en activité économique 6 mois après la formation. 12 micro-entreprises créées.",
    followUp: "Suivi semestriel pendant 2 ans. Rapport annuel transmis aux partenaires."
  }

];
