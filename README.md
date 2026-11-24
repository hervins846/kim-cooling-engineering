# KIM COOLING ENGINEERING

Plateforme web d'ingénierie, de gestion des marchés et appels d'offres, de supervision HVAC, de gestion de stock/fluides frigorigènes et de génération de QR Codes de traçabilité (GMAO) pour **KIM COOLING ENGINEERING** (Pointe-Noire, République du Congo).

## Fonctionnalités principales

- **Cockpit Direction Générale (DG)** : indicateurs clés (KPI), graphique d'évolution financière des marchés et références stratégiques (**Projet ORCA**, **Project NAVIR MSC**, **SARIS Congo**, **Expertise France — Groupe AFD**, **UCAC-ICAM**, **ECAM**, **ESMTCA**, **DGC**, **IS-CPGE-CI**, **F2E**).
- **Gestion des Marchés & Appels d'Offres** : ajout, suivi d'avancement, persistance locale (`localStorage`), export CSV et génération rapide de QR Code par marché.
- **GMAO & Passeports QR Terrain** : génération de plaques QR Codes haute densité (`QRCode.CorrectLevel.H`) pour les équipements, chambres froides, fluides frigorigènes et échéances de maintenance, avec téléchargement PNG.
- **Supervision HVAC & COP** : suivi thermodynamique et simulation de dérive thermique sur `Canvas`.
- **Stock & Fluides Frigorigènes** : contrôle des niveaux de stock à Pointe-Noire avec alertes de seuil critique.
- **Lien Exécutif DG** : génération et copie d'URL avec paramètre `?access=DG_Dorsel_Kimbouala`.

## Déploiement sur GitHub Pages

1. Créer un dépôt public nommé `kim-cooling-engineering` sur GitHub (`hervins846`).
2. Dans le terminal VS Code :
   ```powershell
   cd kim-cooling-engineering
   git init
   git add .
   git commit -m "Deploy KIM COOLING ENGINEERING platform"
   git branch -M main
   git remote add origin [https://github.com/hervins846/kim-cooling-engineering.git](https://github.com/hervins846/kim-cooling-engineering.git)
   git push -u origin main
   ```
