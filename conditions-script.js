// --- BASE DE DONNÉES DÉTAILLÉE DES PROFILS (STATS) ---
// La clé (ex: "tactical") DOIT correspondre à l'ID utilisé dans races-script.js
const profiles = {
    // ========================
    // IMPERIUM
    // ========================
    "tactical": {
        name: "Space Marine Tactique", tier: 3, faction: "Adeptus Astartes",
        attrs: { S: 4, T: 4, A: 4, I: 4, Wil: 3, Int: 3, Fel: 1 },
        ability: { name: "Anges de la Mort", desc: "Ignore les malus de DN pour armes lourdes/encombrantes. +1 Icône aux tests de Résolution." },
        skills: ["Tir 4", "Mêlée 4", "Athlétisme 3", "Vigilance 2"],
        wargear: ["Armure Énergétique Mk VII", "Bolter Godwyn", "Couteau de combat", "Pistolet Bolter"]
    },
    "scout": {
        name: "Scout Marine", tier: 2, faction: "Adeptus Astartes",
        attrs: { S: 4, T: 4, A: 4, I: 4, Wil: 3, Int: 3, Fel: 1 },
        ability: { name: "Infiltration", desc: "Gagne +2 dés bonus aux tests de Discrétion. Peut se déployer en avant." },
        skills: ["Tir 3", "Mêlée 3", "Discrétion 4", "Survie 3"],
        wargear: ["Armure Scout", "Bolter ou Fusil Sniper", "Couteau de combat", "Cameleoline"]
    },
    "sister_battle": {
        name: "Sœur de Bataille", tier: 2, faction: "Adepta Sororitas",
        attrs: { S: 3, T: 3, A: 3, I: 3, Wil: 4, Int: 3, Fel: 3 },
        ability: { name: "Actes de Foi", desc: "Peut dépenser de la Foi pour améliorer ses jets. Réserve de Foi = Volonté." },
        skills: ["Tir 3", "Mêlée 3", "Érudition (Imperium) 2", "Volonté 4"],
        wargear: ["Armure Énergétique Sororitas", "Bolter Godwyn", "Chapelet", "Livre Saint"]
    },
    "guardsman": {
        name: "Garde Impérial", tier: 1, faction: "Astra Militarum",
        attrs: { S: 3, T: 3, A: 3, I: 3, Wil: 2, Int: 2, Fel: 2 },
        ability: { name: "Marteau de l'Empereur", desc: "+1d6 à l'attaque si la cible a déjà été attaquée par un allié ce tour." },
        skills: ["Tir 3", "Athlétisme 2", "Survie 1"],
        wargear: ["Armure Flak", "Fusil Laser", "Baïonnette", "Pack de rations"]
    },
    "commissar": {
        name: "Commissaire", tier: 3, faction: "Astra Militarum",
        attrs: { S: 3, T: 3, A: 3, I: 4, Wil: 5, Int: 3, Fel: 4 },
        ability: { name: "Exécution Sommaire", desc: "Peut tuer un allié pour restaurer la Peur ou la Foi du groupe." },
        skills: ["Tir 4", "Mêlée 4", "Intimidation 5", "Commandement 4"],
        wargear: ["Manteau de Commissaire", "Pistolet Bolter", "Épée Énergétique", "Armure Carapace"]
    },
    "skitarius": {
        name: "Skitarius Ranger", tier: 2, faction: "Adeptus Mechanicus",
        attrs: { S: 3, T: 3, A: 3, I: 3, Wil: 3, Int: 4, Fel: 1 },
        ability: { name: "Hymne Binarique", desc: "Peut communiquer avec les machines et gagne +1d6 aux tests Tech." },
        skills: ["Tir 3", "Tech 4", "Érudition (Mars) 3"],
        wargear: ["Plaques Skitarii", "Fusil Galvanique", "Omnispex"]
    },
    "tech_priest": {
        name: "Tech-Priest Enginseer", tier: 3, faction: "Adeptus Mechanicus",
        attrs: { S: 3, T: 4, A: 3, I: 3, Wil: 4, Int: 5, Fel: 1 },
        ability: { name: "Rites de Réparation", desc: "Peut réparer des véhicules ou des structures (Action Complexe)." },
        skills: ["Tech 5", "Mêlée 3", "Tir 3", "Médecine 2"],
        wargear: ["Armure Énergétique Légère", "Hache Omnissienne", "Servo-Bras", "Pistolet Laser"]
    },
    "inquisitor": {
        name: "Inquisiteur", tier: 4, faction: "Inquisition",
        attrs: { S: 3, T: 3, A: 4, I: 4, Wil: 6, Int: 5, Fel: 5 },
        ability: { name: "Autorité Absolue", desc: "+Rang dés bonus aux tests sociaux contre les citoyens impériaux." },
        skills: ["Tir 4", "Mêlée 4", "Enquête 5", "Intimidation 5", "Persuasion 5"],
        wargear: ["Armure Énergétique Ignatus", "Pistolet Bolter", "Badge Rosette", "Épée de Force"]
    },

    // ========================
    // CHAOS
    // ========================
    "cultist": {
        name: "Cultiste du Chaos", tier: 1, faction: "Chaos",
        attrs: { S: 3, T: 3, A: 3, I: 3, Wil: 2, Int: 2, Fel: 2 },
        ability: { name: "Dévotion Fanatique", desc: "+1d6 aux tests de Volonté pour résister à la peur." },
        skills: ["Tir 2", "Mêlée 2", "Tromperie 2"],
        wargear: ["Armure de fortune", "Pistolet automatique", "Couteau rituel", "Symbole impie"]
    },
    "csm": {
        name: "Heretic Astartes", tier: 3, faction: "Chaos Space Marines",
        attrs: { S: 4, T: 5, A: 4, I: 4, Wil: 3, Int: 3, Fel: 1 },
        ability: { name: "Vétéran de la Longue Guerre", desc: "Haine (Imperium). Gagne de la Corruption au lieu de la Peur." },
        skills: ["Tir 4", "Mêlée 4", "Athlétisme 3", "Intimidation 3"],
        wargear: ["Armure Énergétique Corrompue", "Bolter", "Couteau de combat"]
    },

    // ========================
    // ORKS
    // ========================
    "boy": {
        name: "Ork Boy", tier: 1, faction: "Orks",
        attrs: { S: 4, T: 4, A: 3, I: 2, Wil: 2, Int: 1, Fel: 2 },
        ability: { name: "On y va !", desc: "Gagne +1 dé en Mêlée s'il a chargé ce tour-ci." },
        skills: ["Mêlée 3", "Tir 2", "Intimidation 2"],
        wargear: ["Kikoup'", "Fling'", "Armure de bric et de broc"]
    },
    "nob": {
        name: "Ork Nob", tier: 3, faction: "Orks",
        attrs: { S: 5, T: 5, A: 4, I: 3, Wil: 3, Int: 2, Fel: 3 },
        ability: { name: "C'est moi le Chef", desc: "Peut crier des ordres pour restaurer le Choc des Boyz." },
        skills: ["Mêlée 5", "Intimidation 4", "Tir 3"],
        wargear: ["Gros Kikoup'", "Pince Énergétik", "Fling' Customisé"]
    },
    "kommando": {
        name: "Kommando", tier: 2, faction: "Orks",
        attrs: { S: 4, T: 4, A: 3, I: 3, Wil: 2, Int: 2, Fel: 1 },
        ability: { name: "Rusé comme Mork", desc: "Utilise l'Agilité pour la Discrétion au lieu de l'attribut par défaut." },
        skills: ["Discrétion 4", "Mêlée 3", "Survie 3"],
        wargear: ["Kikoup'", "Fling'", "Bombes Frak", "Peinture Violette"]
    },

    // ========================
    // AELDARI & DRUKHARI
    // ========================
    "guardian": {
        name: "Gardien Aeldari", tier: 1, faction: "Craftworld",
        attrs: { S: 3, T: 3, A: 4, I: 4, Wil: 3, Int: 3, Fel: 2 },
        ability: { name: "Masque de Guerre", desc: "Immunisé à la Peur tant que le Masque est actif." },
        skills: ["Tir 3", "Athlétisme 3", "Vigilance 3"],
        wargear: ["Armure Composite", "Catapulte Shuriken", "Grenade Plasma"]
    },
    "ranger": {
        name: "Aeldari Ranger", tier: 2, faction: "Craftworld",
        attrs: { S: 3, T: 3, A: 4, I: 4, Wil: 3, Int: 3, Fel: 2 },
        ability: { name: "Venu de Nulle Part", desc: "Peut apparaître n'importe où sur le champ de bataille au tour 1." },
        skills: ["Tir 4", "Discrétion 4", "Survie 4"],
        wargear: ["Armure Composite", "Long Fusil de Ranger", "Pistolet Shuriken", "Cape de Caméléon"]
    },
    "warlock": {
        name: "Warlock", tier: 3, faction: "Craftworld",
        attrs: { S: 3, T: 3, A: 4, I: 5, Wil: 5, Int: 4, Fel: 3 },
        ability: { name: "Destructeur", desc: "Psyker. Peut lancer Châtiment et 1 pouvoir mineur." },
        skills: ["Psy 4", "Mêlée 4", "Commandement 3"],
        wargear: ["Armure Runique", "Lame Sorcière", "Pistolet Shuriken"]
    },
    "kabalite": {
        name: "Guerrier Kabalite", tier: 1, faction: "Drukhari",
        attrs: { S: 3, T: 3, A: 4, I: 5, Wil: 2, Int: 3, Fel: 1 },
        ability: { name: "Soif de Douleur", desc: "Gagne +1 dé si l'ennemi est blessé ou effrayé." },
        skills: ["Tir 3", "Mêlée 3", "Intimidation 2"],
        wargear: ["Armure Kabalite", "Fusil Éclateur", "Couteau"]
    },

    // ========================
    // NECRONS (HOMEBREW)
    // ========================
    "necron_warrior": {
        name: "Guerrier Nécron", tier: 2, faction: "Dynastie Nécron",
        attrs: { S: 4, T: 4, A: 2, I: 2, Wil: 4, Int: 2, Fel: 1 },
        ability: { name: "Protocoles de Réanimation", desc: "Lancez 1d6 à chaque tour si à 0 PV. Sur 5+, revient avec 1 PV." },
        skills: ["Tir 3", "Tech 2", "Vigilance 2"],
        wargear: ["Corps en Necrodermis", "Ecorcheur Gauss"]
    },
    "immortal": {
        name: "Immortel", tier: 3, faction: "Dynastie Nécron",
        attrs: { S: 5, T: 5, A: 2, I: 2, Wil: 5, Int: 3, Fel: 1 },
        ability: { name: "Implacable", desc: "Peut tirer avec des armes lourdes sans malus après mouvement." },
        skills: ["Tir 4", "Tech 3", "Intimidation 3"],
        wargear: ["Corps en Necrodermis", "Blaster Gauss ou Carabine Tesla"]
    },

    // ========================
    // T'AU (HOMEBREW VAXIAN)
    // ========================
    "fire_warrior": {
        name: "Guerrier de Feu", tier: 2, faction: "Empire T'au",
        attrs: { S: 3, T: 3, A: 3, I: 3, Wil: 3, Int: 3, Fel: 2 },
        ability: { name: "Volonté Inébranlable", desc: "+1d6 Volonté si à portée d'un Éthéré." },
        skills: ["Tir 3", "Tech 2", "Athlétisme 2"],
        wargear: ["Armure de Combat", "Fusil à Impulsion", "Grenade Photon"]
    },
    "crisis_suit": {
        name: "Pilote Crisis XV8", tier: 3, faction: "Empire T'au",
        attrs: { S: 3, T: 3, A: 3, I: 3, Wil: 3, Int: 4, Fel: 2 },
        ability: { name: "Héros Mant'au", desc: "Ignore les pénalités de tir en mouvement grâce à l'exo-armure." },
        skills: ["Pilotage 4", "Tir 4", "Tech 3"],
        wargear: ["Exo-armure XV8 Crisis", "Fusil à Plasma", "Système de missiles"]
    },

    // ========================
    // MARGINAUX (SCUM)
    // ========================
    "scum": {
        name: "Racaille", tier: 1, faction: "Parias",
        attrs: { S: 3, T: 3, A: 3, I: 3, Wil: 2, Int: 2, Fel: 3 },
        ability: { name: "Débrouillardise", desc: "Peut relancer les dés de ruse ratés une fois par scène." },
        skills: ["Tromperie 3", "Discrétion 3", "Mêlée 2"],
        wargear: ["Vêtements sales", "Couteau", "Pistolet automatique"]
    },
    "desperado": {
        name: "Desperado", tier: 2, faction: "Mercenaire",
        attrs: { S: 3, T: 3, A: 4, I: 4, Wil: 3, Int: 3, Fel: 3 },
        ability: { name: "Tir en mouvement", desc: "Peut courir et tirer avec un pistolet sans malus." },
        skills: ["Tir 4", "Pilotage 3", "Vigilance 3"],
        wargear: ["Gilet Pare-balles", "Pistolet Bolter", "Épée"]
    },
    "rogue_trader": {
        name: "Libre-Marchand", tier: 4, faction: "Imperium / Indépendant",
        attrs: { S: 3, T: 3, A: 4, I: 4, Wil: 5, Int: 5, Fel: 6 },
        ability: { name: "Charte de Commerce", desc: "Ressources quasi illimitées. +Rank dés bonus aux tests d'Influence." },
        skills: ["Persuasion 5", "Commerce 5", "Commandement 4", "Tir 3"],
        wargear: ["Armure carapace de luxe", "Pistolet Archéotech", "Épée Énergétique", "Serviteur"]
    }
};
//"Nom": {
//    name: "Nom", tier: , faction: "faction",
//    attrs: { S: 5, T: 5, A: 3, I: 4, Wil: 4, Int: 2, Fel: 0 },
//    ability: { name: "Synapse", desc: "Les alliés proches réussissent automatiquement les tests de peur." },
//    skills: ["Mêlée 4", "Tir 3", "Vigilance 3"],
//    wargear: ["Crache-mort", "Épées d'os", "Griffes tranchantes"]
//},

// --- LOGIQUE D'AFFICHAGE ---
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const unitId = urlParams.get('unit');
    let data = profiles[unitId];

    // GESTION D'ERREUR : Si l'unité n'est pas dans la liste ci-dessus
    if (!data) {
        data = {
            name: "Données corrompues (" + unitId + ")",
            tier: "?",
            faction: "Inconnue",
            attrs: { S:0, T:0, A:0, I:0, Wil:0, Int:0, Fel:0 },
            ability: { name: "Erreur 404", desc: "Ce profil n'a pas encore été encodé dans la base de données du Mechanicus veuillez contacter votre supérieur." },
            skills: ["Données manquantes"],
            wargear: ["Aucun"]
        };
    }

    // REMPLISSAGE HTML
    document.getElementById('charName').innerText = data.name.toUpperCase();
    document.getElementById('charTier').innerText = "TIER " + data.tier;
    document.getElementById('charFaction').innerText = data.faction;

    const attrContainer = document.getElementById('attributesGrid');
    attrContainer.innerHTML = "";
    for (const [key, value] of Object.entries(data.attrs)) {
        attrContainer.innerHTML += `
        <div class="stat-box">
            <span class="stat-val">${value}</span>
            <span class="stat-label">${key}</span>
        </div>`;
    }

    document.getElementById('abilityName').innerText = data.ability.name;
    document.getElementById('abilityDesc').innerText = data.ability.desc;

    const skillsList = document.getElementById('skillsList');
    data.skills.forEach(s => {
        let li = document.createElement('li');
        li.innerText = s;
        skillsList.appendChild(li);
    });

    const gearList = document.getElementById('wargearList');
    data.wargear.forEach(g => {
        let li = document.createElement('li');
        li.innerText = g;
        gearList.appendChild(li);
    });
});