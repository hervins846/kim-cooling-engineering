document.addEventListener("pointermove", (e) => {
  document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
  document.documentElement.style.setProperty("--my", `${e.clientY}px`);
});

const PARTNERS = [
  "MSC (Mediterranean Shipping Company)",
  "ORCA",
  "Expertise France (Groupe AFD)",
  "UCAC-ICAM",
  "ESMTCA",
  "ECAM",
  "IS-CPGE-CI",
  "F2E"
];

const PROJECTS = [
  {
    title: "Projet ORCA : Construction des systèmes froid et climatisation",
    category: "industriel",
    badge: "Grand Compte • Climatisation & Froid",
    desc: "Conception et réalisation de systèmes de froid et climatisation alliant confort, sécurité des produits et optimisation énergétique."
  },
  {
    title: "Projet Navire MSC : Installation frigorifique",
    category: "maritime",
    badge: "Maritime • Chaîne du Froid",
    desc: "Installation et maintenance de systèmes de réfrigération pour sécuriser la conservation et le transport de marchandises périssables."
  }
];

const FORMATIONS = [
  { title: "Climatisation centrale (en module)", duration: "2/6 mois", level: "BAC - LICENCE - MASTER", desc: "Installation, entretien, diagnostic et réparation de systèmes de climatisation centralisés." },
  { title: "Froid auto", duration: "2/6 mois", level: "BAC - LICENCE - MASTER", desc: "Installation, entretien, diagnostic et réparation de climatisation automobile." },
  { title: "Froid ménager", duration: "3/6 mois", level: "BAC - LICENCE - MASTER", desc: "Expertise en installation, entretien, diagnostic et réparation d'équipements domestiques." },
  { title: "Dessin et conception assistées à l'ordinateur (CAO)", duration: "3/6 mois", level: "BAC", desc: "Création, modification et visualisation de dessins techniques et modèles avec logiciels spécialisés." },
  { title: "Climatisation de confort", duration: "4/6 mois", level: "BAC - LICENCE - MASTER", desc: "Maîtrise des systèmes de climatisation pour maisons, bureaux et bâtiments commerciaux." },
  { title: "Froid industriel et commercial", duration: "6 mois", level: "BAC", desc: "Conception, installation, entretien et dépannage en environnements industriels et commerciaux." },
  { title: "Système froid et climatisation HVAC", duration: "6 mois", level: "BAC", desc: "Compétences complètes en chauffage, ventilation, climatisation et réfrigération." },
  { title: "Électricité", duration: "6 mois", level: "BAC", desc: "Travail sécurisé et efficace sur systèmes électriques résidentiels, commerciaux et industriels." },
  { title: "Automatisme et instrumentation", duration: "6 mois", level: "BAC", desc: "Conception, installation, entretien et dépannage de systèmes automatisés et instruments de mesure." },
  { title: "Mécanique énergétique", duration: "6 mois", level: "BAC", desc: "Compréhension, conception, analyse et optimisation de la production et conversion d'énergie." },
  { title: "Audit énergétique", duration: "6 mois", level: "BAC", desc: "Évaluation de l'efficacité énergétique et optimisation dans bâtiments, industries et infrastructures." },
  { title: "Gestion de projet", duration: "3/6 mois", level: "BAC - LICENCE - MASTER", desc: "Planification, organisation et pilotage de projets techniques (délais, coûts, qualité)." }
];

const partnerContainer = document.getElementById("partner-list");
if (partnerContainer) {
  partnerContainer.innerHTML = PARTNERS.map((p) => `<span class="chip-badge">${p}</span>`).join("");
}

const projectsGrid = document.getElementById("projects-grid");
function renderProjects(filter = "all") {
  if (!projectsGrid) return;
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((item) => item.category === filter);
  projectsGrid.innerHTML = list.map((item) => `
    <article class="item-card">
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
      <p class="item-meta"><strong>Niveau :</strong> ${f.level}</p>
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

const ambSlider = document.getElementById("amb-temp");
const loadSlider = document.getElementById("solar-load");
function updateTwin() {
  if (!ambSlider || !loadSlider) return;
  const temp = Number(ambSlider.value);
  const load = Number(loadSlider.value);
  document.getElementById("amb-temp-val").textContent = `${temp}°C`;
  document.getElementById("solar-load-val").textContent = `${load}%`;
  const cop = Math.max(2.6, (5.4 - (temp - 24) * 0.08 - (load - 50) * 0.008)).toFixed(2);
  const eco = -(16 + load * 0.15 - Math.max(0, temp - 31) * 0.4).toFixed(1);
  const risk = load > 88 && temp > 35 ? "Modéré" : "Faible";
  document.getElementById("cop-readout").textContent = cop;
  document.getElementById("eco-readout").textContent = `${eco}%`;
  document.getElementById("risk-readout").textContent = risk;
}
ambSlider?.addEventListener("input", updateTwin);
loadSlider?.addEventListener("input", updateTwin);
updateTwin();

const params = new URLSearchParams(window.location.search);
const statusPill = document.getElementById("dg-status");
if (params.get("access") === "DG_Dorsel_Kimbouala" && statusPill) {
  statusPill.textContent = "DG Dorsel Kimbouala-Ngoma • Accès Actif";
  statusPill.classList.add("dg-active");
}

document.getElementById("btn-dg-link")?.addEventListener("click", () => {
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const dgUrl = `${baseUrl}?access=DG_Dorsel_Kimbouala`;
  navigator.clipboard?.writeText(dgUrl).catch(() => {});
  alert(`Lien Exécutif DG prêt :\n${dgUrl}`);
});

document.getElementById("rdv-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = document.getElementById("rdv-nom").value.trim();
  document.getElementById("rdv-feedback").textContent =
    `Demande enregistrée pour ${nom}. Contact direct : +242 06 417 49 49 / contact@kim-cooling.com.`;
  e.target.reset();
});
