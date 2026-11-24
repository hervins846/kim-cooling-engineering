function drawFinanceChart() {
  const canvas = document.getElementById("financeChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = Math.max(
    280,
    canvas.parentElement.clientWidth - 40,
  ));
  const h = (canvas.height = 200);

  ctx.clearRect(0, 0, w, h);
  const data = [18, 26, 31, 45, 58, 74];
  const labels = ["T1 25", "T2 25", "T3 25", "T4 25", "T1 26", "T2 26"];
  const stepX = (w - 40) / data.length;
  const barW = Math.min(44, stepX * 0.52);

  data.forEach((val, i) => {
    const x = 25 + i * stepX;
    const barH = (val / 85) * (h - 50);
    const y = h - barH - 25;

    ctx.fillStyle = i === data.length - 1 ? "#CE701A" : "#28EBFF";
    ctx.fillRect(x, y, barW, barH);

    ctx.fillStyle = "#94A3B8";
    ctx.font = "11px Inter, sans-serif";
    ctx.fillText(labels[i], x, h - 8);

    ctx.fillStyle = "#F1F5F9";
    ctx.font = "bold 11px JetBrains Mono, monospace";
    ctx.fillText(val + "M", x, y - 6);
  });
}

let tempSeries = [-22.1, -22.3, -22.0, -22.4, -22.2, -22.5, -22.3, -22.4];

function drawTelemetryChart(alertMode = false) {
  const canvas = document.getElementById("telemetryChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = Math.max(
    280,
    canvas.parentElement.clientWidth - 40,
  ));
  const h = (canvas.height = 190);

  ctx.clearRect(0, 0, w, h);

  // Ligne de consigne (-22 °C)
  ctx.strokeStyle = "rgba(40, 235, 255, 0.25)";
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(25, h / 2);
  ctx.lineTo(w - 25, h / 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Courbe de température
  ctx.strokeStyle = alertMode ? "#CE701A" : "#28EBFF";
  ctx.lineWidth = 3;
  ctx.beginPath();

  tempSeries.forEach((t, idx) => {
    const x = 30 + idx * ((w - 60) / (tempSeries.length - 1));
    const y = Math.max(18, Math.min(h - 22, h / 2 - (t + 22) * 14));
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Points et étiquettes
  tempSeries.forEach((t, idx) => {
    const x = 30 + idx * ((w - 60) / (tempSeries.length - 1));
    const y = Math.max(18, Math.min(h - 22, h / 2 - (t + 22) * 14));
    ctx.fillStyle = alertMode ? "#FBBF24" : "#34D399";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#CBD5E1";
    ctx.font = "10px JetBrains Mono, monospace";
    ctx.fillText(`${t}°`, x - 12, y - 8);
  });
}
