const books = {
    CORE: "Core Rules v2.1",
    COS: "Church of Steel",
    TA_X: "Threat Assessment: Xenos",
    VAX: "Vaxian Aegis (Homebrew)"
};

// --- BASE DE DONNÉES VÉHICULES ---
const vehicleData = [
    // IMPERIUM
    { 
        id: "leman_russ", name: "Char Leman Russ", type: "TRACKED", 
        faction: "Astra Militarum",
        stats: { cruising: "12m", full: "18m", maneuver: "+0", toughness: "8", wounds: "18" },
        crew: "Commander + 3",
        weapons: ["Canon de Bataille", "Bolter Lourd de coque", "2 Bolters Lourds latéraux"],
        traits: ["Fiable", "Lourd"],
        src: books.CORE, desc: "Le char de combat principal de la Garde Impériale. Robuste et mortel."
    },
    { 
        id: "rhino", name: "Rhino APC", type: "TRACKED", 
        faction: "Adeptus Astartes",
        stats: { cruising: "15m", full: "25m", maneuver: "+1", toughness: "7", wounds: "14" },
        crew: "Driver + 10 passagers",
        weapons: ["Bolter Storm sur pivot"],
        traits: ["Réparation Automatique", "Transport"],
        src: books.CORE, desc: "Transport de troupes blindé omniprésent."
    },
    { 
        id: "sentinel_scout", name: "Sentinelle de Reconnaissance", type: "WALKER", 
        faction: "Astra Militarum",
        stats: { cruising: "18m", full: "30m", maneuver: "+2", toughness: "5", wounds: "6" },
        crew: "1 Pilote",
        weapons: ["Multi-Laser"],
        traits: ["Agile", "Découvert (Open-Topped)"],
        src: books.CORE, desc: "Marcheur léger bipède tout-terrain."
    },
    { 
        id: "bike_astartes", name: "Moto Space Marine", type: "WHEELED", 
        faction: "Adeptus Astartes",
        stats: { cruising: "20m", full: "40m", maneuver: "+3", toughness: "5", wounds: "8" },
        crew: "1 Marine",
        weapons: ["Bolters Jumelés"],
        traits: ["Rapide"],
        src: books.CORE, desc: "Plateforme d'attaque rapide."
    },

    // XENOS & AUTRES
    { 
        id: "warbuggy", name: "Ork Warbuggy", type: "WHEELED", 
        faction: "Orks",
        stats: { cruising: "18m", full: "32m", maneuver: "+1", toughness: "6", wounds: "10" },
        crew: "2 Orks",
        weapons: ["Gros Fling' Jumelé"],
        traits: ["Bruyant", "Bricolé"],
        src: books.CORE, desc: "Tas de ferraille rapide et dangereux."
    },
    { 
        id: "devilfish", name: "TY7 Devilfish", type: "GRAV", 
        faction: "Empire T'au",
        stats: { cruising: "20m", full: "35m", maneuver: "+2", toughness: "7", wounds: "12" },
        crew: "1 Pilote + 12 Passagers",
        weapons: ["Canon à Impulsion", "Drones d'attaque"],
        traits: ["Vol", "Champ de Force"],
        src: books.VAX, desc: "Transport antigravitique élégant."
    },
    { 
        id: "vyper", name: "Aeldari Vyper", type: "GRAV", 
        faction: "Craftworld",
        stats: { cruising: "25m", full: "50m", maneuver: "+4", toughness: "5", wounds: "6" },
        crew: "1 Pilote + 1 Artilleur",
        weapons: ["Canon Shuriken", "Lance-Missiles Aeldari"],
        traits: ["Vol", "Holochamps"],
        src: books.TA_X, desc: "Motojet lourde extrêmement rapide."
    }
];

// --- LOGIQUE (Similaire à l'Armurerie mais adaptée aux stats véhicules) ---
let currentVType = 'ALL';

function renderVehicles(filter = "") {
    const grid = document.getElementById('vehicleGrid');
    grid.innerHTML = "";

    vehicleData.forEach(v => {
        if (currentVType !== 'ALL' && v.type !== currentVType) return;
        if (filter && !v.name.toLowerCase().includes(filter.toLowerCase())) return;

        grid.innerHTML += `
        <div class="vehicle-card" onclick="openVehicleModal('${v.id}')">
            <h3 style="color:#d4af37; margin:0;">${v.name}</h3>
            <div style="font-size:0.8em; color:#aaa;">${v.faction}</div>
            
            <div class="stat-grid-vehicle">
                <div class="stat-box"><span class="stat-label">VITESSE</span><span class="stat-value">${v.stats.cruising}</span></div>
                <div class="stat-box"><span class="stat-label">MANŒUVRE</span><span class="stat-value">${v.stats.maneuver}</span></div>
                <div class="stat-box"><span class="stat-label">RÉSISTANCE</span><span class="stat-value">${v.stats.toughness}</span></div>
            </div>
        </div>`;
    });
}

function setVType(type) {
    currentVType = type;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderVehicles(document.getElementById('searchVehicle').value);
}

function filterVehicles() {
    renderVehicles(document.getElementById('searchVehicle').value);
}

function openVehicleModal(id) {
    const v = vehicleData.find(i => i.id === id);
    if (!v) return;

    const modal = document.getElementById('vehicleModal');
    document.getElementById('modalVehicleTitle').innerText = v.name.toUpperCase();
    
    let html = `
    <div style="display:flex; justify-content:space-between; border-bottom:1px solid #33ff00; padding-bottom:10px;">
        <div><strong>FACTION:</strong> ${v.faction}</div>
        <div><strong>TYPE:</strong> ${v.type}</div>
    </div>

    <table style="width:100%; margin-top:15px; border-collapse:collapse; color:#33ff00;">
        <tr style="border-bottom:1px solid #1a5c00;">
            <th>CRUISING</th><th>FULL SPEED</th><th>MANEUVER</th><th>TOUGHNESS</th><th>WOUNDS</th>
        </tr>
        <tr style="text-align:center; font-weight:bold; color:#d4af37;">
            <td>${v.stats.cruising}</td>
            <td>${v.stats.full}</td>
            <td>${v.stats.maneuver}</td>
            <td>${v.stats.toughness}</td>
            <td>${v.stats.wounds}</td>
        </tr>
    </table>

    <div style="margin-top:20px;">
        <strong>ÉQUIPAGE:</strong> ${v.crew}<br>
        <strong>ARMEMENT:</strong>
        <ul style="color:#ccc;">${v.weapons.map(w => `<li>${w}</li>`).join('')}</ul>
    </div>

    <div style="margin-top:15px; border:1px dashed #555; padding:10px; font-style:italic; color:#aaa;">
        "${v.desc}"
    </div>
    <div style="text-align:right; font-size:0.7em; margin-top:5px;">Source: ${v.src}</div>
    `;

    document.getElementById('modalVehicleBody').innerHTML = html;
    modal.style.display = 'flex';
}

// Init
document.addEventListener('DOMContentLoaded', function() {
    renderVehicles();
    const modal = document.getElementById('vehicleModal');
    const btn = document.getElementById('btnCloseVehicle');
    if(btn) btn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if(e.target == modal) modal.style.display = 'none'; });
});