// script.js - Protocoles du Cogitateur v4.1 (Finale & Corrigée)

// --- INITIALISATION DU SYSTÈME ---
document.addEventListener("DOMContentLoaded", () => {
    initSystem();
});

function initSystem() {
    console.log("+++ Initialisation des protocoles +++");
    
    // 1. Effets Visuels
    createScanlines();
    
    // 2. Effet sur les titres
    const titles = document.querySelectorAll("h1");
    titles.forEach(title => hackEffect(title));
    
    // 3. Contenu dynamique
    generateThoughtOfTheDay();
    initMap(); 

    initClasses();

    // 4. GESTION DU RETOUR AUTOMATIQUE (Réouverture de la pop-up)
    const urlParams = new URLSearchParams(window.location.search);
    const raceToOpen = urlParams.get('open');

    if (raceToOpen) {
        console.log(" Protocoles de réouverture pour : " + raceToOpen);
        openModal(raceToOpen);
    }
}

// --- EFFETS VISUELS ---

function createScanlines() {
    const scanDiv = document.createElement("div");
    scanDiv.classList.add("scanlines");
    document.body.appendChild(scanDiv);
}

function hackEffect(element) {
    const originalText = element.innerText;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&Runes";
    let iterations = 0;
    
    const interval = setInterval(() => {
        element.innerText = originalText
            .split("")
            .map((letter, index) => {
                if (index < iterations) return originalText[index];
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");

        if (iterations >= originalText.length) clearInterval(interval); 
        iterations += 1 / 3; 
    }, 30); 
}

function generateThoughtOfTheDay() {
    const thoughts = [
        "L'innocence ne prouve rien.",
        "Il n'y a que la guerre.",
        "La connaissance est le pouvoir, cachez-la bien.",
        "Un esprit ouvert est comme une forteresse dont les portes ne sont pas gardées.",
        "La mort est le devoir de chacun.",
        "L'espoir est le premier pas sur la route de la déception.",
        "Brûle l'Hérétique. Tue le Mutant. Purge l'Impur.",
        "Servir l'Empereur est sa propre récompense."
    ];

    const container = document.getElementById("thought-container");
    if (container) {
        const randomIndex = Math.floor(Math.random() * thoughts.length);
        let text = "+++ PENSÉE DU JOUR : " + thoughts[randomIndex] + " +++";
        let i = 0;
        container.innerHTML = ""; 
        
        function typeWriter() {
            if (i < text.length) {
                container.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50); 
            }
        }
        typeWriter();
    }
}

// ==============================================
// === MODULE CARTOGRAPHIE (LEAFLET.JS - VERSION HD) ===
// ==============================================

// 1. Données des Systèmes (Exemples basés sur la carte officielle)
// NOTE : Les coordonnées (x, y) sont approximatives pour une image de 2000x1200px.
// Tu devras peut-être les ajuster légèrement selon la taille exacte de ton image.
const sectorMap = [
    { 
        id: 1, name: "Holy Terra", x: 463, y: 744, 
        type: "Monde Trône", threat: "safe", 
        desc: "Le berceau de l'Humanité et le siège du Trône d'Or. Le centre du Segmentum Solar." 
    },
    { 
        id: 2, name: "Macragge", x: 1350, y: 350, 
        type: "Monde Chapitral", threat: "safe", 
        desc: "Capitale d'Ultramar. Le bastion de Roboute Guilliman dans l'Ultima Segmentum." 
    },
    { 
        id: 3, name: "Baal", x: 1100, y: 800, 
        type: "Monde Hostile", threat: "danger", 
        desc: "Monde natal des Blood Angels. Ravagé par la Flotte Ruche Léviathan. Situé au bord de la Cicatrix." 
    },
    { 
        id: 4, name: "Fenris", x: 750, y: 900, 
        type: "Monde de la Mort", threat: "safe", 
        desc: "Le monde de glace des Space Wolves, situé près de l'Œil de la Terreur." 
    },
    { 
        id: 5, name: "Armageddon", x: 1050, y: 620, 
        type: "Monde Ruche", threat: "danger", 
        desc: "Un monde de guerre éternelle contre les Orks et le Chaos. Vital pour la production industrielle." 
    },
    { 
        id: 6, name: "Vigilus", x: 800, y: 750, 
        type: "Monde Sentinelle", threat: "danger", 
        desc: "La porte du Guantelet de Nachmund. L'un des seuls passages sûrs à travers la Grande Faille." 
    },
    { 
        id: 7, name: "T'au Empire", x: 1550, y: 600, 
        type: "Zone Xenos", threat: "xenos-major", 
        desc: "Domaine de l'Empire T'au en pleine expansion dans l'Ultima Segmentum." 
    },
    {
        id: 8, name: "Cicatrix Maledictum", x: 1000, y: 500,
        type: "Anomalie Warp", threat: "danger",
        desc: "La Grande Faille qui a coupé la galaxie en deux. L'Imperium Nihilus se trouve au-delà."
    }
];

// 2. Initialisation de la carte
function initMap() {
    const mapContainer = document.getElementById('star-map');
    if (!mapContainer) return; 

    console.log("+++ Chargement de la Carte Galactique HD +++");

    // A. Configuration de la carte (Système de coordonnées simple pour image plate)
    const map = L.map('star-map', {
        crs: L.CRS.Simple,
        minZoom: -2, // Permet de dézoomer plus loin
        maxZoom: 2,
        zoomControl: false,
        attributionControl: false
    });

    // B. Dimensions de ton image (A MODIFIER SI TON IMAGE EST DIFFÉRENTE)
    // Ici, je pars du principe que l'image fait environ 2000px de large sur 1200px de haut
    const w = 2000;
    const h = 1600;
    const bounds = [[0, 0], [h, w]];

    // C. Ajout de l'image (Locale)
    // IMPORTANT : Assure-toi que l'image s'appelle bien 'map_background.jpg'
    const imageUrl = 'map_background.jpg'; 
    
    L.imageOverlay(imageUrl, bounds).addTo(map);
    map.fitBounds(bounds);

    // D. Ajout des Marqueurs
    sectorMap.forEach(system => {
        // On adapte la couleur selon la menace
        let colorClass = system.threat; // 'safe', 'danger', 'xenos-major'

        const customIcon = L.divIcon({
            className: 'custom-marker-wrapper',
            // On ajoute une petite cible pulsante autour du point
            html: `<div class="tactical-marker ${colorClass}"></div><div class="marker-label">${system.name}</div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        // Leaflet utilise [Y, X] (Latitude, Longitude), donc on inverse nos coordonnées
        const marker = L.marker([system.y, system.x], {icon: customIcon}).addTo(map);

        marker.on('click', () => {
            showSystemData(system);
            map.flyTo([system.y, system.x], 0); 
            
        });
    });

    // E. OUTIL DE DÉVELOPPEUR : Clic pour obtenir les coordonnées
    // Ouvre ta console (F12) et clique sur la carte pour avoir le X et Y exacts
map.on('click', function(e) {
        const x = Math.round(e.latlng.lng);
        const y = Math.round(e.latlng.lat);
        
        L.popup()
            .setLatLng(e.latlng)
            .setContent(`<b>COORDONNÉES :</b><br>X: ${x}<br>Y: ${y}`)
            .openOn(map);
            
        console.log(`Cible : x: ${x}, y: ${y}`);
    });
}

// 3. Affichage des données (inchangé)
function showSystemData(system) {
    const panel = document.getElementById('planet-data');
    
    panel.innerHTML = `
        <h2 style="border-bottom: 2px solid #33ff00;">${system.name.toUpperCase()}</h2>
        <p><strong>Classification :</strong> ${system.type}</p>
        <p><strong>Statut :</strong> <span class="${system.threat === 'safe' ? '' : 'blink'}" style="color:${getColor(system.threat)}">${system.threat.toUpperCase()}</span></p>
        <p><strong>Coordonnées Galactiques :</strong> ${system.x} . ${system.y}</p>
        <hr style="border-color: #1a5c00;">
        <p class="hacked-text">${system.desc}</p>
        
        <div style="margin-top: 20px; border: 1px solid #1a5c00; padding: 10px; font-size: 0.8em; background: #001100;">
            +++ RELEVÉS ASTROPATHIQUES +++<br>
            Signal : ACTIF<br>
            Warp : ${system.threat === 'danger' ? 'INSTABLE' : 'CALME'}
        </div>
    `;

    const descElement = panel.querySelector('.hacked-text');
    if(descElement) hackEffect(descElement); 
}

// Petite fonction utilitaire pour les couleurs
function getColor(threat) {
    if(threat === 'danger') return '#ff3333'; // Rouge
    if(threat === 'xenos-major') return '#bd00ff'; // Violet Tyranide
    return '#33ff00'; // Vert Impérial
}
// --- BASES DE DONNÉES (LORE & CONDITIONS) ---

// 1. Lore des Espèces
const speciesDB = {
    "human": {
        title: "L'Imperium de l'Humanité",
        lore: "Un empire galactique couvrant un million de mondes, gouverné par le Dieu-Empereur immobile.",
        categories: [
            {
                name: ">>> HUMANITÉ STANDARD",
                entries: [
                    { name: "Garde Impérial (Astra Militarum)", desc: "La première ligne de défense. Des milliards de soldats ordinaires." },
                    { name: "Citoyen de la Ruche", desc: "Ouvrier vivant dans des cités-montagnes surpeuplées." },
                    { name: "Adeptus Mechanicus (Skitarii)", desc: "Soldats cyborgs de Mars." },
                    { name: "Ecclésiarchie", desc: "Prêtres et zélotes propageant le culte impérial." }
                ]
            },
            {
                name: ">>> ABHUMAINS (Mutants Autorisés)",
                entries: [
                    { name: "Ogryn", desc: "Géants de 3 mètres, très forts mais stupides." },
                    { name: "Ratling", desc: "Petits hommes snipers et voleurs." },
                    { name: "Navigator", desc: "Mutants nobles au 3ème œil pour voyager dans le Warp." }
                ]
            },
            {
                name: ">>> EVO / ELITES IMPERIALES",
                entries: [
                    { id: "astartes", name: "Adeptus Astartes (Space Marines)", desc: "Guerriers génétiquement modifiés." },
                    { id: "custodes", name: "Adeptus Custodes", desc: "La Garde d'Or de l'Empereur." },
                    { id: "greyknight", name: "Grey Knights", desc: "Chasseurs de démons." },
                    { id: "sororitas", name: "Sœurs de Bataille (Sororitas)", desc: "Nonnes guerrières en armure énergétique." },
                    { id: "inquisiteur", name: "Inquisiteur", desc: "Juge, jury et bourreau." },
                    { id: "assassin", name: "Assassin Officio", desc: "Armes vivantes spécialisées." }
                ]
            }
        ]
    },
    "chaos": {
        title: "Les Forces du Chaos",
        lore: "Les ennemis jurés de l'Humanité. Ils servent les 4 Dieux Sombres.",
        categories: [
            {
                name: ">>> LES ÉGARÉS",
                entries: [
                    { name: "Cultiste du Chaos", desc: "Humains ayant juré fidélité aux Dieux Sombres." },
                    { name: "Traitor Guard", desc: "Régiments de la Garde ayant trahi." }
                ]
            },
            {
                name: ">>> EVO / HERETIC ASTARTES",
                entries: [
                    { id: "csm", name: "Chaos Space Marine", desc: "Vétérans de la Longue Guerre." },
                    { id: "daemon_prince", name: "Prince Démon", desc: "Mortel ayant atteint l'immortalité démonique." }
                ]
            }
        ]
    },
    "aeldari": {
        title: "Aeldari (Craftworlds)",
        lore: "Anciens maîtres de la galaxie, hautains et psychiques.",
        categories: [
            {
                name: ">>> CITOYENS",
                entries: [ { name: "Gardien", desc: "Civils prenant les armes." } ]
            },
            {
                name: ">>> EVO / VOIE DU GUERRIER",
                entries: [
                    { id: "aspect_warrior", name: "Aspect Warrior", desc: "Spécialistes ultimes (Banshees, Scorpions...)." },
                    { id: "farseer", name: "Warlock / Farseer", desc: "Psykers manipulant le destin." },
                    { id: "wraithguard", name: "Wraithguard (Fantôme)", desc: "Construit robotique animé." }
                ]
            }
        ]
    },
    "drukhari": {
        title: "Drukhari (Eldars Noirs)",
        lore: "Pirates sadiques vivant de la souffrance d'autrui.",
        categories: [
            {
                name: ">>> KABALES",
                entries: [ { name: "Kabalite", desc: "Guerrier cruel et rapide." } ]
            },
            {
                name: ">>> EVO / SEIGNEURS",
                entries: [
                    { id: "incubus", name: "Incube", desc: "Guerrier d'élite mercenaire." },
                    { id: "archon", name: "Archon", desc: "Seigneur de Kabale." }
                ]
            }
        ]
    },
    "ork": {
        title: "Waaagh! Ork",
        lore: "Les Orks ne vivent que pour se battre.",
        categories: [
            {
                name: ">>> LES BOYZ",
                entries: [ { name: "Ork Boy", desc: "La brute de base." } ]
            },
            {
                name: ">>> EVO / LES BOSS",
                entries: [
                    { id: "nob", name: "Nob", desc: "L'élite dirigeante, plus grand et plus fort." },
                    { id: "meganob", name: "Meganob", desc: "Nob en méga-armure." },
                    { id: "weirdboy", name: "Weirdboy", desc: "Psyker instable." }
                ]
            }
        ]
    },
    "tyranid": {
        title: "Tyranides",
        lore: "Le Grand Dévoreur.",
        categories: [
            {
                name: ">>> ESSAIMS",
                entries: [ { name: "Termagant", desc: "Petit organisme de tir." } ]
            },
            {
                name: ">>> EVO / SYNAPSE",
                entries: [ 
                    { id: "tyranid_warrior", name: "Guerrier Tyranide", desc: "Officier de terrain." },
                    { id: "carnifex", name: "Carnifex", desc: "Bélier vivant." }
                ]
            }
        ]
    },
    "necron": {
        title: "Nécrons",
        lore: "Guerriers de métal immortels.",
        categories: [
            {
                name: ">>> PHALANGES",
                entries: [ { name: "Guerrier Nécrone", desc: "Automate sans âme." } ]
            },
            {
                name: ">>> EVO / NOBLESSE",
                entries: [ 
                    { id: "immortal", name: "Immortel", desc: "Soldat d'élite." },
                    { id: "overlord", name: "Overlord", desc: "Le maître de la Dynastie." }
                ]
            }
        ]
    },
    "tau": {
        title: "Empire T'au",
        lore: "Pour le Bien Suprême.",
        categories: [
            {
                name: ">>> CASTES",
                entries: [ { name: "Guerrier de Feu", desc: "Infanterie de ligne." } ]
            },
            {
                name: ">>> EVO / BATTLESUITS",
                entries: [ 
                    { id: "crisis", name: "Crisis Battlesuit", desc: "Armure volante lourdement armée." },
                    { id: "stealth", name: "Stealth Suit", desc: "Armure furtive." }
                ]
            }
        ]
    },
    "votann": {
        title: "Ligues de Votann",
        lore: "Nains de l'espace robustes.",
        categories: [
            {
                name: ">>> KYN",
                entries: [ { name: "Hearthkyn Warrior", desc: "Soldat de base." } ]
            },
            {
                name: ">>> EVO / ELITES",
                entries: [ { id: "hearthguard", name: "Einhyr Hearthguard", desc: "L'élite en exo-armure." } ]
            }
        ]
    }
};

// 2. Base de données des CONDITIONS (LORE & STATS)
const conditionsDB = {
    // ================= IMPERIUM =================
    "astartes": {
        name: "Adeptus Astartes (Space Marine)",
        stats: "Force 45+ | Endurance 45+ | Capacité de Combat 40+.",
        cost: "Lore : Recruté avant la puberté (10-14 ans). 19 organes implantés. Survie au conditionnement psycho-chimique.",
        drawback: "Transhumain : Ne ressent plus la peur ni l'empathie. Malus social (-20) avec les humains normaux.",
        quote: "Ils seront mes fils et, en eux, ne vivra aucun doute."
    },
    "custodes": {
        name: "Adeptus Custodes",
        stats: "Toutes caractéristiques à 55+ | Volonté 60+.",
        cost: "Lore : Création unique bio-alchimique (pas d'implants de série). Doit être un noble Terrien offert à la naissance.",
        drawback: "Devoir Éternel : Interdiction de quitter Terra sauf ordre direct de l'Empereur. Solitude absolue.",
        quote: "Nous ne sommes pas des soldats. Nous sommes Sa volonté."
    },
    "greyknight": {
        name: "Grey Knight",
        stats: "Volonté 60+ | Psyker (Niveau Delta min) | Capacité de Combat 50+.",
        cost: "Lore : Survie au 'Rituel des Détestables'. Implantation du Génome Aegis (sang de l'Empereur).",
        drawback: "Secret Absolu : Tout témoin allié non-Astartes doit être exécuté ou lobotomisé après la mission.",
        quote: "Je suis le Marteau."
    },
    "sororitas": {
        name: "Sœur de Bataille",
        stats: "Volonté 40+ | Agilité 35+ | Foi (Talent 'Pure Faith').",
        cost: "Lore : Orpheline de la Schola Progenium. Entraînement fanatique dès l'enfance.",
        drawback: "Intolérance : Refuse catégoriquement de s'allier à des Psykers ou Xenos (conflit de groupe garanti).",
        quote: "L'esprit sans but erre dans les ténèbres."
    },
    "inquisiteur": {
        name: "Inquisiteur",
        stats: "Volonté 50+ | Intelligence 45+ | Influence 50+.",
        cost: "Lore : 20+ ans de service comme Acolyte. Parrainage par un Seigneur Inquisiteur.",
        drawback: "Cible Prioritaire : L'ennemi concentrera toujours ses tirs sur vous. Paranoïa constante.",
        quote: "L'innocence ne prouve rien."
    },
    "assassin": {
        name: "Assassin Officio",
        stats: "Agilité 55+ | Capacité de Tir/Combat 55+.",
        cost: "Lore : Enlevé à la naissance. Lavage de cerveau total. Aucune personnalité restante.",
        drawback: "Outil Vivant : Incapable d'interaction sociale normale. Dépendance chimique aux drogues de stase.",
        quote: "Pour les morts, le silence est la seule réponse."
    },

    // ================= CHAOS =================
    "csm": {
        name: "Heretic Astartes",
        stats: "Force 50+ | Endurance 50+ | Corruption > 30.",
        cost: "Lore : Astartes renégat. Doit pactiser avec le Warp pour survivre à la 'Longue Guerre'.",
        drawback: "Instabilité : Risque de mutation (Enfant du Chaos) à chaque péril Warp ou échec critique.",
        quote: "Mort au Faux Empereur !"
    },
    "daemon_prince": {
        name: "Prince Démon",
        stats: "Corruption 100 (Total) | Faveur Divine Max.",
        cost: "Lore : Avoir sacrifié des mondes entiers. Ne peut plus être tué physiquement (banni dans le Warp).",
        drawback: "Esclave des Dieux : Perd son libre arbitre pour devenir une extension de son Dieu tutélaire.",
        quote: "Je suis l'apothéose."
    },

    // ================= AELDARI =================
    "aspect_warrior": {
        name: "Guerrier Aspect",
        stats: "Agilité 45+ | Capacité de Combat/Tir 45+.",
        cost: "Lore : Avoir endossé le Masque de Guerre. Risque de se perdre sur la Voie (devenir Exarque).",
        drawback: "Khaine : Enfilant son masque, le joueur change de personnalité (devient un tueur froid) jusqu'à la fin du combat.",
        quote: "La guerre est mon art."
    },
    "farseer": {
        name: "Grand Prophète (Farseer)",
        stats: "Volonté 60+ | Psyker (Niveau Alpha/Beta).",
        cost: "Lore : Avoir parcouru la Voie du Sorcier trop longtemps. Se transforme lentement en cristal.",
        drawback: "Regard du Warp : Attire les démons de Slaanesh plus que n'importe qui d'autre.",
        quote: "Le futur n'est pas écrit, il est forgé."
    },
    "wraithguard": {
        name: "Garde Fantôme",
        stats: "Endurance 60+ | Force 50+ | Initiative 10.",
        cost: "Lore : Le personnage est MORT. C'est une âme transférée dans une coque de moelle spectrale.",
        drawback: "Disconnexion : Perçoit le monde réel comme un rêve flou. Réagit lentement sans un 'Spiritseer' pour le guider.",
        quote: "Je marche dans la brume."
    },

    // ================= DRUKHARI =================
    "incubus": {
        name: "Incube",
        stats: "Capacité de Combat 55+ | Force 40+.",
        cost: "Lore : Avoir tué un Aspect Warrior Eldar en duel et brisé sa pierre d'âme.",
        drawback: "Mercenaire : N'a aucune loyauté sauf envers son contrat. Si le joueur ne paie pas, il part.",
        quote: "Ma lame est ma vérité."
    },
    "archon": {
        name: "Archon",
        stats: "Intelligence 50+ | Agilité 50+ | Influence 60+.",
        cost: "Lore : Avoir assassiné tous ses rivaux. Posséder une citadelle à Commorragh.",
        drawback: "La Soif : Doit infliger de la douleur quotidiennement ou subit des malus cumulatifs de stats (flétrissement).",
        quote: "La souffrance est un mets délicat."
    },

    // ================= ORKS =================
    "nob": {
        name: "Nob Ork",
        stats: "Force 50+ | Endurance 50+.",
        cost: "Lore : Taille > 2m50. Avoir tué son précédent chef pour prendre sa place.",
        drawback: "Arrogance : Doit réussir un test de Volonté pour ne pas frapper un Grot ou un humain qui lui parle mal.",
        quote: "J'suis l'plus fort, alors j'suis l'chef !"
    },
    "meganob": {
        name: "Meganob",
        stats: "Force 60+ | Agilité 10.",
        cost: "Lore : Être assez riche (dents) pour se payer une armure soudée sur la peau par un Mekboy fou.",
        drawback: "Lent et Lourd : Ne peut pas courir. Peut passer à travers les murs, mais pas les portes.",
        quote: "Kling ! Klang ! Boum !"
    },
    "weirdboy": {
        name: "Bizarboy (Weirdboy)",
        stats: "Psyker (Instable) | Volonté 20 (faible).",
        cost: "Lore : Être un paratonnerre psychique pour l'énergie Waaagh environnante.",
        drawback: "Tête Explosive : Si le jet psychique échoue, lancez 1d100. Sur 90+, la tête du Weirdboy explose, tuant les alliés proches.",
        quote: "J'ai mal au crâne boss..."
    },

    // ================= TYRANIDES =================
    "tyranid_warrior": {
        name: "Guerrier Tyranide",
        stats: "Force 45+ | Endurance 45+ | Synapse.",
        cost: "Lore : Organisme complexe. Nécessite une grande quantité de biomasse pour être généré.",
        drawback: "Créature Synaptique : Si tué, les créatures mineures (Gaunts) proches reviennent à l'état sauvage (stupides).",
        quote: "Krrreeeeee !"
    },
    "carnifex": {
        name: "Carnifex",
        stats: "Force 70+ | Endurance 70+.",
        cost: "Lore : Bélier vivant. Ne peut être joué que dans des scénarios de guerre ouverte.",
        drawback: "Folie Furieuse : Doit être constamment sous contrôle synaptique, sinon il charge la chose la plus proche.",
        quote: "*Rugissement sismique*"
    },

    // ================= NECRONS =================
    "immortal": {
        name: "Immortel",
        stats: "Endurance 50+ | Capacité de Tir 45+.",
        cost: "Lore : Avoir été un soldat d'élite lors du Biotransfert. A conservé sa conscience tactique mais pas son humanité.",
        drawback: "Sans Âme : Immunisé à la peur, mais incapable de créativité ou d'empathie. Robotique.",
        quote: "Le temps est notre allié."
    },
    "overlord": {
        name: "Phaeron / Tétrarque",
        stats: "Force 60+ | Endurance 60+ | Intelligence 60+.",
        cost: "Lore : Corps en nécroderme de haute qualité. Esprit intact mais potentiellement sénile (60 millions d'années de sommeil).",
        drawback: "Programmes Corrompus : Lancez un dé au début de la partie. Risque de bug logique (croire qu'il est encore de chair, ignorer les 'nuisibles').",
        quote: "Cette galaxie m'appartient."
    },

    // ================= TAU =================
    "crisis": {
        name: "Pilote Crisis (Shas'ui)",
        stats: "Agilité 40+ | Intelligence 35+.",
        cost: "Lore : 4 ans de service actif. Avoir réussi l'Épreuve du Feu.",
        drawback: "Rituel du Ta'lissera : Lié par le sang à son équipe. Si ses équipiers meurent, subit un traumatisme majeur (-20 à tout).",
        quote: "Pour le Bien Suprême."
    },
    "stealth": {
        name: "Stealth Suit (XV25)",
        stats: "Agilité 50+ | Discrétion 60+.",
        cost: "Lore : Opérateur 'Loup Solitaire'. Utilise un générateur de champ expérimental.",
        drawback: "Isolation : L'armure affecte le cerveau. Le pilote devient distant et paranoïaque.",
        quote: "Je suis l'ombre."
    },

    // ================= VOTANN =================
    "hearthguard": {
        name: "Einhyr Hearthguard",
        stats: "Endurance 55+ | Force 45+.",
        cost: "Lore : Garde du corps d'un haut dignitaire. Armure Exo complète.",
        drawback: "Rancunier : Si un ennemi le blesse, il DOIT le tuer avant la fin de la partie ou noter une 'Rancune' dans le livre (malus permanent tant que non vengé).",
        quote: "Les Ancêtres regardent."
    }
};

// --- LOGIQUE DES MODALES ET LIENS ---

function openModal(raceId) {
    const modal = document.getElementById("speciesModal");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");
    
    const data = speciesDB[raceId];

    if (data) {
        title.innerText = "+++ " + data.title + " +++";
        let contentHTML = `<p style="font-style: italic; color: #aaffaa; margin-bottom: 20px;">${data.lore}</p>`;
        
        if (data.categories) {
            data.categories.forEach(category => {
                
                // Vérification EVO pour le style
                if (category.name.includes("EVO")) {
                    contentHTML += `
                        <div class="evo-section-title">
                            ${category.name}
                            <span class="evo-warning">⚠ SOUS CONDITION SPÉCIFIQUE</span>
                        </div>
                    `;
                } else {
                    contentHTML += `<div class="modal-section-title">${category.name}</div>`;
                }

                // Boucle sur les entrées
                category.entries.forEach(sub => {
                    // Création du bouton si un ID existe (Lien vers conditions.html)
                    let conditionButton = "";
                    if (sub.id) {
                        // C'EST ICI LA CORRECTION : Ajout de &race=${raceId}
                        conditionButton = `
                            <a href="conditions.html?id=${sub.id}&race=${raceId}" class="condition-link">
                                [Ouvrir le dossier de condition]
                            </a>
                        `;
                    }

                    contentHTML += `
                        <div class="sub-race-block">
                            <div class="sub-race-title">>> ${sub.name}</div>
                            <div style="color: #ccc;">${sub.desc}</div>
                            ${conditionButton}
                        </div>
                    `;
                });
            });
        }

        body.innerHTML = contentHTML;
        modal.style.display = "flex"; // Utilise Flexbox pour centrer parfaitement
    } else {
        console.error("Données introuvables pour : " + raceId);
    }
}

function closeModal() {
    const modal = document.getElementById("speciesModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Fermer au clic extérieur
window.onclick = function(event) {
    const modal = document.getElementById("speciesModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ==============================================
// === MODULE DES CLASSES (ARCHÉTYPES) ===
// ==============================================

// 1. Base de Données des Classes
// 1. Base de Données des Classes (Mise à jour avec Images)
const classesDB = [
    {
        id: "guardsman",
        name: "Garde Impérial",
        type: "Guerrier",
        // J'utilise une image placeholder pour l'instant. Remplace par tes images !
        image: "https://tse3.mm.bing.net/th?id=OIP.Ff9g1wK4yFwG_IqA-4mFawHaKe&pid=Api", 
        role: "Soldat de première ligne",
        stats: "Tir (BS) ++ | Endurance (T) +",
        gear: "Fusil Laser (Lasgun), Armure Flak, Couteau de combat, Uniforme impérial.",
        desc: "L'épine dorsale de l'Imperium. Vous avez survécu à l'entraînement et aux horreurs du front. Vous êtes discipliné et doué pour tuer à distance.",
        ability: "Formation aux Armes Lourdes : Peut utiliser des armes montées sans malus."
    },
    {
        id: "scum",
        name: "Racaille (Scum)",
        type: "Expert",
        image: "https://i.pinimg.com/originals/1e/7d/5a/1e7d5a5b5b5b5b5b5b5b5b5b5b5b5b5b.jpg", // Lien exemple (cassé probable, à remplacer)
        role: "Criminel / Débrouillard",
        stats: "Agilité (Ag) ++ | Sociabilité (Fel) +",
        gear: "Pistolet-mitrailleur ou Revolver, Vêtements sales, Couteau caché, Kit de crochetage.",
        desc: "Né dans les bas-fonds d'une Ruche. Vous savez qui corrompre, qui frapper et comment disparaître.",
        ability: "Chance du Diable : Peut relancer un test d'Influence raté par session."
    },
    {
        id: "priest",
        name: "Prêtre du Ministorum",
        type: "Meneur",
        image: "https://i.pinimg.com/736x/8a/0a/0a/8a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a.jpg", // À remplacer
        role: "Orateur et Combattant de la Foi",
        stats: "Volonté (WP) ++ | Sociabilité (Fel) ++",
        gear: "Épée tronçonneuse (Eviscerator), Robes, Icône sacrée (Rosarius), Lance-flammes.",
        desc: "Vous portez la parole de l'Empereur par le feu et le sang. Votre foi est votre bouclier.",
        ability: "Haine des Hérétiques : Bonus aux dégâts contre les démons et les sorciers."
    },
    {
        id: "techpriest",
        name: "Tech-Priest",
        type: "Expert",
        image: "https://cdna.artstation.com/p/assets/images/images/008/969/894/large/diego-gisbert-llorens-diego-gisbert-llorens-admech-codex-cover.jpg",
        role: "Ingénieur et Savant",
        stats: "Intelligence (Int) ++ | Endurance (T) +",
        gear: "Hache Omnissienne, Servo-crâne, Robes rouges, Implants méchadendrites.",
        desc: "La chair est faible, le métal est pur. Vous comprenez les esprits de la machine.",
        ability: "Linguistique Binaire : Peut communiquer avec les machines pour ouvrir des portes."
    },
    {
        id: "psyker",
        name: "Psyker Sanctionné",
        type: "Mystique",
        image: "https://i.pinimg.com/originals/5c/5c/5c/5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c.jpg", // À remplacer
        role: "Artillerie magique (Dangereux)",
        stats: "Volonté (WP) +++ | Perception (Per) +",
        gear: "Bâton de force, Marque de sanction, Pistolet laser.",
        desc: "Vous canalisez le Warp. C'est un don immense mais une malédiction terrible.",
        ability: "Manifestation : Peut lancer des sorts. Risque de Phénomène Warp à chaque jet.",
        special_link: "greyknight"
    },
    {
        id: "assassin",
        name: "Assassin Culte de la Mort",
        type: "Guerrier",
        image: "https://i.pinimg.com/originals/a1/a1/a1/a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1.jpg", // À remplacer
        role: "Tueur au corps à corps",
        stats: "Agilité (Ag) ++ | Capacité de Combat (WS) ++",
        gear: "Deux épées énergétiques, Combinaison moulante, Masque.",
        desc: "Pour vous, tuer est une forme de prière. Vous êtes silencieux, acrobatique et mortel.",
        ability: "Danse de la Mort : Peut esquiver deux fois par tour."
    },
    {
        id: "adept",
        name: "Adepte de l'Administratum",
        type: "Expert",
        image: "https://i.pinimg.com/originals/b2/b2/b2/b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2.jpg", // À remplacer
        role: "Savant et Bureaucrate",
        stats: "Intelligence (Int) +++ | Perception (Per) +",
        gear: "Auto-plume, Datapad, Robes de scribe, Pistolet léger.",
        desc: "Le savoir est le pouvoir. Vous connaissez les secrets et la bureaucratie impériale.",
        ability: "Connaissance Absolue : Bonus massif pour identifier les Xenos ou les artefacts."
    },
    {
        id: "arbitrator",
        name: "Arbitrator (Juge)",
        type: "Guerrier",
        image: "https://i.pinimg.com/originals/c3/c3/c3/c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3.jpg", // À remplacer
        role: "Police de choc",
        stats: "Tir (BS) + | Force (S) +",
        gear: "Fusil à pompe de combat, Armure carapace, Matraque énergétique.",
        desc: "Vous êtes la Loi. Brutal et inflexible, vous maintenez l'ordre de l'Empereur.",
        ability: "Autorité : Peut réquisitionner du matériel ou des troupes locales."
    }
];

// 2. Fonction d'Initialisation de la Grille (Appelée par initSystem)
function initClasses() {
    const container = document.getElementById('classes-grid');
    if (!container) return; // On n'est pas sur la page classes, on arrête.

    console.log("+++ Chargement des Protocoles de Carrière +++");

    classesDB.forEach(job => {
        // Définition de la couleur du badge selon le type
        let badgeColor = "imperium"; // Gris par défaut
        if (job.type === "Guerrier") badgeColor = "danger"; // Rouge
        if (job.type === "Mystique") badgeColor = "xenos-major"; // Violet/Rouge sombre
        if (job.type === "Expert") badgeColor = "xenos-minor"; // Jaune/Or

        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = 'pointer';
        card.onclick = () => openClassModal(job); // On attache le clic

        card.innerHTML = `
            <span class="badge ${badgeColor}">${job.type.toUpperCase()}</span>
            <h3>${job.name}</h3>
            <p style="font-size: 0.9em; color: #ccc;">${job.role}</p>
            <div style="margin-top: 10px; font-size: 0.8em; color: #33ff00;">
                Stats: ${job.stats}
            </div>
        `;
        container.appendChild(card);
    });
}

// 3. Fonction d'ouverture de la Modale (Mise à jour Portrait)
function openClassModal(job) {
    const modal = document.getElementById("speciesModal");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    // On change le titre
    title.innerText = ">>> DOSSIER : " + job.name.toUpperCase();

    // Image par défaut si aucune n'est fournie (un point d'interrogation vert)
    const imageSrc = job.image ? job.image : "https://placehold.co/200x300/000000/33ff00?text=NO+DATA";

    // On construit le contenu HTML avec la nouvelle structure SPLIT (Gauche/Droite)
    body.innerHTML = `
        <div class="modal-split-layout">
            
            <div class="modal-portrait-wrapper">
                <img src="${imageSrc}" alt="${job.name}" class="modal-portrait">
            </div>

            <div class="modal-text-content">
                
                <div style="border-bottom: 1px solid #1a5c00; padding-bottom: 10px; margin-bottom: 15px;">
                    <p style="font-style: italic; color: #aaffaa; margin-top:0;">"${job.desc}"</p>
                </div>

                <div class="sub-race-block">
                    <div class="sub-race-title">>> DOTATION STANDARD</div>
                    <div style="color: #ccc;">${job.gear}</div>
                </div>

                <div class="sub-race-block">
                    <div class="sub-race-title">>> APTITUDES CLÉS</div>
                    <div style="color: #ffd700;">${job.stats}</div>
                    <div style="margin-top: 5px;"><strong>Spécial :</strong> ${job.ability}</div>
                </div>

                <div style="margin-top: 20px; text-align: center; border: 1px dashed #33ff00; padding: 10px;">
                    <span class="blink">ACCRÉDITATION REQUISE POUR SÉLECTIONNER</span>
                </div>

            </div>
        </div>
    `;

    // On injecte le style flex pour ouvrir la modale
    modal.style.display = "flex";
}
