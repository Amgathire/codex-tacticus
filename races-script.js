// --- BIBLIOTHÈQUE DES SOURCES (OFFICIEL + HOMEBREW) ---
const books = {
    CORE: "Core Rules v2.1",
    FSPG: "Forsaken System",
    RR: "Redacted Records",
    COS: "Church of Steel",
    TA_I: "Threat: Imperium",
    VOA: "Vow of Absolution",
    // Homebrews majeurs
    AAA: "Abundance of Apocrypha",
    VAX: "The Vaxian Aegis (T'au)",
    LON: "Legacy of Necrontyr",
    HES: "Hesperax Vault (Drukhari)",
    TOG: "Tome of Glory (Chaos)",
    HAT: "High Altar (AdMech)"
};

// --- BASE DE DONNÉES MASSIVE DES ARCHÉTYPES ---
const factionData = {
    'imperium': {
        title: "IMPERIUM : ARCHÉTYPES COMPLETS",
        desc: "L'humanité éparse, unie sous la bannière du Dieu-Empereur.",
        units: [
            // ADEPTUS MINISTORUM & ADEPTA SORORITAS
            { id: "ministorum_priest", name: "Prêtre du Ministorum", tier: 1, src: books.CORE, desc: "Guide spirituel des masses." },
            { id: "sister_battle", name: "Sœur de Bataille", tier: 2, src: books.CORE, desc: "Infanterie de l'Adepta Sororitas." },
            { id: "hospitaller", name: "Sœur Hospitalière", tier: 1, src: books.CORE, desc: "Médecin de terrain et biologiste." },
            { id: "dialogus", name: "Sœur Dialogus", tier: 2, src: books.FSPG, desc: "Experte en communication et chants sacrés." },
            { id: "repentia", name: "Sœur Repentia", tier: 2, src: books.FSPG, desc: "Chercheuse de mort au corps à corps." },
            { id: "seraphim", name: "Sœur Seraphim", tier: 2, src: books.FSPG, desc: "Attaque rapide en réacteurs dorsaux." },
            { id: "crusader", name: "Croisé", tier: 2, src: books.CORE, desc: "Guerrier saint avec bouclier tempête." },
            { id: "death_cult", name: "Assassin du Culte de la Mort", tier: 2, src: books.CORE, desc: "Adorateur de l'Empereur par le meurtre." },
            
            // ASTRA MILITARUM
            { id: "guardsman", name: "Garde Impérial", tier: 1, src: books.CORE, desc: "La colonne vertébrale de l'Imperium." },
            { id: "officer", name: "Officier de la Garde", tier: 2, src: books.CORE, desc: "Commandant de peloton." },
            { id: "tempestus", name: "Tempestus Scion", tier: 2, src: books.CORE, desc: "Forces spéciales de la Scholam Progenium." },
            { id: "commissar", name: "Commissaire", tier: 3, src: books.CORE, desc: "Agent politique disciplinaire." },
            { id: "kasrkin", name: "Kasrkin", tier: 2, src: books.RR, desc: "Élite de Cadia sur-entraînée." },
            { id: "catachan", name: "Diable de Catachan", tier: 2, src: books.FSPG, desc: "Expert en survie en jungle." },
            
            // ADEPTUS ASTARTES (SPACE MARINES)
            { id: "scout", name: "Scout Marine", tier: 2, src: books.CORE, desc: "Recrue en reconnaissance." },
            { id: "tactical", name: "Space Marine Tactique", tier: 3, src: books.CORE, desc: "Guerrier Astartes standard." },
            { id: "assault", name: "Space Marine d'Assaut", tier: 3, src: books.CORE, desc: "Spécialiste du corps à corps aérien." },
            { id: "devastator", name: "Space Marine Devastator", tier: 3, src: books.CORE, desc: "Spécialiste en armes lourdes." },
            { id: "intercessor", name: "Primaris Intercessor", tier: 4, src: books.CORE, desc: "Nouvelle génération de Marines." },
            { id: "reiver", name: "Primaris Reiver", tier: 4, src: books.FSPG, desc: "Terreur et infiltration." },
            { id: "aggressor", name: "Primaris Aggressor", tier: 4, src: books.FSPG, desc: "Armure lourde Gravis." },
            { id: "chaplain", name: "Chaplain", tier: 4, src: books.FSPG, desc: "Leader spirituel guerrier." },
            { id: "librarian", name: "Librarian", tier: 4, src: books.FSPG, desc: "Psyker de combat Astartes." },
            { id: "apothecary", name: "Apothecary", tier: 4, src: books.FSPG, desc: "Médecin et gardien des gènes." },
            { id: "techmarine", name: "Techmarine", tier: 4, src: books.FSPG, desc: "Maître de la forge." },
            { id: "grey_knight", name: "Chevalier Gris", tier: 4, src: books.AAA, desc: "Chasseur de démons (Psyker)." },
            { id: "deathwatch", name: "Vétéran Deathwatch", tier: 4, src: books.AAA, desc: "Chasseur de Xenos d'élite." },
            
            // ADEPTUS MECHANICUS
            { id: "skitarius", name: "Skitarius Ranger", tier: 2, src: books.CORE, desc: "Soldat cyborg." },
            { id: "tech_priest", name: "Tech-Priest Enginseer", tier: 3, src: books.CORE, desc: "Savant de l'Omnimessie." },
            { id: "sicarian", name: "Sicarian Ruststalker", tier: 3, src: books.CORE, desc: "Assassin cyborg rapide." },
            { id: "electro_priest", name: "Electro-Priest", tier: 2, src: books.HAT, desc: "Fanatique chargé d'énergie." },
            { id: "secutarii", name: "Secutarii Hoplite", tier: 3, src: books.HAT, desc: "Garde des Titans." },
            
            // INQUISITION & OFFICIOS
            { id: "acolyte", name: "Acolyte Inquisitorial", tier: 1, src: books.CORE, desc: "Agent de terrain." },
            { id: "inquisitor", name: "Inquisiteur", tier: 4, src: books.CORE, desc: "Juge, jury et bourreau." },
            { id: "vindicare", name: "Assassin Vindicare", tier: 4, src: books.TA_I, desc: "Sniper impérial légendaire." },
            { id: "eversor", name: "Assassin Eversor", tier: 4, src: books.TA_I, desc: "Bombe humaine bio-chimique." },
            { id: "callidus", name: "Assassin Callidus", tier: 4, src: books.TA_I, desc: "Maître du polymorphisme." },
            { id: "arbites", name: "Arbitrator", tier: 2, src: books.AAA, desc: "Juge de l'Adeptus Arbites." },
            { id: "sister_silence", name: "Sœur du Silence", tier: 3, src: books.AAA, desc: "Chasseuse de Psykers (Paria)." },
            { id: "custodes", name: "Garde Custodien", tier: 5, src: books.TA_I, desc: "La Garde de l'Empereur." }
        ]
    },
    'chaos': {
        title: "FORCES DU CHAOS",
        desc: "Les esclaves des ténèbres et les maîtres de la ruine.",
        units: [
            // MORTELS & CULTISTES
            { id: "cultist", name: "Cultiste du Chaos", tier: 1, src: books.CORE, desc: "Chair à canon fanatique." },
            { id: "traitor_guard", name: "Garde Renégat", tier: 1, src: books.AAA, desc: "Soldat professionnel ayant trahi." },
            { id: "beastman", name: "Homme-Bête (Bray)", tier: 1, src: books.AAA, desc: "Mutant brutal." },
            { id: "rogue_psyker", name: "Psyker Renégat", tier: 2, src: books.CORE, desc: "Sorcier instable." },
            { id: "heretek", name: "Hérétek", tier: 2, src: books.CORE, desc: "AdMech corrompu." },
            
            // HERETIC ASTARTES
            { id: "csm", name: "Space Marine du Chaos", tier: 3, src: books.CORE, desc: "Légionnaire vétéran." },
            { id: "khorne_berzerker", name: "Berzerker de Khorne", tier: 3, src: books.TOG, desc: "Fou furieux sanglant." },
            { id: "noise_marine", name: "Noise Marine", tier: 3, src: books.TOG, desc: "Guerrier sonique de Slaanesh." },
            { id: "plague_marine", name: "Plague Marine", tier: 3, src: books.TOG, desc: "Guerrier pestiféré de Nurgle." },
            { id: "rubric_marine", name: "Rubric Marine", tier: 3, src: books.TOG, desc: "Automate sorcier de Tzeentch." },
            { id: "sorcerer", name: "Sorcier du Chaos", tier: 3, src: books.TOG, desc: "Maître des arts noirs." },
            { id: "dark_apostle", name: "Apôtre Noir", tier: 3, src: books.TOG, desc: "Prêtre guerrier démagogue." },
            { id: "warpsmith", name: "Warpsmith", tier: 4, src: books.TOG, desc: "Maître des machines démons." },
            { id: "raptor", name: "Raptor", tier: 3, src: books.TOG, desc: "Assaut aérien terrifiant." },
            { id: "terminator_chaos", name: "Terminator du Chaos", tier: 4, src: books.TOG, desc: "Vétéran en armure lourde." },
            
            // DÉMONS (VIA APOCRYPHA/TOME OF GLORY)
            { id: "bloodletter", name: "Sanguinaire", tier: 2, src: books.TOG, desc: "Démon mineur de Khorne." },
            { id: "daemonette", name: "Démonette", tier: 2, src: books.TOG, desc: "Démon mineur de Slaanesh." },
            { id: "plaguebearer", name: "Porte-Peste", tier: 2, src: books.TOG, desc: "Démon mineur de Nurgle." },
            { id: "pink_horror", name: "Horreur Rose", tier: 2, src: books.TOG, desc: "Démon mineur de Tzeentch." },
            { id: "daemon_prince", name: "Prince Démon", tier: 5, src: books.TOG, desc: "Mortel élevé au rang de dieu." }
        ]
    },
    'aeldari': {
        title: "AELDARI (ASURYANI & DRUKHARI)",
        desc: "Les vestiges d'un empire déchu.",
        units: [
            // VAISSEAUX-MONDES (ASURYANI)
            { id: "guardian", name: "Gardien", tier: 1, src: books.CORE, desc: "Citoyen-soldat." },
            { id: "ranger", name: "Ranger", tier: 2, src: books.CORE, desc: "Éclaireur et sniper." },
            { id: "dire_avenger", name: "Vengeur Lugubre", tier: 3, src: books.CORE, desc: "Guerrier Aspect tactique." },
            { id: "banshee", name: "Howling Banshee", tier: 3, src: books.CORE, desc: "Guerrier Aspect de corps à corps." },
            { id: "scorpion", name: "Scorpion Foudroyant", tier: 3, src: books.CORE, desc: "Infiltration lourde et mêlée." },
            { id: "dark_reaper", name: "Faucheur Noir", tier: 3, src: books.CORE, desc: "Expert en armes lourdes." },
            { id: "warlock", name: "Warlock", tier: 3, src: books.CORE, desc: "Psyker de bataille." },
            { id: "autarch", name: "Autarque", tier: 4, src: books.CORE, desc: "Commandant suprême." },
            { id: "wraithguard", name: "Fantôme-Garde", tier: 4, src: books.AAA, desc: "Construit animé par une âme." },
            
            // CORSAIRES & HARLEQUINS
            { id: "corsair", name: "Corsaire Aeldari", tier: 2, src: books.CORE, desc: "Pirate et mercenaire." },
            { id: "harlequin", name: "Harlequin Trouper", tier: 3, src: books.AAA, desc: "Guerrier-Danseur de la Toile." },
            { id: "death_jester", name: "Bouffon Tragique", tier: 4, src: books.AAA, desc: "Artilleur lourd Harlequin." },
            
            // DRUKHARI (DARK ELDAR) - VIA HESPERAX
            { id: "kabalite", name: "Guerrier Kabalite", tier: 1, src: books.HES, desc: "Soldat sadique des Kabales." },
            { id: "wych", name: "Céraste (Wych)", tier: 2, src: books.HES, desc: "Gladiatrice d'arène." },
            { id: "wrack", name: "Gorgone (Wrack)", tier: 2, src: books.HES, desc: "Serviteur des Tourmenteurs." },
            { id: "incubi", name: "Incube", tier: 3, src: books.HES, desc: "Guerrier d'élite mercenaire." },
            { id: "scourge", name: "Fléau (Scourge)", tier: 2, src: books.HES, desc: "Mercenaire ailé." },
            { id: "succubus", name: "Succube", tier: 4, src: books.HES, desc: "Maîtresse des arènes." }
        ]
    },
    'orks': {
        title: "ORKS",
        desc: "La loi du plus fort.",
        units: [
            { id: "boy", name: "Ork Boy", tier: 1, src: books.CORE, desc: "La base de la marée verte." },
            { id: "kommando", name: "Kommando", tier: 2, src: books.CORE, desc: "Infiltrateur (si si, promis)." },
            { id: "stormboy", name: "Stormboy", tier: 2, src: books.CORE, desc: "Propulsé par roquette." },
            { id: "burna", name: "Burna Boy", tier: 2, src: books.CORE, desc: "Pyromane expert." },
            { id: "tankbusta", name: "Kasseur de Tank", tier: 2, src: books.AAA, desc: "Expert anti-véhicule." },
            { id: "nob", name: "Nob", tier: 3, src: books.CORE, desc: "Chef de bande, gros et méchant." },
            { id: "weirdboy", name: "Weirdboy", tier: 3, src: books.CORE, desc: "Psyker canalisant la WAAAGH." },
            { id: "mek", name: "Mekboy", tier: 2, src: books.CORE, desc: "Mécanicien fou." },
            { id: "painboy", name: "Painboy", tier: 2, src: books.CORE, desc: "Médecin boucher." },
            { id: "meganob", name: "Meganob", tier: 4, src: books.AAA, desc: "Tank sur pattes en méga-armure." },
            { id: "flash_git", name: "Flash Git", tier: 3, src: books.AAA, desc: "Pirate riche avec gros flingue." },
            { id: "warboss", name: "Warboss", tier: 5, src: books.AAA, desc: "Le chef suprême de la WAAAGH." }
        ]
    },
    'tau': {
        title: "EMPIRE T'AU",
        desc: "L'expansion pour le Bien Suprême.",
        units: [
            { id: "fire_warrior", name: "Guerrier de Feu (Strike)", tier: 2, src: books.VAX, desc: "Infanterie de ligne à longue portée." },
            { id: "breacher", name: "Guerrier de Feu (Breacher)", tier: 2, src: books.VAX, desc: "Assaut à courte portée." },
            { id: "pathfinder", name: "Cibleur", tier: 2, src: books.VAX, desc: "Éclaireur et désignateur laser." },
            { id: "stealth", name: "XV25 Stealth Suit", tier: 3, src: books.VAX, desc: "Infiltration lourde invisible." },
            { id: "crisis", name: "XV8 Crisis Suit", tier: 3, src: books.VAX, desc: "Exo-armure polyvalente emblématique." },
            { id: "broadside", name: "XV88 Broadside", tier: 4, src: books.VAX, desc: "Plateforme d'artillerie mobile." },
            { id: "ghostkeel", name: "XV95 Ghostkeel", tier: 4, src: books.VAX, desc: "Armure furtive géante." },
            { id: "ethereal", name: "Éthéré", tier: 3, src: books.VAX, desc: "Guide spirituel et commandant." },
            { id: "kroot", name: "Carnivore Kroot", tier: 1, src: books.VAX, desc: "Mercenaire sauvage." },
            { id: "vespid", name: "Vespid Stingwing", tier: 2, src: books.VAX, desc: "Auxiliaire volant insectoïde." },
            { id: "commander", name: "Commandeur T'au", tier: 5, src: books.VAX, desc: "Pilote d'élite en exo-armure." }
        ]
    },
    'necrons': {
        title: "DYNSTIES NECRONS",
        desc: "Les maîtres immortels de la galaxie.",
        units: [
            { id: "necron_warrior", name: "Guerrier Nécron", tier: 2, src: books.LON, desc: "Légionnaire sans âme." },
            { id: "immortal", name: "Immortel", tier: 3, src: books.LON, desc: "Soldat d'élite lourd." },
            { id: "deathmark", name: "Traqueur (Deathmark)", tier: 3, src: books.LON, desc: "Sniper téléporteur." },
            { id: "flayed_one", name: "Écorcheur", tier: 2, src: books.LON, desc: "Tueur maudit corps à corps." },
            { id: "lichguard", name: "Lichguard", tier: 4, src: books.LON, desc: "Garde royal indestructible." },
            { id: "triarch_praetorian", name: "Prétorien du Triarcat", tier: 4, src: books.LON, desc: "Gardien des lois antiques." },
            { id: "cryptek", name: "Cryptek", tier: 4, src: books.LON, desc: "Maître de la techno-sorcellerie." },
            { id: "overlord", name: "Overlord", tier: 5, src: books.LON, desc: "Souverain de la dynastie." },
            { id: "canoptek_wraith", name: "Spectre Canoptek", tier: 3, src: books.LON, desc: "Gardien de tombeau phasique." },
            { id: "skorpekh", name: "Skorpekh Destroyer", tier: 4, src: books.LON, desc: "Machine à tuer nihiliste." }
        ]
    },
    'scum': {
        title: "MARGINAUX, ABHUMAINS ET AUTRES",
        desc: "Ceux qui vivent en marge de la société impériale.",
        units: [
            { id: "scum", name: "Racaille", tier: 1, src: books.CORE, desc: "Criminel, survivant ou ouvrier." },
            { id: "desperado", name: "Desperado", tier: 2, src: books.CORE, desc: "Mercenaire, chasseur de primes." },
            { id: "ganger", name: "Ganger", tier: 1, src: books.CORE, desc: "Membre de gang de ruche." },
            { id: "ratling", name: "Ratling", tier: 1, src: books.FSPG, desc: "Sniper et voleur de petite taille." },
            { id: "ogryn", name: "Ogryn", tier: 2, src: books.FSPG, desc: "Abhumain géant et loyal." },
            { id: "votann_warrior", name: "Guerrier de l'Âtre (Votann)", tier: 2, src: books.AAA, desc: "Membre des Ligues de Votann (Squat)." },
            { id: "votann_kahl", name: "Kahl (Votann)", tier: 4, src: books.AAA, desc: "Commandant des Ligues." },
            { id: "rogue_trader", name: "Libre-Marchand", tier: 4, src: books.FSPG, desc: "Explorateur possédant une Charte." },
            { id: "lexmechanic", name: "Lexmécanicien", tier: 2, src: books.FSPG, desc: "Scribe augmenté de l'Administratum." },
            { id: "sanctioned_psyker", name: "Psyker Assermenté", tier: 2, src: books.CORE, desc: "Sorcier au service de l'Imperium." }
        ]
    },
    'tyranids': {
        title: "TYRANIDES ET CULTE GENESTEALER",
        desc: "L'Ombre dans le Warp et ses avant-gardes.",
        units: [
            { id: "neophyte", name: "Neophyte Hybride", tier: 1, src: books.TA_X, desc: "Cultiste Genestealer armé." },
            { id: "acolyte_hybrid", name: "Acolyte Hybride", tier: 2, src: books.TA_X, desc: "Hybride de combat monstrueux." },
            { id: "genestealer", name: "Genestealer Pur", tier: 3, src: books.TA_X, desc: "Prédateur ultime de corps à corps." },
            { id: "magus", name: "Magus", tier: 4, src: books.TA_X, desc: "Leader psychique du culte." },
            { id: "kelermorph", name: "Kelermorph", tier: 3, src: books.TA_X, desc: "Pistolero héros de la révolution." },
            { id: "tyranid_warrior", name: "Guerrier Tyranide", tier: 3, src: books.TA_X, desc: "Créature synapse (Homebrew)." },
            { id: "lictor", name: "Lictor", tier: 4, src: books.TA_X, desc: "Assassin solitaire (Homebrew)." },
            { id: "zoanthrope", name: "Zoanthrope", tier: 4, src: books.TA_X, desc: "Artillerie psychique vivante (Homebrew)." }
        ]
    }
};

// --- 1. FONCTION D'OUVERTURE (Avec Tri Automatique) ---
function openFaction(key) {
    const modal = document.getElementById('raceModal');
    const container = document.getElementById('modalBody');
    const title = document.getElementById('modalTitle');
    const data = factionData[key];

    if (data) {
        title.innerText = data.title;
        container.innerHTML = `<p style="margin-bottom:15px; font-style:italic; color:#aaa; text-align:center;">${data.desc}</p>`;
        
        let html = `
        <div style="display:flex; border-bottom:1px solid #33ff00; padding:5px; margin-bottom:10px; font-weight:bold; color:#33ff00; font-size:0.8em;">
            <div style="width:15%;">TIER</div>
            <div style="width:60%;">ARCHÉTYPE & SOURCE</div>
            <div style="width:25%; text-align:right;">ACTION</div>
        </div>
        <div style="max-height:60vh; overflow-y:auto; padding-right:5px;">`;

        // Tri : Tier croissant, puis Alphabétique
        const sortedUnits = [...data.units].sort((a, b) => {
            if (a.tier === b.tier) return a.name.localeCompare(b.name);
            return a.tier - b.tier;
        });

        sortedUnits.forEach(u => {
            let tierColor = "#33ff00"; // Vert
            if (u.tier >= 3) tierColor = "#d4af37"; // Or
            if (u.tier >= 5) tierColor = "#ff3333"; // Rouge

            html += `
            <div class="archetype-row">
                <div style="width:15%;">
                    <span class="meta-badge tier-badge" style="background-color:${tierColor}; color:#000;">T${u.tier}</span>
                </div>
                <div class="archetype-info" style="width:60%;">
                    <strong style="color: #d4af37;">${u.name}</strong><br>
                    <span class="meta-badge source-badge">${u.src}</span>
                    <div style="font-size:0.8em; color:#ccc; margin-top:3px;">${u.desc}</div>
                </div>
                <div style="width:25%; text-align:right;">
                    <a href="conditions.html?unit=${u.id}" class="archetype-btn">CHOISIR</a>
                </div>
            </div>`;
        });

        html += `</div>`;
        container.innerHTML += html;
        modal.style.display = 'flex';
    }
}

// --- 2. GESTION DE LA FERMETURE (Event Listener Robuste) ---
// C'est cette partie qui fait marcher le bouton ID="btnClose"
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('raceModal');
    const btnClose = document.getElementById('btnClose');

    // Clic sur la croix
    if (btnClose) {
        btnClose.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    } else {
        console.error("Erreur : Bouton fermeture introuvable");
    }

    // Clic en dehors de la fenêtre
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});