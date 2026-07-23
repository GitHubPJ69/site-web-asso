/**
 * projects.js — Études de terrain et projets recensés
 *
 * Pour ajouter un projet : copier un bloc ci-dessous et renseigner tous les champs.
 * - countryCode : code ISO 3166-1 alpha-3 (ex. "KEN", "SEN", "FRA")
 * - status      : needs_support | in_progress | completed_followed
 * - supportNeeds: tableau parmi financial | technical | human | material
 *
 * Visibilité des projets (issue #57) :
 * - publicationDate    : date de mise en ligne, format "AAAA-MM-JJ" (ex. "2026-07-23")
 * - visibilityDuration : durée d'affichage choisie par le porteur, en années : 1, 3 ou 5
 * - expirationDate     : date de retrait = publicationDate + visibilityDuration
 *                        (ex. publié le 2026-07-23 pour 3 ans → "2029-07-23")
 *                        Champ omis (ou vide) = affichage illimité, le projet ne
 *                        disparaît jamais tout seul.
 * Ces dates ne changent rien à l'affichage pour l'instant : le retrait automatique
 * à l'échéance reste à implémenter (issue #57, point 4, décision d'architecture).
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
    title_en: "Community Health Promoter Network",
    country: 'Bolivie',
    country_en: 'Bolivia',
    countryCode: 'BOL',
    region: 'Département de Potosí',
    region_en: 'Department of Potosí',
    city: 'Tupiza',
    lat: -21.44,
    lng: -65.72,
    domain: "Santé et prévention",
    domain_en: "Health and prevention",
    status: 'needs_support',
    supportNeeds: ['financial', 'human'],
    // Visibilité (issue #57) : publié le 23/07/2026 pour 3 ans → expire le 23/07/2029
    publicationDate: '2026-07-23',
    visibilityDuration: 3,
    expirationDate: '2029-07-23',
    summary: "Dans plusieurs communautés rurales isolées du sud du département de Potosí, un groupe de femmes assure déjà informellement le suivi de la santé des familles. Ce projet vise à structurer et équiper ce réseau local existant, sans en changer la logique ni en remplacer les responsables.",
    summary_en: "In several isolated rural communities in the south of the Department of Potosí, a group of women already informally monitors the health of local families. This project aims to structure and equip this existing local network, without altering its logic or replacing those who run it.",
    localNeeds: "Les centres de santé les plus proches se trouvent à plusieurs heures de trajet sur des routes difficiles. Le suivi de la grossesse et de la nutrition des enfants de moins de cinq ans repose presque entièrement sur ces femmes bénévoles, sans formation reconnue ni équipement de base.",
    localNeeds_en: "The nearest health centres are several hours away via difficult roads. Pregnancy monitoring and nutrition follow-up for children under five rely almost entirely on these volunteer women, who have no recognised training and no basic equipment.",
    localResources: "Un groupe de 12 femmes volontaires actives depuis plusieurs années dans 6 communautés rurales. Relation de confiance établie avec les familles. Soutien de principe de la mairie de Tupiza pour une reconnaissance locale du programme.",
    localResources_en: "A group of 12 volunteer women active for several years across 6 rural communities. An established relationship of trust with local families. In-principle support from the Tupiza municipal authority for local recognition of the programme.",
    proposedSupport: "Formation en soins préventifs de base (deux sessions de 5 jours). Trousses de suivi sanitaire (tensiomètres, pèse-bébés, carnets de suivi). Petit budget de fonctionnement pour les déplacements intervillages.",
    localPartners: ["Mairie de Tupiza", "Réseau de femmes Chuyma Aru", "Centre de santé de Tupiza"],
    localPartners_en: ["Tupiza Municipal Authority", "Chuyma Aru Women's Network", "Tupiza Health Centre"],
    targetBeneficiaries: "Environ 380 personnes réparties dans 6 communautés rurales, dont 60 enfants de moins de 5 ans et 18 femmes enceintes ou allaitantes.",
    targetBeneficiaries_en: "Approximately 380 people across 6 rural communities, including 60 children under 5 and 18 pregnant or breastfeeding women.",
    timeline: "Premier contact établi en février 2026. Projet en phase de structuration, sans financement reçu à ce jour.",
    timeline_en: "First contact established in February 2026. Project in structuring phase, with no funding received to date.",
    impact: "Amélioration du suivi nutritionnel et prénatal dans les communautés concernées. Réduction des délais de référencement vers le centre de santé. Reconnaissance formelle du rôle des promotrices au niveau local.",
    impact_en: "Improved nutritional and prenatal monitoring in the communities concerned. Reduced referral times to the health centre. Formal recognition of the promoters' role at the local level.",
    followUp: "Suivi prévu par le centre de santé de Tupiza. Évaluation participative avec les promotrices à 6 et 12 mois.",
    followUp_en: "Follow-up planned by the Tupiza health centre. Participatory evaluation with the promoters at 6 and 12 months."
  }

];
