const TICKER_ITEMS = [
  "KIM-COOLING • Fondée en 2017 à Pointe-Noire par Dorsel Kimbouala-Ngoma",
  "Project ORCA : Construction des systèmes froid et climatisation",
  "Project NAVIR MSC : Installation frigorifique maritime",
  "Vision de l'entreprise : Unité frigorifique & panneaux solaires",
  "Mission et valeurs : Intégrité, qualité & formation • +242 06 417 49 49"
];

const PARTNERS = [
  { code: "MSC", name: "MSC", role: "Maritime & Réfrigération" },
  { code: "ORCA", name: "ORCA", role: "Froid & Climatisation" },
  { code: "EF", name: "Expertise France", role: "Groupe AFD" },
  { code: "UCAC", name: "UCAC-ICAM", role: "Enseignement Supérieur" },
  { code: "ESM", name: "ESMTCA", role: "École Supérieure" },
  { code: "ECAM", name: "ECAM", role: "Partenaire Académique" },
  { code: "CPGE", name: "IS-CPGE-CI", role: "Institut Supérieur" },
  { code: "F2E", name: "F2E", role: "Partenaire Technique" }
];

const SERVICES = [
  {
    tag: "Climatisation",
    title: "Installation de systèmes de climatisation",
    desc: "Mise en place de climatiseurs split, multi-split, systèmes de climatisation centralisée et solutions adaptées aux besoins spécifiques des clients."
  },
  {
    tag: "Réfrigération HVAC",
    title: "Installation de systèmes de réfrigération HVAC",
    desc: "Installation de chambres froides, vitrines réfrigérées et systèmes de réfrigération pour l'agroalimentaire, la pharmacie, etc."
  },
  {
    tag: "Maintenance",
    title: "Maintenance préventive & corrective",
    desc: "Services réguliers pour vérifier, nettoyer et réparer les composants des systèmes de climatisation et de réfrigération afin d'éviter les pannes futures."
  },
  {
    tag: "Audit Énergétique",
    title: "Audit énergétique et conseils",
    desc: "Évaluation de l'efficacité énergétique des installations existantes et recommandations pour améliorer les performances et réduire les coûts d'exploitation."
  },
  {
    tag: "Équipements",
    title: "Vente et fourniture d'équipements",
    desc: "Offre d'équipements de climatisation et de réfrigération : compresseurs industriels, postes à souder, outillage de maintenance froid."
  },
  {
    tag: "Conformité",
    title: "Expertise et contrôle des conformités des chambres froides",
    desc: "Étude, contrôle et réalisation des travaux de plomberie industrielle, maintenance industrielle et maintenance multi-technique."
  }
];

const PROJECTS = [
  {
    title: "Project ORCA : Construction des systèmes froid et climatisation",
    category: "industriel",
    image: "actifs/projet-orca.jpg",
    fallbackLabel: "PROJECT ORCA • FROID & CLIMATISATION",
    badge: "Grand Compte • Climatisation & Froid",
    desc: "En répondant de manière adéquate aux besoins, garantie du confort et de la satisfaction des clients et du personnel, de la qualité et de la sécurité des produits, avec optimisation des coûts énergétiques et respect des normes environnementales."
  },
  {
    title: "Project NAVIR MSC : Installation frigorifique",
    category: "maritime",
    image: "actifs/projet-msc.jpg",
    fallbackLabel: "NAVIR MSC • INSTALLATION FRIGORIFIQUE",
    badge: "Maritime • Réfrigération",
    desc: "Conception, installation et maintenance de systèmes de réfrigération sur un navire de la Mediterranean Shipping Company (MSC) pour garantir la conservation et le transport sécurisé des marchandises périssables."
  },
  {
    title: "Vision de l'entreprise : Unité Frigorifique & Panneaux Solaires",
    category: "solaire",
    image: "actifs/histoire-solaire.jpg",
    fallbackLabel: "VISION • PANNEAUX SOLAIRES",
    badge: "Vision • Énergie & Froid Durable",
    desc: "Déploiement de solutions frigorifiques éco-responsables combinant efficacité énergétique et panneaux solaires pour accompagner les projets durables en République du Congo et dans la région."
  }
];

const FORMATIONS = [
  { title: "Climatisation centrale (en module)", duration: "2/6 mois", level: "BAC - LICENCE - MASTER", desc: "Installation, entretien, diagnostic et réparation de systèmes de climatisation centralisés (résidentiel, commercial, industriel)." },
  { title: "Froid auto", duration: "2/6 mois", level: "BAC - LICENCE - MASTER", desc: "Installation, entretien, diagnostic et réparation des systèmes de climatisation automobile." },
  { title: "Froid ménager", duration: "3/6 mois", level: "BAC - LICENCE - MASTER", desc: "Installation, entretien, diagnostic et réparation des équipements de réfrigération domestique." },
  { title: "Dessin et conception assistées à l'ordinateur", duration: "3/6 mois", level: "BAC", desc: "Création, modification et visualisation de dessins techniques et modèles avec logiciels spécialisés (CAO)." },
  { title: "Climatisation de confort", duration: "4/6 mois", level: "BAC - LICENCE - MASTER", desc: "Installation, entretien et réparation de systèmes de climatisation pour maisons, bureaux et bâtiments commerciaux." },
  { title: "Froid industriel et commercial", duration: "6 mois", level: "BAC", desc: "Conception, installation, entretien et dépannage des systèmes de réfrigération industrielle et commerciale." },
  { title: "Système froid et climatisation HVAC", duration: "6 mois", level: "BAC", desc: "Compétences complètes pour installer, entretenir, diagnostiquer et réparer les systèmes HVAC." },
  { title: "Électricité", duration: "6 mois", level: "BAC", desc: "Intervention sécurisée et efficace sur les systèmes électriques résidentiels, commerciaux et industriels." },
  { title: "Automatisme et instrumentation", duration: "6 mois", level: "BAC", desc: "Conception, installation, entretien et dépannage des systèmes automatisés et instruments de mesure." },
  { title: "Mécanique énergétique", duration: "6 mois", level: "BAC", desc: "Compréhension, conception, analyse et optimisation des systèmes liés à la production, conversion et utilisation de l'énergie." },
  { title: "Audit énergétique", duration: "6 mois", level: "BAC", desc: "Évaluation et optimisation de l'efficacité énergétique dans les bâtiments, industries et infrastructures." },
  { title: "Gestion de projet", duration: "3/6 mois", level: "BAC - LICENCE - MASTER", desc: "Planification, organisation et pilotage de projets techniques (installation, maintenance, travaux) dans le respect des délais, coûts et qualité." }
];

function makeFallbackDataUri(label) {
  const safe = String(label || "KIM-COOLING").slice(0, 34).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient></defs>
    <rect width="600" height="340" fill="url(#g)"/>
    <circle cx="515" cy="70" r="90" fill="#f97316" fill-opacity="0.22"/>
    <text x="36" y="155" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800">${safe}</text>
    <text x="36" y="192" fill="#bae6fd" font-family="Segoe UI, Arial, sans-serif" font-size="16">KIM-COOLING • Pointe-Noire</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", function onErr() {
    this.onerror = null;
    this.src = makeFallbackDataUri(this.dataset.fallback || this.alt);
  });
});

const tickerTrack = document.getElementById("ticker-track");
if (tickerTrack) {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];
  tickerTrack.innerHTML = repeated.map((t) => `<span class="ticker-item"><span class="pulse-dot"></span>${t}</span>`).join("");
}

const partnerMarquee = document.getElementById("partner-marquee");
if (partnerMarquee) {
  const doubled = [...PARTNERS, ...PARTNERS];
  partnerMarquee.innerHTML = doubled.map((p) => `
    <div class="logo-tile">
      <span class="logo-emblem">${p.code}</span>
      <div>
        <div class="logo-name">${p.name}</div>
        <div class="logo-role">${p.role}</div>
      </div>
    </div>
  `).join("");
}

const servicesGrid = document.getElementById("services-grid");
if (servicesGrid) {
  servicesGrid.innerHTML = SERVICES.map((s) => `
    <article class="item-card hover-lift">
      <span class="item-tag">${s.tag}</span>
      <h3>${s.title}</h3>
      <p class="item-meta">${s.desc}</p>
    </article>
  `).join("");
}

const projectsGrid = document.getElementById("projects-grid");
function renderProjects(filter = "all") {
  if (!projectsGrid) return;
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((item) => item.category === filter);
  projectsGrid.innerHTML = list.map((item) => `
    <article class="item-card hover-lift">
      <img src="${item.image}" alt="${item.title}" class="card-photo" onerror="this.onerror=null;this.src='${makeFallbackDataUri(item.fallbackLabel)}'" />
      <span class="item-tag">${item.badge}</span>
      <h3>${item.title}</h3>
      <p class="item-meta">${item.desc}</p>
    </article>
  `).join("");
}
renderProjects();

document.querySelectorAll("[data-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

const formationsGrid = document.getElementById("formations-grid");
function renderFormations(duration = "all") {
  if (!formationsGrid) return;
  const list = duration === "all" ? FORMATIONS : FORMATIONS.filter((f) => f.duration === duration);
  formationsGrid.innerHTML = list.map((f) => `
    <article class="item-card hover-lift">
      <span class="item-tag">Durée : ${f.duration}</span>
      <h3>${f.title}</h3>
      <p class="item-meta">${f.desc}</p>
      <p class="item-meta"><strong>Niveau d'étude :</strong> ${f.level}</p>
    </article>
  `).join("");
}
renderFormations();

document.querySelectorAll("[data-duration]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-duration]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderFormations(btn.dataset.duration);
  });
});

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.dataset.tab;
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `tab-${target}`);
    });
  });
});

const params = new URLSearchParams(window.location.search);
const statusPill = document.getElementById("dg-status");
if (params.get("access") === "DG_Dorsel_Kimbouala" && statusPill) {
  statusPill.textContent = "DG Dorsel Kimbouala-Ngoma";
  statusPill.classList.add("dg-active");
}

document.getElementById("btn-dg-link")?.addEventListener("click", () => {
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const dgUrl = `${baseUrl}?access=DG_Dorsel_Kimbouala`;
  navigator.clipboard?.writeText(dgUrl).catch(() => {});
  alert(`Lien Exécutif DG :\n${dgUrl}`);
});

document.getElementById("rdv-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = document.getElementById("rdv-nom").value.trim();
  document.getElementById("rdv-feedback").textContent =
    `Demande enregistrée pour ${nom}. Contact : +242 06 417 49 49 / contact@kim-cooling.com.`;
  e.target.reset();
});
