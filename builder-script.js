// --- DONNÉES DE BASE ---
const attributes = ["Strength", "Toughness", "Agility", "Initiative", "Willpower", "Intellect", "Fellowship"];
const skills = ["Athletics", "Awareness", "Ballistic Skill", "Cunning", "Deception", "Insight", "Intimidation", "Investigation", "Leadership", "Medicae", "Pilot", "Persuasion", "Psychic Mastery", "Scholar", "Stealth", "Survival", "Tech", "Weapon Skill"];

const xpTableAttr = [0, 0, 4, 10, 20, 35, 55, 80, 110, 145, 185, 230, 280]; // Coût cumulatif pour Attributs
const xpTableSkill = [0, 0, 2, 6, 12, 20, 30, 42, 56]; // Coût cumulatif pour Compétences

let character = {
    tier: 1,
    xpTotal: 100,
    xpSpent: 0,
    archetype: null,
    attributes: {},
    skills: {}
};

// Initialisation
attributes.forEach(a => character.attributes[a] = 1);
skills.forEach(s => character.skills[s] = 0);

// --- FONCTIONS SYSTÈME ---
function initBuilder() {
    renderAttributes();
    renderSkills();
    populateArchetypes();
    updateUI();
}

function updateTier() {
    const t = parseInt(document.getElementById('tier-select').value);
    character.tier = t;
    character.xpTotal = t * 100;
    updateUI();
}

// --- GESTION DES ATTRIBUTS ---
function renderAttributes() {
    const container = document.getElementById('attributes-list');
    container.innerHTML = "";
    attributes.forEach(attr => {
        container.innerHTML += `
        <div class="stat-row">
            <span>${attr.toUpperCase()}</span>
            <div>
                <button class="stat-btn" onclick="modAttr('${attr}', -1)">-</button>
                <span class="stat-val" id="val-${attr}">${character.attributes[attr]}</span>
                <button class="stat-btn" onclick="modAttr('${attr}', 1)">+</button>
            </div>
        </div>`;
    });
}

function modAttr(attr, delta) {
    let newVal = character.attributes[attr] + delta;
    if (newVal < 1 || newVal > 12) return; // Limites hard W&G
    
    // Calcul coût XP
    let oldCost = xpTableAttr[character.attributes[attr]];
    let newCost = xpTableAttr[newVal];
    let diff = newCost - oldCost;

    if (character.xpSpent + diff > character.xpTotal) {
        alert("XP Insuffisant !");
        return;
    }

    character.attributes[attr] = newVal;
    character.xpSpent += diff;
    updateUI();
}

// --- GESTION DES COMPÉTENCES ---
function renderSkills() {
    const container = document.getElementById('skills-list');
    container.innerHTML = "";
    skills.forEach(skill => {
        container.innerHTML += `
        <div class="stat-row">
            <span style="font-size:0.8em;">${skill}</span>
            <div>
                <button class="stat-btn" onclick="modSkill('${skill}', -1)">-</button>
                <span class="stat-val" id="val-${skill}" style="font-size:1em; width:20px;">${character.skills[skill]}</span>
                <button class="stat-btn" onclick="modSkill('${skill}', 1)">+</button>
            </div>
        </div>`;
    });
}

function modSkill(skill, delta) {
    let newVal = character.skills[skill] + delta;
    if (newVal < 0 || newVal > 8) return;

    let oldCost = xpTableSkill[character.skills[skill]];
    let newCost = xpTableSkill[newVal];
    let diff = newCost - oldCost;

    if (character.xpSpent + diff > character.xpTotal) {
        alert("XP Insuffisant !");
        return;
    }

    character.skills[skill] = newVal;
    character.xpSpent += diff;
    updateUI();
}

// --- MISE À JOUR UI & CALCULS DÉRIVÉS ---
function updateUI() {
    // XP
    document.getElementById('xp-remaining').innerText = character.xpTotal - character.xpSpent;
    document.getElementById('xp-total').innerText = character.xpTotal;

    // Valeurs affichées
    attributes.forEach(a => document.getElementById(`val-${a}`).innerText = character.attributes[a]);
    skills.forEach(s => document.getElementById(`val-${s}`).innerText = character.skills[s]);

    // Stats Dérivées (Règles W&G v2.1)
    const tier = character.tier;
    const T = character.attributes["Toughness"];
    const Wp = character.attributes["Willpower"];
    const I = character.attributes["Initiative"];

    // Wounds = Toughness + Tier*2
    document.getElementById('deriv-w').innerText = T + (tier * 2);
    // Shock = Willpower + Tier
    document.getElementById('deriv-s').innerText = Wp + tier;
    // Defense = Initiative - 1
    document.getElementById('deriv-def').innerText = Math.max(1, I - 1);
    // Resilience = Toughness + 1 (Base humaine sans armure)
    document.getElementById('deriv-res').innerText = T + 1;
    
    // Influence = Fellowship - 1 (simplifié)
    document.getElementById('deriv-inf').innerText = Math.max(0, character.attributes["Fellowship"] - 1);
}

// --- ONGLETS ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    // Mettre la classe active sur le bouton cliqué (logique simplifiée ici)
}

function generateExport() {
    document.getElementById('export-area').value = JSON.stringify(character, null, 4);
}

// Données Archétypes (Exemple minimaliste à étendre)
const archetypesDB = [
    {id: "scum", name: "Racailles (Scum)", tier: 1, xpCost: 0},
    {id: "trooper", name: "Soldat Impérial", tier: 1, xpCost: 10},
    {id: "marine", name: "Space Marine Tactique", tier: 3, xpCost: 60}
];

function populateArchetypes() {
    const sel = document.getElementById('archetype-select');
    archetypesDB.forEach(arch => {
        let opt = document.createElement('option');
        opt.value = arch.id;
        opt.innerText = `${arch.name} (T${arch.tier})`;
        sel.appendChild(opt);
    });
}

function setArchetype() {
    // Logique pour appliquer les bonus d'archétype
    // À développer : Ajouter les attributs bonus, skills imposés, etc.
}

// Lancement
window.onload = initBuilder;