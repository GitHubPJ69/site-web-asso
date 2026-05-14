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

  // ─── BOLIVIE (PROJET FICTIF ILLUSTRATIF) ─────────────────────────────────────
  {
    id: 'bol-sante-001',
    fictional: true,
    continent: 'south_america',
    title: "Réseau de promotrices de santé communautaire",
    country: 'Bolivie',
    countryCode: 'BOL',
    region: 'Département de Potosí',
    city: 'Tupiza',
    lat: -21.44,
    lng: -65.72,
    domain: "Santé et prévention",
    status: 'needs_support',
    supportNeeds: ['financial', 'human'],
    summary: "Dans plusieurs communautés rurales isolées du sud du département de Potosí, un groupe de femmes assure déjà informellement le suivi de la santé des familles. Ce projet vise à structurer et équiper ce réseau local existant, sans en changer la logique ni en remplacer les responsables.",
    localNeeds: "Les centres de santé les plus proches se trouvent à plusieurs heures de trajet sur des routes difficiles. Le suivi de la grossesse et de la nutrition des enfants de moins de cinq ans repose presque entièrement sur ces femmes bénévoles, sans formation reconnue ni équipement de base.",
    localResources: "Un groupe de 12 femmes volontaires actives depuis plusieurs années dans 6 communautés rurales. Relation de confiance établie avec les familles. Soutien de principe de la mairie de Tupiza pour une reconnaissance locale du programme.",
    proposedSupport: "Formation en soins préventifs de base (deux sessions de 5 jours). Trousses de suivi sanitaire (tensiomètres, pèse-bébés, carnets de suivi). Petit budget de fonctionnement pour les déplacements intervillages.",
    localPartners: ["Mairie de Tupiza", "Réseau de femmes Chuyma Aru", "Centre de santé de Tupiza"],
    targetBeneficiaries: "Environ 380 personnes réparties dans 6 communautés rurales, dont 60 enfants de moins de 5 ans et 18 femmes enceintes ou allaitantes.",
    timeline: "Premier contact établi en février 2026. Projet en phase de structuration — aucun financement reçu à ce jour.",
    impact: "Amélioration du suivi nutritionnel et prénatal dans les communautés concernées. Réduction des délais de référencement vers le centre de santé. Reconnaissance formelle du rôle des promotrices au niveau local.",
    followUp: "Suivi prévu par le centre de santé de Tupiza. Évaluation participative avec les promotrices à 6 et 12 mois."
  }

];
