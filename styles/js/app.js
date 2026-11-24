let marches =
  JSON.parse(localStorage.getItem("kc_engineering_marches")) || INITIAL_MARCHES;
let qrTotal = 218;
let alertActive = false;

// Navigation entre les modules
document.querySelectorAll(".nav-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".view")
      .forEach((v) => v.classList.remove("active"));
    btn.classList.add("active");

    const targetView = document.getElementById(`view-${btn.dataset.view}`);
    if (targetView) targetView.classList.add("active");

    document.getElementById("viewTitle").textContent = btn.textContent.replace(
      /^[^\wÀ-ÿ]+/,
      "",
    );

    if (btn.dataset.view === "dg") {
      renderPartenaires();
      drawFinanceChart();
    }
    if (btn.dataset.view === "hvac") {
      drawTelemetryChart(alertActive);
    }
  });
});

// Rendu des marchés
function renderMarches() {
  const tbody = document.getElementById("tbodyMarches");
  if (!tbody) return;
  tbody.innerHTML = "";
  let ca = 0;

  marches.forEach((m, idx) => {
    ca += Number(m.montant);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${m.code}</strong></td>
      <td>${m.client}</td>
      <td>${m.objet}<br><small style="color:#94A3B8">${m.type}</small></td>
      <td>${Number(m.montant).toLocaleString("fr-FR")} FCFA</td>
      <td><span class="pill">${m.avancement}</span></td>
      <td>
        <button class="btn btn-cyan" style="padding:5px 10px;" onclick="quickQrMarche(${idx})">
          Générer QR
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const statCa = document.getElementById("statCa");
  if (statCa) statCa.textContent = ca.toLocaleString("fr-FR") + " FCFA";
  localStorage.setItem("kc_engineering_marches", JSON.stringify(marches));
}

// Ajout d'un nouveau marché
const formMarche = document.getElementById("formMarche");
if (formMarche) {
  formMarche.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = {
      code: `MCH-PNR-${String(marches.length + 1).padStart(3, "0")}`,
      client: document.getElementById("inClient").value.trim(),
      objet: document.getElementById("inObjet").value.trim(),
      type: document.getElementById("inType").value,
      montant: Number(document.getElementById("inMontant").value),
      avancement: document.getElementById("inAvancement").value,
    };
    marches.unshift(newItem);
    renderMarches();
    drawFinanceChart();
    e.target.reset();
  });
}

// Rendu des partenaires officiels
function renderPartenaires() {
  const container = document.querySelector(".partners-grid");
  if (!container || typeof PARTENAIRES_OFFICIELS === "undefined") return;
  container.innerHTML = PARTENAIRES_OFFICIELS.map(
    (p) => `
    <div class="partner-card">
      <strong>${p.nom}</strong>
      <span>${p.secteur}</span>
    </div>
  `,
  ).join("");
}

// Rendu du stock & fluides frigorigènes
function renderStock() {
  const tbody = document.getElementById("tbodyStock");
  if (!tbody || typeof STOCK_ITEMS === "undefined") return;
  tbody.innerHTML = STOCK_ITEMS.map((item) => {
    const low = item.qte <= item.seuil;
    return `
      <tr>
        <td><strong>${item.ref}</strong></td>
        <td>${item.nom}</td>
        <td>${item.cat}</td>
        <td><strong>${item.qte}</strong></td>
        <td>${item.seuil}</td>
        <td><span class="pill ${low ? "warn" : ""}">${low ? "⚠️ Réappro Urgente" : "✓ Disponible"}</span></td>
      </tr>
    `;
  }).join("");
}

// Générateur QR Code Haute Densité
function buildQR(textPayload, caption) {
  const box = document.getElementById("qrCanvas");
  if (!box || typeof QRCode === "undefined") return;
  box.innerHTML = "";

  new QRCode(box, {
    text: textPayload,
    width: 185,
    height: 185,
    colorDark: "#06212E",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("qrCaption").textContent = caption;
  document.getElementById("btnDownloadQr").style.display = "inline-flex";
}

const formQr = document.getElementById("formQr");
if (formQr) {
  formQr.addEventListener("submit", (e) => {
    e.preventDefault();
    const tag = document.getElementById("qrTag").value.trim();
    const site = document.getElementById("qrSite").value.trim();
    const machine = document.getElementById("qrMachine").value.trim();
    const fluide = document.getElementById("qrFluide").value.trim();
    const next = document.getElementById("qrNextMaint").value;

    const payload = `KIM COOLING ENGINEERING | GMAO | TAG:${tag} | SITE:${site} | EQUIP:${machine} | FLUIDE:${fluide} | PROCHAINE_MAINT:${next} | TEL:+242064174949`;
    buildQR(payload, `${tag} — ${site} (${fluide})`);

    qrTotal++;
    const statQr = document.getElementById("statQr");
    if (statQr) statQr.textContent = `${qrTotal} Actifs`;
  });
}

// Génération QR rapide depuis un marché
window.quickQrMarche = function (idx) {
  const m = marches[idx];
  if (!m) return;
  document.querySelector('[data-view="gmao"]').click();
  document.getElementById("qrTag").value = m.code;
  document.getElementById("qrSite").value = m.client;
  document.getElementById("qrMachine").value = m.objet;
  buildQR(
    `KIM COOLING ENGINEERING | MARCHE | ${m.code} | CLIENT:${m.client} | PROJET:${m.objet} | ETAT:${m.avancement}`,
    `${m.code} — ${m.client}`,
  );
};

// Téléchargement PNG de la plaque QR
const btnDownloadQr = document.getElementById("btnDownloadQr");
if (btnDownloadQr) {
  btnDownloadQr.addEventListener("click", () => {
    const img = document.querySelector("#qrCanvas img");
    const canvas = document.querySelector("#qrCanvas canvas");
    const dataUrl = img
      ? img.src
      : canvas
        ? canvas.toDataURL("image/png")
        : null;
    if (!dataUrl) return;

    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `PLAQUE-QR-KIM-COOLING-ENGINEERING-${Date.now()}.png`;
    a.click();
  });
}

// Simulation télémétrie HVAC
const btnSimulerPanne = document.getElementById("btnSimulerPanne");
if (btnSimulerPanne) {
  btnSimulerPanne.addEventListener("click", () => {
    alertActive = !alertActive;
    tempSeries = alertActive
      ? [-22.1, -21.8, -20.5, -18.9, -17.2, -16.8, -17.5, -18.1]
      : [-22.1, -22.3, -22.0, -22.4, -22.2, -22.5, -22.3, -22.4];
    btnSimulerPanne.textContent = alertActive
      ? "↺ Rétablir Consigne Normale"
      : "⚡ Simuler Dérive Thermique";
    drawTelemetryChart(alertActive);
  });
}

// Export CSV des marchés
const btnExportReport = document.getElementById("btnExportReport");
if (btnExportReport) {
  btnExportReport.addEventListener("click", () => {
    const rows = [
      ["Code", "Client", "Objet", "Type", "Montant_FCFA", "Avancement"],
      ...marches.map((m) => [
        m.code,
        m.client,
        m.objet,
        m.type,
        m.montant,
        m.avancement,
      ]),
    ];
    const csv = rows
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";"))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Bilan_Marches_KIM_COOLING_ENGINEERING_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  });
}

// Copie des liens DG et Client
function copyRoleLink(role, label) {
  const url = new URL(window.location.href);
  url.searchParams.set("access", role);
  navigator.clipboard.writeText(url.toString()).then(() => {
    const toast = document.getElementById("toastMsg");
    if (toast) {
      toast.textContent = `✓ Lien ${label} copié !`;
      setTimeout(() => {
        toast.textContent = "";
      }, 3500);
    }
  });
}

const btnShareDG = document.getElementById("btnShareDG");
if (btnShareDG) {
  btnShareDG.addEventListener("click", () =>
    copyRoleLink("DG_Dorsel_Kimbouala", "Direction Générale"),
  );
}

const btnShareClient = document.getElementById("btnShareClient");
if (btnShareClient) {
  btnShareClient.addEventListener("click", () =>
    copyRoleLink("PORTAIL_CLIENT_B2B", "Espace Client"),
  );
}

// Routage selon le paramètre d'accès dans l'URL
const accessParam = new URLSearchParams(window.location.search).get("access");
if (accessParam === "PORTAIL_CLIENT_B2B") {
  document.querySelector('[data-view="client"]')?.click();
} else if (accessParam && accessParam.startsWith("DG")) {
  document.getElementById("viewTitle").textContent =
    "Bienvenue, DG Dorsel Kimbouala-Ngoma";
}

// Initialisation complète
renderMarches();
renderPartenaires();
renderStock();
window.addEventListener("load", () => {
  drawFinanceChart();
  drawTelemetryChart(alertActive);
});
window.addEventListener("resize", () => {
  drawFinanceChart();
  drawTelemetryChart(alertActive);
});
