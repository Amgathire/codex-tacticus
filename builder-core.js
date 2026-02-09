// --- CONFIGURATION ---
const attributesList = ["Force", "Endurance", "Agilité", "Initiative", "Volonté", "Intellect", "Sociabilité"];
const skillsList = ["Athlétisme", "Vigilance", "Tir", "Corps à corps", "Furtivité", "Pilotage", "Tech", "Medicae", "Commandement", "Investigation"];
const xpAttrCosts = [0, 0, 4, 10, 20, 35, 55, 80, 110, 145, 185, 230, 280];
const xpSkillCosts = [0, 0, 2, 6, 12, 20, 30, 42, 56];

let charSheet = { archetypeId: null, tier: 1, attributes: {}, skills: {}, inventory: [], keywords: [], xpSpent: 0 };

// Init
attributesList.forEach(a => charSheet.attributes[a] = 1);
skillsList.forEach(s => charSheet.skills[s] = 0);

// --- FONCTION PRINCIPALE : Lancement ---
function startBuilder(archId) {
    let archData = null;
    let factionKey = "";
    
    // Recherche dans factionData (chargé via races-script.js)
    if(typeof factionData !== 'undefined') {
        for (const [fKey, fData] of Object.entries(factionData)) {
            const u = fData.units.find(unit => unit.id === archId);
            if (u) { archData = u; factionKey = fKey.toUpperCase(); break; }
        }
    }

    if (!archData) { alert("Erreur: Archétype introuvable dans la base de données."); return; }

    // Init fiche
    charSheet.archetypeId = archId;
    charSheet.tier = archData.tier;
    charSheet.keywords = [factionKey];
    
    // Déduction Keywords
    const id = archId.toLowerCase();
    if (id.includes("marine") || id.includes("tactical")) charSheet.keywords.push("ASTARTES", "IMPERIUM");
    if (id.includes("sister")) charSheet.keywords.push("ADEPTA SORORITAS", "IMPERIUM");
    if (id.includes("ork") || id.includes("boy")) charSheet.keywords.push("ORK");
    
    // UI
    document.getElementById('selection-interface').style.display = 'none';
    document.getElementById('raceModal').style.display = 'none';
    document.getElementById('builder-interface').style.display = 'block';

    document.getElementById('summ-arch').innerText = archData.name;
    document.getElementById('summ-tier').innerText = archData.tier;
    document.getElementById('xp-max').innerText = archData.tier * 100;
    document.getElementById('summ-keywords').innerText = charSheet.keywords.join(", ");

    renderAttributesUI();
    renderSkillsUI();
    renderGearUI();
    calculateStats();
}

// --- UI ATTRIBUTS ---
function renderAttributesUI() {
    const c = document.getElementById('attrs-container');
    c.innerHTML = "";
    attributesList.forEach(attr => {
        c.innerHTML += `
        <div class="stat-line">
            <span>${attr}</span>
            <div>
                <button class="stat-btn" onclick="modAttr('${attr}', -1)">-</button>
                <span class="stat-val" style="display:inline-block;">${charSheet.attributes[attr]}</span>
                <button class="stat-btn" onclick="modAttr('${attr}', 1)">+</button>
            </div>
        </div>`;
    });
}

function modAttr(attr, delta) {
    const oldVal = charSheet.attributes[attr];
    const newVal = oldVal + delta;
    if (newVal < 1 || newVal > 12) return;
    
    const diff = xpAttrCosts[newVal] - xpAttrCosts[oldVal];
    if (charSheet.xpSpent + diff > charSheet.tier * 100) return;

    charSheet.attributes[attr] = newVal;
    charSheet.xpSpent += diff;
    renderAttributesUI();
    calculateStats();
}

// --- UI COMPÉTENCES ---
function renderSkillsUI() {
    const c = document.getElementById('skills-container');
    c.innerHTML = "";
    skillsList.forEach(s => {
        c.innerHTML += `
        <div class="stat-line">
            <span style="font-size:0.8em">${s}</span>
            <div>
                <button class="stat-btn" onclick="modSkill('${s}', -1)">-</button>
                <span class="stat-val" style="display:inline-block;">${charSheet.skills[s]}</span>
                <button class="stat-btn" onclick="modSkill('${s}', 1)">+</button>
            </div>
        </div>`;
    });
}

function modSkill(s, delta) {
    const oldVal = charSheet.skills[s];
    const newVal = oldVal + delta;
    if (newVal < 0 || newVal > 8) return;

    const diff = xpSkillCosts[newVal] - xpSkillCosts[oldVal];
    if (charSheet.xpSpent + diff > charSheet.tier * 100) return;

    charSheet.skills[s] = newVal;
    charSheet.xpSpent += diff;
    renderSkillsUI();
    calculateStats();
}

// --- ARMURERIE ---
function renderGearUI() {
    const c = document.getElementById('gear-container');
    c.innerHTML = "";
    if (typeof armoryData === 'undefined') { c.innerHTML = "Erreur: armory-script.js manquant."; return; }

    armoryData.forEach(item => {
        let show = false;
        if(item.rarity === "Commun") show = true;
        if(item.keywords && item.keywords.some(k => charSheet.keywords.includes(k))) show = true;
        
        if(show) {
            c.innerHTML += `
            <div style="border:1px solid #1a5c00; padding:10px; cursor:pointer;" onclick="addInv('${item.id}')">
                <div style="color:#d4af37; font-size:0.9em;">${item.name}</div>
                <div style="font-size:0.7em; color:#888;">${item.type}</div>
            </div>`;
        }
    });
}

function addInv(id) {
    const item = armoryData.find(i => i.id === id);
    charSheet.inventory.push(item);
    document.getElementById('inventory-list').innerHTML = charSheet.inventory.map(i => `<div>- ${i.name}</div>`).join('');
}

// --- STATS & UTILS ---
function calculateStats() {
    document.getElementById('xp-spent').innerText = charSheet.xpSpent;
    const T = charSheet.attributes["Endurance"];
    const Tier = charSheet.tier;
    document.getElementById('d-wounds').innerText = T + (Tier * 2);
    document.getElementById('d-shock').innerText = charSheet.attributes["Volonté"] + Tier;
    document.getElementById('d-def').innerText = Math.max(1, charSheet.attributes["Initiative"] - 1);
    document.getElementById('d-res').innerText = T + 1;
}

function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(e => e.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(e => e.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    // Note: l'ajout de la classe active sur le bouton spécifique demanderait de passer 'this' en paramètre, simplifié ici.
}

function resetSelection() {
    document.getElementById('builder-interface').style.display = 'none';
    document.getElementById('selection-interface').style.display = 'block';
}

function generateJSON() {
    document.getElementById('export-json').value = JSON.stringify(charSheet, null, 4);
}