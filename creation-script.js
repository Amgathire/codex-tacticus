const archetypeData = {
    // === IMPERIUM (Mélange Garde, Space Marine, Sœurs, AdMech) ===
    'imperium': {
        title: "ARCHÉTYPES IMPÉRIAUX",
        desc: "Serviteurs du Trône d'Or.",
        units: [
            { id: "sister_battle", name: "Sœur de Bataille", tier: 2, desc: "Guerrière fanatique de l'Adepta Sororitas." },
            { id: "tactical_marine", name: "Space Marine Tactique", tier: 3, desc: "Ange de la Mort polyvalent (Adeptus Astartes)." },
            { id: "scout_marine", name: "Scout Marine", tier: 2, desc: "Infiltrateur et recrue Astartes." },
            { id: "guardsman", name: "Gardien Impérial", tier: 1, desc: "Soldat de l'Astra Militarum." },
            { id: "tempestus_scion", name: "Tempestus Scion", tier: 2, desc: "Soldat d'élite des forces spéciales." },
            { id: "commissar", name: "Commissaire", tier: 3, desc: "Officier politique maintenant la discipline." },
            { id: "tech_priest", name: "Tech-Priest", tier: 3, desc: "Savant de l'Adeptus Mechanicus." },
            { id: "skitarius", name: "Skitarius", tier: 2, desc: "Soldat cyborg du Dieu-Machine." },
            { id: "inquisitorial_acolyte", name: "Acolyte de l'Inquisition", tier: 1, desc: "Agent de l'ombre au service d'un Inquisiteur." },
            { id: "rogue_trader", name: "Libre-Marchand", tier: 2, desc: "Explorateur doté d'une Charte de Commerce." }
        ]
    },

    // === CHAOS (Mélange Humains, Space Marines, Dark Mechanicum) ===
    'chaos': {
        title: "ARCHÉTYPES DU CHAOS",
        desc: "Serviteurs des Dieux Sombres.",
        units: [
            { id: "chaos_cultist", name: "Cultiste du Chaos", tier: 1, desc: "Chair à canon fanatique." },
            { id: "chaos_legionary", name: "Légionnaire du Chaos", tier: 3, desc: "Vétéran de la Longue Guerre." },
            { id: "khorne_berzerker", name: "Berzerker de Khorne", tier: 3, desc: "Tueur frénétique au corps à corps." },
            { id: "sorcerer", name: "Sorcier du Chaos", tier: 3, desc: "Manipulateur des énergies du Warp." },
            { id: "heretek", name: "Hérétek", tier: 2, desc: "Mécanicien sombre et corrompu." },
            { id: "rogue_psyker", name: "Psyker Renégat", tier: 2, desc: "Sorcellerie instable et dangereuse." },
            { id: "dark_apostle", name: "Apôtre Noir", tier: 3, desc: "Prêtre guerrier des mots impies." },
            { id: "traitor_guard", name: "Garde Renégat", tier: 1, desc: "Soldat ayant tourné le dos à l'Empereur." },
            { id: "raptor", name: "Raptor", tier: 3, desc: "Troupe de choc avec réacteurs dorsaux." },
            { id: "beastman", name: "Homme-Bête", tier: 1, desc: "Mutant brutal utilisé comme choc." }
        ]
    },

    // === AELDARI (Mélange Craftworld, Drukhari, Harlequin) ===
    'aeldari': {
        title: "ARCHÉTYPES AELDARI",
        desc: "Races anciennes et psychiques.",
        units: [
            { id: "guardian", name: "Gardien", tier: 1, desc: "Milicien des Vaisseaux-Mondes." },
            { id: "ranger", name: "Ranger", tier: 2, desc: "Éclaireur et sniper solitaire." },
            { id: "warlock", name: "Warlock", tier: 3, desc: "Psyker de combat." },
            { id: "banshee", name: "Banshee Huante", tier: 3, desc: "Guerrière aspect agile." },
            { id: "dire_avenger", name: "Vengeur Lugubre", tier: 3, desc: "Guerrier aspect tactique." },
            { id: "wych", name: "Céraste (Wych)", tier: 2, desc: "Gladiatrice Drukhari." },
            { id: "kabalite", name: "Guerrier Kabalite", tier: 1, desc: "Soldat sadique de Commorragh." },
            { id: "harlequin_troupe", name: "Trouper Harlequin", tier: 3, desc: "Guerrier-danseur du Dieu Moqueur." },
            { id: "corsair", name: "Corsaire Aeldari", tier: 2, desc: "Pirate de l'espace." },
            { id: "spiritseer", name: "Spiritseer", tier: 3, desc: "Guide des âmes mortes." }
        ]
    },

    // === ORKS (La Waaagh!) ===
    'orks': {
        title: "ARCHÉTYPES ORKS",
        desc: "La brutalité incarnée.",
        units: [
            { id: "ork_boy", name: "Boy", tier: 1, desc: "Le guerrier de base. Résistant et brutal." },
            { id: "kommando", name: "Kommando", tier: 2, desc: "Ork rusé utilisant l'infiltration." },
            { id: "nob", name: "Nob", tier: 3, desc: "Chef d'escouade, grand et fort." },
            { id: "weirdboy", name: "Weirdboy", tier: 3, desc: "Psyker canalisant l'énergie Waaagh." },
            { id: "mekboy", name: "Mekboy", tier: 2, desc: "Bricoleur d'armes et de véhicules." },
            { id: "painboy", name: "Painboy", tier: 2, desc: "Médecin boucher." },
            { id: "stormboy", name: "Stormboy", tier: 2, desc: "Ork avec une roquette dans le dos." },
            { id: "burna_boy", name: "Burna Boy", tier: 2, desc: "Pyromane obsédé." },
            { id: "tankbusta", name: "Tankbusta", tier: 2, desc: "Chasseur de gros blindés." },
            { id: "flash_git", name: "Flash Git", tier: 3, desc: "Pirate riche avec un énorme flingue." }
        ]
    }
};

function openArchetypeList(factionKey) {
    const modal = document.getElementById('creationModal');
    const container = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');
    const data = archetypeData[factionKey];

    if (data) {
        title.innerText = data.title;
        container.innerHTML = `<p style="margin-bottom: 20px; font-style: italic;">${data.desc}</p>`;
        
        // Entête du tableau
        let html = `<div style="display:flex; border-bottom:2px solid #33ff00; padding-bottom:5px; margin-bottom:10px; font-weight:bold;">
                        <div style="width:50px;">TIER</div>
                        <div style="flex-grow:1;">ARCHÉTYPE</div>
                        <div>ACTION</div>
                    </div>`;

        data.units.forEach(u => {
            html += `
            <div class="archetype-row">
                <div style="width:50px;"><span class="tier-badge">T${u.tier}</span></div>
                <div class="archetype-info">
                    <strong style="color: #d4af37;">${u.name}</strong><br>
                    <span style="font-size:0.8em; color:#aaa;">${u.desc}</span>
                </div>
                <div>
                    <a href="conditions.html?unit=${u.id}" class="archetype-link">
                        [ SÉLECTIONNER ]
                    </a>
                </div>
            </div>`;
        });

        container.innerHTML += html;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('creationModal').style.display = 'none';
}

// Fermeture au clic dehors
window.onclick = function(event) {
    if (event.target == document.getElementById('creationModal')) {
        closeModal();
    }
}