document.addEventListener("pointermove", (e) => {
  document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
  document.documentElement.style.setProperty("--my", `${e.clientY}px`);
});

const PARTNERS = [
  "MSC",
  "ORCA",
  "Expertise France (Groupe AFD)",
  "UCAC-ICAM",
  "ESMTCA",
  "ECAM",
  "IS-CPGE-CI",
  "F2E"
];

const SERVICES = [
  {
    tag: "Service • Climatisation",
    title: "Installation de systèmes de climatisation",
    desc: "Mise en place de climatiseurs split, multi-split, systèmes de climatisation centralisée et solutions adaptées aux besoins spécifiques des clients."
  },
  {
    tag: "Service • HVAC",
    title: "Installation de systèmes de réfrigération HVAC",
    desc: "Installation de chambres froides, vitrines réfrigérées et systèmes de réfrigération pour l'agroalimentaire, la pharmacie et l'industrie."
  },
  {
    tag: "Service • Maintenance",
    title: "Maintenance préventive & corrective",
    desc: "Contrôle, nettoyage et réparation des équipements de climatisation et de réfrigération pour prévenir les pannes et garantir un fonctionnement optimal."
  },
  {
    tag: "Service • Conseil",
    title: "Audit énergétique et conseils",
    desc: "Évaluation de l'efficacité énergétique des installations existantes et recommandations pour améliorer les performances et réduire les coûts d'exploitation."
  },
  {
    tag: "Service • Équipements",
    title: "Vente et fourniture d'équipements",
    desc: "Fourniture d'équipements de climatisation et de réfrigération : compresseurs industriels, postes à souder, outillage de maintenance froid."
  },
  {
    tag: "Service • Conformité",
    title: "Expertise et contrôle des conformités des chambres froides",
    desc: "Étude, contrôle et réalisation de travaux de plomberie industrielle, maintenance industrielle et maintenance multi-technique."
  }
];

const PROJECTS = [
  {
    title: "Projet ORCA : Construction des systèmes froid et climatisation",
    category: "industriel",
    image: "actifs/projet-orca.jpg",
    badge: "Grand Compte • Climatisation & Froid",
    desc: "En répondant de manière adéquate aux besoins, garantie du confort et de la satisfaction des clients et du personnel, de la qualité et de la sécurité des produits, avec optimisation des coûts énergétiques et respect des normes environnementales."
  },
  {
    title: "Projet Navire MSC : Installation frigorifique",
    category: "maritime",
    image: "actifs/projet-msc.jpg",
    badge: "Maritime • Chaîne du Froid",
    desc: "Conception, installation et maintenance de systèmes de réfrigération sur un navire de la Mediterranean Shipping Company (MSC) pour sécuriser la conservation et le transport de marchandises périssables."
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

const partnerContainer = document.getElementById("partner-list");
if (partnerContainer) {
  partnerContainer.innerHTML = PARTNERS.map((p) => `<span class="chip-badge">${p}</span>`).join("");
}

const servicesGrid = document.getElementById("services-grid");
if (servicesGrid) {
  servicesGrid.innerHTML = SERVICES.map((s) => `
    <article class="item-card">
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
    <article class="item-card">
      <img src="${item.image}" alt="${item.title}" class="card-photo" onerror="this.style.display='none'" />
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
    <article class="item-card">
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
