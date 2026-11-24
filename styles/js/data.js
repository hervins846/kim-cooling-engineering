const INITIAL_MARCHES = [
  {
    code: "MCH-PNR-001",
    client: "ORCA Congo (Projet ORCA)",
    objet: "Construction des systèmes froid et climatisation centralisée",
    type: "Climatisation Centralisée & Confort",
    montant: 54000000,
    avancement: "100% - Livré",
  },
  {
    code: "MCH-PNR-002",
    client: "MSC — Mediterranean Shipping Company (Project NAVIR MSC)",
    objet:
      "Installation frigorifique embarquée pour transport de marchandises périssables",
    type: "Froid Industriel & Naval",
    montant: 68500000,
    avancement: "100% - Livré",
  },
  {
    code: "MCH-PNR-003",
    client: "SARIS Congo",
    objet:
      "Maintenance préventive, contrôle conformité chambres froides & régulation industrielle",
    type: "Contrat Maintenance GMAO",
    montant: 32000000,
    avancement: "65% - En exécution",
  },
  {
    code: "MCH-PNR-004",
    client: "Expertise France — Groupe AFD",
    objet:
      "Programme d’ingénierie, audit énergétique & formation technique HVACR",
    type: "Audit Énergétique & Formation",
    montant: 24500000,
    avancement: "65% - En exécution",
  },
  {
    code: "MCH-PNR-005",
    client: "Campus UCAC-ICAM & ECAM Pointe-Noire",
    objet:
      "Déploiement modules de formation pratique Froid Industriel, CAO & GMAO",
    type: "Partenariat Académique & Technique",
    montant: 15000000,
    avancement: "100% - Livré",
  },
];

const PARTENAIRES_OFFICIELS = [
  {
    nom: "MSC (Mediterranean Shipping Co.)",
    secteur: "Froid Maritime & Conteneurs Frigorifiques (Project NAVIR MSC)",
  },
  {
    nom: "ORCA Congo",
    secteur: "Construction Systèmes Froid & Climatisation (Projet ORCA)",
  },
  {
    nom: "SARIS Congo",
    secteur: "Agro-industrie, Plomberie & Maintenance Industrielle",
  },
  {
    nom: "Expertise France (Groupe AFD)",
    secteur: "Coopération Technique, Énergie & Formation Professionnelle",
  },
  {
    nom: "UCAC-ICAM / ECAM / ESMTCA",
    secteur: "Partenaires Académiques & Excellence Ingénierie",
  },
  {
    nom: "DGC / IS-CPGE-CI / F2E",
    secteur: "Institutions & Entreprises Partenaires",
  },
];

const STOCK_ITEMS = [
  {
    ref: "CMP-BTZ-40",
    nom: "Compresseur Semi-Hermétique Bitzer 40HP",
    cat: "Compression",
    qte: 4,
    seuil: 2,
  },
  {
    ref: "GAZ-R449A",
    nom: "Bouteille Fluide Éco R-449A (12 kg)",
    cat: "Fluide Frigorigène",
    qte: 18,
    seuil: 10,
  },
  {
    ref: "GAZ-R410A",
    nom: "Bouteille Fluide R-410A (11.3 kg)",
    cat: "Fluide Frigorigène",
    qte: 6,
    seuil: 8,
  },
  {
    ref: "REG-DIX-XR",
    nom: "Régulateur Électronique Dixell XR60CX",
    cat: "Automatisme",
    qte: 25,
    seuil: 10,
  },
  {
    ref: "DET-DAN-T2",
    nom: "Détendeur Thermostatique Danfoss T2",
    cat: "Régulation",
    qte: 14,
    seuil: 5,
  },
];
