// --- BIBLIOTHÈQUE DES SOURCES ---
const books = {
    CORE: "Core Rules v2.1",
    COS: "Church of Steel",
    RR: "Redacted Records",
    FSPG: "Forsaken System",
    TA_X: "Threat Assessment: Xenos",
    AAA: "Abundance of Apocrypha",
    VAX: "The Vaxian Aegis (T'au)",
    HES: "Hesperax Vault (Drukhari)",
    LON: "Legacy of the Necrontyr"
};

// --- BASE DE DONNÉES ARMURERIE (NETTOYÉE ET COMPLÈTE) ---
const armoryData = [
    // =======================
    // 1. ARMES DE MÊLÉE
    // =======================
    { id: "knife", name: "Couteau de Combat", type: "MELEE", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { dmg: "2+1ED", ap: "0", range: "Engagé" }, traits: ["Fiable"], src: books.CORE, desc: "Lame standard de survie." },
    { id: "chainsword", name: "Épée Tronçonneuse", type: "MELEE", rarity: "Commun", keywords: ["IMPERIUM", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "Engagé" }, traits: ["Brutal", "Parade"], src: books.CORE, desc: "Dents en adamantium rotatives." },
    { id: "power_sword", name: "Épée Énergétique", type: "MELEE", rarity: "Rare", keywords: ["IMPERIUM", "AELDARI"], stats: { dmg: "5+1ED", ap: "-3", range: "Engagé" }, traits: ["Parade", "Énergétique"], src: books.CORE, desc: "Champ de disruption moléculaire." },
    { id: "force_sword", name: "Épée de Force", type: "MELEE", rarity: "Unique", keywords: ["PSYKER"], stats: { dmg: "5+1ED", ap: "-3", range: "Engagé" }, traits: ["Force", "Psy-Focus"], src: books.CORE, desc: "Inutilisable par les non-psykers." },
    { id: "power_fist", name: "Gantelet Énergétique", type: "MELEE", rarity: "Très Rare", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "12+1ED", ap: "-3", range: "Engagé" }, traits: ["Brutal", "Encombrant", "Énergétique"], src: books.CORE, desc: "Peut broyer un char." },
    { id: "thunder_hammer", name: "Marteau Tonnerre", type: "MELEE", rarity: "Unique", keywords: ["IMPERIUM", "ASTARTES"], stats: { dmg: "16+1ED", ap: "-3", range: "Engagé" }, traits: ["Brutal", "Encombrant", "Assommant"], src: books.CORE, desc: "Libère une onde de choc à l'impact." },
    { id: "eviscerator", name: "Eviscerator", type: "MELEE", rarity: "Très Rare", keywords: ["ADEPTUS MINISTORUM"], stats: { dmg: "14+1ED", ap: "-2", range: "Engagé" }, traits: ["Brutal", "Encombrant", "Déchirant"], src: books.FSPG, desc: "Épée tronçonneuse géante à deux mains." },
    { id: "choppa", name: "Kikoup'", type: "MELEE", rarity: "Commun", keywords: ["ORK"], stats: { dmg: "7+1ED", ap: "0", range: "Engagé" }, traits: ["Fiable"], src: books.CORE, desc: "Grosse lame brutale." },
    { id: "big_choppa", name: "Gros Kikoup'", type: "MELEE", rarity: "Uncommon", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "-1", range: "Engagé" }, traits: ["À deux mains", "Brutal"], src: books.CORE, desc: "Encore plus gros." },
    { id: "power_klaw", name: "Pince Énergétik", type: "MELEE", rarity: "Rare", keywords: ["ORK"], stats: { dmg: "12+1ED", ap: "-3", range: "Engagé" }, traits: ["Encombrant", "Énergétique"], src: books.CORE, desc: "Ouvre les boîtes de conserve." },
    { id: "witchblade", name: "Lame Sorcière", type: "MELEE", rarity: "Rare", keywords: ["AELDARI", "PSYKER"], stats: { dmg: "6+1ED", ap: "0", range: "Engagé" }, traits: ["Force", "Agile"], src: books.CORE, desc: "Arme élégante à matrice psychique." },
    { id: "agoniser", name: "Agoniseur", type: "MELEE", rarity: "Rare", keywords: ["DRUKHARI"], stats: { dmg: "4+1ED", ap: "-1", range: "Engagé" }, traits: ["Agile", "Douloureux", "Énergétique"], src: books.HES, desc: "Fouet neurotoxique Drukhari." },
    { id: "hyperphase_sword", name: "Épée d'Hyperphase", type: "MELEE", rarity: "Rare", keywords: ["NECRONS"], stats: { dmg: "6+1ED", ap: "-3", range: "Engagé" }, traits: ["Énergétique", "Parade"], src: books.LON, desc: "Vibre entre les dimensions." },
    { id: "shield_slab", name: "Bouclier (Slabshield)", type: "MELEE", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "OGRYN"], stats: { dmg: "Force+0ED", ap: "0", range: "Engagé" }, traits: ["Bouclier (+2 Défense)", "Encombrant"], src: books.CORE, desc: "Une plaque de métal massive utilisée comme couvert mobile." },

    // =======================
    // 2. ARMES À DISTANCE
    // =======================
    { id: "laspistol", name: "Pistolet Laser", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM"], stats: { dmg: "7+1ED", ap: "0", range: "24m", salvo: "1" }, traits: ["Fiable", "Pistolet"], src: books.CORE, desc: "Arme de poing standard." },
    { id: "lasgun", name: "Fusil Laser", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM"], stats: { dmg: "7+1ED", ap: "0", range: "48m", salvo: "2" }, traits: ["Fiable"], src: books.CORE, desc: "Le marteau de l'Empereur." },
    { id: "autogun", name: "Fusil d'Assaut (Autogun)", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "CHAOS", "SCUM"], stats: { dmg: "7+1ED", ap: "0", range: "40m", salvo: "3" }, traits: ["Munitions cinétiques"], src: books.CORE, desc: "Arme à projectiles solides." },
    { id: "shotgun", name: "Fusil à Pompe", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { dmg: "8+1ED", ap: "0", range: "12m", salvo: "2" }, traits: ["Assaut", "Dispertion"], src: books.CORE, desc: "Dévastateur à courte portée." },
    { id: "bolt_pistol", name: "Pistolet Bolter", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "24m", salvo: "1" }, traits: ["Brutal", "Pistolet"], src: books.CORE, desc: "L'arme des officiers." },
    { id: "boltgun", name: "Bolter", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "40m", salvo: "2" }, traits: ["Brutal", "Tir Rapide (2)"], src: books.CORE, desc: "Saint Bolter." },
    { id: "heavy_bolter", name: "Bolter Lourd", type: "RANGED", rarity: "Rare", keywords: ["ASTARTES", "CHAOS"], stats: { dmg: "12+1ED", ap: "-1", range: "60m", salvo: "4" }, traits: ["Brutal", "Lourd (4)"], src: books.CORE, desc: "Impossible à manier sans armure énergétique." },
    { id: "plasma_gun", name: "Fusil Plasma", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "CHAOS"], stats: { dmg: "15+1ED", ap: "-3", range: "48m", salvo: "2" }, traits: ["Tir Rapide(1)", "Surchauffe"], src: books.CORE, desc: "Anti-élite redoutable." },
    { id: "melta_gun", name: "Fuseur", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM"], stats: { dmg: "16+2ED", ap: "-4", range: "12m", salvo: "1" }, traits: ["Fusion", "Assaut"], src: books.CORE, desc: "Anti-char thermique." },
    { id: "arc_rifle", name: "Fusil à Arc", type: "RANGED", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { dmg: "14+1ED", ap: "-1", range: "48m", salvo: "2" }, traits: ["Arc (Vehicle)", "Tir Rapide(1)"], src: books.CORE, desc: "Grille les circuits machines." },
    { id: "radium_carbine", name: "Carabine à Radium", type: "RANGED", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { dmg: "7+1ED", ap: "0", range: "36m", salvo: "3" }, traits: ["Rad-Sat", "Assaut"], src: books.CORE, desc: "Projectiles radioactifs." },
    { id: "slugga", name: "Kalfling'", type: "RANGED", rarity: "Commun", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "0", range: "18m", salvo: "1" }, traits: ["Pistolet", "Inprécis"], src: books.CORE, desc: "Gros pistolet Ork." },
    { id: "shoota", name: "Fling'", type: "RANGED", rarity: "Commun", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "0", range: "36m", salvo: "3" }, traits: ["Assaut", "Inprécis"], src: books.CORE, desc: "Fusil d'assaut Ork." },
    { id: "shuriken_catapult", name: "Catapulte Shuriken", type: "RANGED", rarity: "Rare", keywords: ["AELDARI"], stats: { dmg: "10+1ED", ap: "0", range: "36m", salvo: "3" }, traits: ["Déchirant", "Assaut"], src: books.CORE, desc: "Disques monomoléculaires." },
    { id: "pulse_rifle", name: "Fusil à Impulsion", type: "RANGED", rarity: "Rare", keywords: ["T'AU"], stats: { dmg: "12+1ED", ap: "-1", range: "60m", salvo: "2" }, traits: ["Tir Rapide(1)"], src: books.VAX, desc: "Arme T'au longue portée." },
    { id: "rail_rifle", name: "Fusil Rail", type: "RANGED", rarity: "Très Rare", keywords: ["T'AU"], stats: { dmg: "16+1ED", ap: "-4", range: "60m", salvo: "1" }, traits: ["Mortal Wound (1)", "Lourd"], src: books.VAX, desc: "Accélération magnétique." },
    { id: "gauss_flayer", name: "Ecorcheur Gauss", type: "RANGED", rarity: "Unique", keywords: ["NECRONS"], stats: { dmg: "10+1ED", ap: "-1", range: "48m", salvo: "2" }, traits: ["Tir Rapide(1)", "Désintégration"], src: books.LON, desc: "Désassemble la matière." },
    { id: "splinter_rifle", name: "Fusil Éclateur", type: "RANGED", rarity: "Rare", keywords: ["DRUKHARI"], stats: { dmg: "8+1ED", ap: "0", range: "48m", salvo: "3" }, traits: ["Toxique(4)", "Tir Rapide(1)"], src: books.HES, desc: "Tire des cristaux empoisonnés." },

    // =======================
    // 3. ARMURES (Complète)
    // =======================
    { id: "flak_armor", name: "Armure Flak", type: "ARMOR", rarity: "Commun", keywords: ["IMPERIUM", "SCUM", "ASTRA MILITARUM"], stats: { ar: "3", traits: "-" }, traits: ["Légère"], src: books.CORE, desc: "Gilet standard de la Garde Impériale." },
    { id: "mesh_armor", name: "Armure Composite (Mesh)", type: "ARMOR", rarity: "Rare", keywords: ["IMPERIUM", "AELDARI", "SCUM"], stats: { ar: "3", traits: "-" }, traits: ["Légère", "Thermique"], src: books.CORE, desc: "Tissu thermo-plasmique avancé." },
    { id: "carapace_armor", name: "Armure Carapace", type: "ARMOR", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTRA MILITARUM", "ADEPTUS ARBITES"], stats: { ar: "4", traits: "Lourde (4)" }, traits: ["Rigide"], src: books.CORE, desc: "Plaques de céramite moulées." },
    { id: "skitarii_cuirass", name: "Auto-Cuirasse Skitarii", type: "ARMOR", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { ar: "4", traits: "Lourde (4)" }, traits: ["Rad-Proof", "Interface"], src: books.CORE, desc: "Armure scellée protégeant des radiations." },
    { id: "heavy_plate", name: "Plaques Lourdes", type: "ARMOR", rarity: "Commun", keywords: ["SCUM", "CHAOS", "ORK"], stats: { ar: "4", traits: "Lourde (5)" }, traits: ["Encombrant", "Primitif"], src: books.CORE, desc: "Plaques de métal soudées grossièrement." },
    { id: "ignatus_power_armor", name: "Armure Énergétique Ignatus", type: "ARMOR", rarity: "Très Rare", keywords: ["IMPERIUM", "INQUISITION"], stats: { ar: "4", traits: "Énergétique" }, traits: ["Force +1", "Champ de Force (1)"], src: books.CORE, desc: "Modèle léger pour inquisiteurs humains." },
    { id: "sororitas_power_armor", name: "Armure Sororitas", type: "ARMOR", rarity: "Très Rare", keywords: ["ADEPTUS MINISTORUM", "ADEPTA SORORITAS"], stats: { ar: "5", traits: "Énergétique" }, traits: ["Force +1", "Symbole (Foi)"], src: books.CORE, desc: "L'armure sainte des Sœurs de Bataille." },
    { id: "aquila_power_armor", name: "Armure Astartes (Mk VII)", type: "ARMOR", rarity: "Légendaire", keywords: ["ADEPTUS ASTARTES", "CHAOS"], stats: { ar: "5", traits: "Énergétique" }, traits: ["Force +2", "Taille (Large)", "Systèmes de Survie"], src: books.CORE, desc: "La protection emblématique des Space Marines." },
    { id: "tacticus_armor", name: "Armure Tacticus (Primaris)", type: "ARMOR", rarity: "Légendaire", keywords: ["ADEPTUS ASTARTES", "PRIMARIS"], stats: { ar: "6", traits: "Énergétique" }, traits: ["Force +2", "Taille (Large)"], src: books.CORE, desc: "Armure Mk X standard des Primaris." },
    { id: "terminator_armor", name: "Armure Terminator", type: "ARMOR", rarity: "Unique", keywords: ["ADEPTUS ASTARTES", "CHAOS"], stats: { ar: "7", traits: "Dreadnought" }, traits: ["Force +4", "Invulnérable", "Cumbersome"], src: books.CORE, desc: "Armure Tactique Dreadnought." },
    { id: "runes_armor", name: "Armure Runique", type: "ARMOR", rarity: "Rare", keywords: ["AELDARI", "ASURYANI", "PSYKER"], stats: { ar: "4", traits: "-" }, traits: ["Psy-Résonance", "Légère"], src: books.CORE, desc: "Armure psycho-active des Warlocks." },
    { id: "ghostplate", name: "Armure Ghostplate", type: "ARMOR", rarity: "Très Rare", keywords: ["DRUKHARI", "AELDARI"], stats: { ar: "4", traits: "Champ de Force" }, traits: ["Agile", "Discrétion"], src: books.HES, desc: "Matériau ultra-léger renforcé par des champs de force." },
    { id: "mega_armor", name: "Méga-Armur'", type: "ARMOR", rarity: "Légendaire", keywords: ["ORK"], stats: { ar: "7", traits: "Powered" }, traits: ["Force +3", "Lent", "Kustom"], src: books.CORE, desc: "Des tonnes de plaques de métal." },
    { id: "combat_shield", name: "Bouclier de Combat", type: "ARMOR", rarity: "Uncommon", keywords: ["IMPERIUM", "ADEPTUS ARBITES"], stats: { ar: "+1", traits: "Bouclier" }, traits: ["Défense +1"], src: books.CORE, desc: "S'attache au bras." },
    { id: "storm_shield", name: "Bouclier Tempête", type: "ARMOR", rarity: "Très Rare", keywords: ["ADEPTUS ASTARTES", "INQUISITION"], stats: { ar: "+2", traits: "Champ de Force" }, traits: ["Défense +2", "Invulnérable"], src: books.CORE, desc: "Génère un champ d'énergie capable de parer des tirs de canon laser." },
    { id: "crisis_suit", name: "Exo-armure XV8 Crisis", type: "ARMOR", rarity: "Unique", keywords: ["T'AU"], stats: { ar: "6", traits: "Véhicule (Walker)" }, traits: ["Vol", "Jetpack"], src: books.VAX, desc: "Plateforme de combat T'au." },

    // =======================
    // 4. ÉQUIPEMENT & CYBER (Complète)
    // =======================
    { id: "medikit", name: "Narthecium / Médikit", type: "GEAR", rarity: "Commun", keywords: ["IMPERIUM"], stats: { ar: "-", traits: "Médical" }, traits: ["Outil (+1D Médicae)", "Indispensable"], src: books.CORE, desc: "Contient des stims, bandages et synth-peau." },
    { id: "combi_tool", name: "Combi-Outil", type: "GEAR", rarity: "Uncommon", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "-", traits: "Technique" }, traits: ["Outil (+1D Tech)", "Polyvalent"], src: books.CORE, desc: "Un appareil rempli de clés et outils." },
    { id: "void_suit", name: "Combinaison Spatiale", type: "GEAR", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "2", traits: "Scellée" }, traits: ["Immunité (Gaz)", "Survie (Vide)"], src: books.CORE, desc: "Permet de survivre dans le vide." },
    { id: "magnoculars", name: "Magnoculaires", type: "GEAR", rarity: "Commun", keywords: ["IMPERIUM", "T'AU"], stats: { ar: "-", traits: "Vision" }, traits: ["Zoom", "Vigilance (+1D)"], src: books.CORE, desc: "Jumelles électroniques avancées." },
    { id: "ammo_cache", name: "Caisse de Munitions", type: "GEAR", rarity: "Uncommon", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "-", traits: "Recharge" }, traits: ["3 Recharges", "Lourd"], src: books.CORE, desc: "Une caisse lourde contenant des munitions." },
    { id: "rosarius", name: "Rosarius", type: "GEAR", rarity: "Très Rare", keywords: ["ADEPTUS MINISTORUM", "ASTARTES"], stats: { ar: "*", traits: "Champ de Force" }, traits: ["Défense +4", "Symbole Religieux"], src: books.CORE, desc: "Générateur de champ de conversion." },
    { id: "cameleoline", name: "Cape en Caméléoline", type: "GEAR", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES"], stats: { ar: "-", traits: "Camouflage" }, traits: ["Discrétion (+2D)"], src: books.CORE, desc: "Tissu mimétique." },
    { id: "mechadendrite", name: "Méchadendrite", type: "CYBER", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { ar: "-", traits: "-" }, traits: ["Outil (+1D)"], src: books.CORE, desc: "Bras mécanique supplémentaire." },
    { id: "cortex_implant", name: "Implant Cortex", type: "CYBER", rarity: "Très Rare", keywords: ["IMPERIUM"], stats: { ar: "-", traits: "-" }, traits: ["Logique +1"], src: books.CORE, desc: "Augmentation cognitive." },
    { id: "bionic_arm", name: "Bras Bionique", type: "CYBER", rarity: "Rare", keywords: ["IMPERIUM", "ADEPTUS MECHANICUS"], stats: { ar: "1", traits: "Membre" }, traits: ["Force +1", "Durable"], src: books.CORE, desc: "Remplacement mécanique augmentant la force brute." },
    { id: "bionic_legs", name: "Jambes Bioniques", type: "CYBER", rarity: "Rare", keywords: ["IMPERIUM"], stats: { ar: "-", traits: "Mouvement" }, traits: ["Vitesse +2", "Saut Augmenté"], src: books.CORE, desc: "Permet de courir plus vite et sauter plus haut." },
    { id: "subskin_armor", name: "Armure Sous-cutanée", type: "CYBER", rarity: "Très Rare", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "1", traits: "Interne" }, traits: ["Cumulable", "Invisible"], src: books.CORE, desc: "Plaques de céramite greffées sous la peau." },
    { id: "respirator_augment", name: "Respirateur Interne", type: "CYBER", rarity: "Uncommon", keywords: ["IMPERIUM", "CHEM-DOG"], stats: { ar: "-", traits: "Poumons" }, traits: ["Immunité (Gaz)", "Filtre"], src: books.CORE, desc: "Remplace les voies respiratoires." },
    { id: "miu", name: "Unité d'Impulsion Mentale (MIU)", type: "CYBER", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { ar: "-", traits: "Interface" }, traits: ["Tech (+2D)", "Pilotage (+1D)"], src: books.CORE, desc: "Connecte le cerveau directement à la machine." },

    // =======================
    // 5. GRENADES & EXPLOSIFS
    // =======================
    { id: "frag_grenade", name: "Grenade Frag", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "SCUM", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "Sx3m", salvo: "-" }, traits: ["Explosion (Petite)", "Lancer"], src: books.CORE, desc: "Explosif antipersonnel standard." },
    { id: "krak_grenade", name: "Grenade Krak", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "14+2ED", ap: "-2", range: "Sx3m", salvo: "-" }, traits: ["Explosion (Petite)", "Lancer", "Pénétrant"], src: books.CORE, desc: "Charge concentrée pour percer les blindages." },
    { id: "melta_bomb", name: "Bombe à Fusion", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "16+4ED", ap: "-4", range: "Contact", salvo: "-" }, traits: ["Fusion", "Explosion (Petite)", "Lourde"], src: books.CORE, desc: "Détruit les fortifications et les chars lourds." },
    { id: "photon_grenade", name: "Grenade à Photons", type: "RANGED", rarity: "Uncommon", keywords: ["T'AU"], stats: { dmg: "-", ap: "-", range: "Sx3m", salvo: "-" }, traits: ["Aveuglant", "Lancer", "Explosion (Grande)"], src: books.VAX, desc: "Grenade défensive T'au émettant une lumière aveuglante." },
    { id: "plasma_grenade", name: "Grenade Plasma", type: "RANGED", rarity: "Rare", keywords: ["AELDARI", "DRUKHARI"], stats: { dmg: "12+1ED", ap: "-1", range: "Sx3m", salvo: "-" }, traits: ["Explosion (Petite)", "Lancer"], src: books.CORE, desc: "Libère une sphère de plasma instable." },

    // =======================
    // 6. ARMES LOURDES & SPÉCIALES
    // =======================
    { id: "heavy_stubber", name: "Mitrailleuse Lourde", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "CHAOS", "SCUM"], stats: { dmg: "10+1ED", ap: "0", range: "72m", salvo: "4" }, traits: ["Lourd (3)", "Tir Rapide (3)"], src: books.CORE, desc: "Arme automatique gros calibre de soutien." },
    { id: "autocannon", name: "Autocanon", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "CHAOS", "ASTARTES"], stats: { dmg: "16+1ED", ap: "-2", range: "96m", salvo: "3" }, traits: ["Lourd (4)", "Brutal"], src: books.CORE, desc: "Tire des obus explosifs de gros calibre." },
    { id: "lascannon", name: "Canon Laser (Portatif)", type: "RANGED", rarity: "Très Rare", keywords: ["IMPERIUM", "CHAOS", "ASTARTES"], stats: { dmg: "18+3ED", ap: "-3", range: "120m", salvo: "1" }, traits: ["Lourd (4)", "Sniper", "Fusion"], src: books.CORE, desc: "L'arme anti-char ultime de l'infanterie." },
    { id: "missile_launcher", name: "Lance-Missiles", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "Spécial", ap: "Spécial", range: "100m", salvo: "1" }, traits: ["Lourd (4)", "Explosion (Variable)"], src: books.CORE, desc: "Peut tirer des missiles Frag ou Krak." },
    { id: "heavy_flamer", name: "Lance-Flammes Lourd", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES", "ADEPTAS SORORITAS"], stats: { dmg: "12+1ED", ap: "-1", range: "Souffle", salvo: "-" }, traits: ["Lourd (4)", "Zone", "Brûlure"], src: books.CORE, desc: "Version massive du lance-flammes standard." },
    { id: "rokkit_launcha", name: "Lance-Rokettes", type: "RANGED", rarity: "Uncommon", keywords: ["ORK"], stats: { dmg: "16+1ED", ap: "-2", range: "60m", salvo: "1" }, traits: ["Explosion (Petite)", "Lourd (4)"], src: books.CORE, desc: "Rudimentaire mais efficace." },
    { id: "burna", name: "Kram'eur (Burna)", type: "RANGED", rarity: "Uncommon", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "0", range: "Souffle", salvo: "-" }, traits: ["Brûlure", "Assaut", "Zone"], src: books.CORE, desc: "Lance-flammes Ork." },
    { id: "reaper_launcher", name: "Lanceur Reaper", type: "RANGED", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "14+2ED", ap: "-2", range: "120m", salvo: "2" }, traits: ["Lourd (4)", "Précis"], src: books.CORE, desc: "Tire des missiles monofilaments perforants." },
    { id: "death_spinner", name: "Tisse-Mort", type: "RANGED", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "10+2ED", ap: "0", range: "24m", salvo: "2" }, traits: ["Déchirant", "Zone", "Assaut"], src: books.CORE, desc: "Projette un nuage de fils monomoléculaires." },

    // =======================
    // 7. RELIQUES & PRIMITIF
    // =======================
    { id: "burning_blade", name: "La Lame Ardente", type: "MELEE", rarity: "Unique", keywords: ["IMPERIUM", "ASTARTES"], stats: { dmg: "8+2ED", ap: "-4", range: "Engagé" }, traits: ["Brûlure", "Parade", "Relique"], src: books.CORE, desc: "Une épée énergétique ancienne qui s'enflamme." },
    { id: "null_rod", name: "Sceptre de Négation", type: "MELEE", rarity: "Très Rare", keywords: ["INQUISITION", "SILENT SISTERHOOD"], stats: { dmg: "6+1ED", ap: "-2", range: "Engagé" }, traits: ["Anti-Psy", "Choc"], src: books.CORE, desc: "Annule les pouvoirs psychiques au contact." },
    { id: "digital_weapons", name: "Armes Digitales", type: "RANGED", rarity: "Très Rare", keywords: ["IMPERIUM", "INQUISITION", "SCUM"], stats: { dmg: "12+1ED", ap: "-3", range: "3m", salvo: "1" }, traits: ["Dissimulé", "Pistolet", "Unique"], src: books.CORE, desc: "Lasers miniatures cachés dans des bagues." },
    { id: "bow", name: "Arc / Arbalète", type: "RANGED", rarity: "Commun", keywords: ["PRIMITIVE", "SCUM", "AELDARI"], stats: { dmg: "7+1ED", ap: "0", range: "24m", salvo: "-" }, traits: ["Silencieux"], src: books.CORE, desc: "Arme silencieuse." },
    { id: "musket", name: "Mousquet / Tromblon", type: "RANGED", rarity: "Commun", keywords: ["PRIMITIVE", "SCUM"], stats: { dmg: "8+1ED", ap: "0", range: "12m", salvo: "-" }, traits: ["Inprécis", "Bruyant"], src: books.CORE, desc: "Arme à poudre noire archaïque." },
    { id: "stub_gun", name: "Revolver (Stub Gun)", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { dmg: "7+1ED", ap: "0", range: "18m", salvo: "1" }, traits: ["Pistolet", "Fiable"], src: books.CORE, desc: "Pistolet à balles gros calibre." }
];

// --- VARIABLES GLOBALES ---
let currentCategory = 'ALL';

// --- FONCTIONS D'AFFICHAGE & FILTRE ---
function renderItems() {
    // 1. Récupération des filtres (Texte ET Dropdown)
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const factionFilter = document.getElementById('factionFilter') ? document.getElementById('factionFilter').value : 'ALL';

    const grid = document.getElementById('armoryGrid');
    grid.innerHTML = ""; // On vide la grille

    armoryData.forEach(item => {
        // --- FILTRE 1 : Catégorie (Boutons : MELEE, RANGED, etc.) ---
        if (currentCategory !== 'ALL' && item.type !== currentCategory) return;
        
        // --- FILTRE 2 : Recherche Texte (Nom) ---
        if (searchText && !item.name.toLowerCase().includes(searchText)) return;

        // --- FILTRE 3 : Faction (Menu Déroulant) ---
        // Si le filtre n'est pas sur "ALL", on vérifie si l'item possède le mot-clé
        if (factionFilter !== 'ALL') {
            // Sécurité : si l'item n'a pas de keywords définis, on l'exclut
            if (!item.keywords) return;
            
            // On vérifie si le mot-clé choisi est dans la liste des keywords de l'arme
            if (!item.keywords.includes(factionFilter)) return;
        }

        // --- STYLE ET AFFICHAGE ---
        let badgeClass = "badge-common"; 
        if (item.rarity.includes("Rare") || item.rarity.includes("Uncommon")) badgeClass = "badge-rare"; 
        if (item.rarity.includes("Unique") || item.rarity.includes("Légendaire")) badgeClass = "badge-unique";

        let previewStat = "";
        if (item.type === "MELEE" || item.type === "RANGED") {
            previewStat = `<span>DMG: ${item.stats.dmg}</span> <span>AP: ${item.stats.ap}</span>`;
        } else if (item.type === "ARMOR") {
            previewStat = `<span>AR: ${item.stats.ar}</span>`;
        } else if (item.type === "GEAR" || item.type === "CYBER") {
             previewStat = `<span>${item.stats.traits}</span>`;
        }

        grid.innerHTML += `
        <div class="item-card" onclick="openItemModal('${item.id}')">
            <div class="item-header">
                <div>
                    <div class="item-name">${item.name}</div>
                    <div class="item-sub">
                        <span class="badge ${badgeClass}">${item.rarity.toUpperCase()}</span>
                        <span style="font-size:0.7em; color:#888;">[${item.src.substring(0, 10)}...]</span>
                    </div>
                </div>
            </div>
            <div class="stat-preview">
                ${previewStat}
            </div>
        </div>`;
    });
}

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderItems();
}

function filterItems() {
    renderItems();
}

// --- FONCTION MODALE (DÉTAILS) ---
function openItemModal(id) {
    const item = armoryData.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('itemModal');
    document.getElementById('modalItemTitle').innerText = item.name.toUpperCase();
    
    let detailsHtml = "";

    // 1. Analyse des Restrictions
    let restrictionHTML = "";
    const k = item.keywords || [];

    if (k.includes("T'AU") || k.includes("NECRONS") || k.includes("AELDARI") || k.includes("DRUKHARI") || k.includes("ORK")) {
        restrictionHTML += `<div class="restriction-box warning-xenos">⚠️ RESTRICTION : XENOS TECH<br><span style="font-size:0.8em; font-weight:normal;">Utilisation par l'Imperium = HÉRÉSIE. Pénalités de DN possibles.</span></div>`;
    } 
    else if (k.includes("ASTARTES")) {
        restrictionHTML += `<div class="restriction-box warning-astartes">⚠️ RESTRICTION : ASTARTES<br><span style="font-size:0.8em; font-weight:normal;">Nécessite le mot-clé [ADEPTUS ASTARTES] ou une Force 4+ pour éviter les malus.</span></div>`;
    }
    else if (k.includes("ADEPTUS MECHANICUS")) {
        restrictionHTML += `<div class="restriction-box warning-astartes" style="color:cyan; border-color:cyan;">⚠️ RESTRICTION : OMNISSIAN<br><span style="font-size:0.8em; font-weight:normal;">Nécessite des implants Cybernétiques ou le mot-clé [ADEPTUS MECHANICUS].</span></div>`;
    }
    
    detailsHtml += restrictionHTML;

    // 2. Tableaux de Stats
    if (item.type === "MELEE" || item.type === "RANGED") {
        detailsHtml += `
        <table class="stat-table">
            <tr><th>DÉGÂTS</th><th>AP</th><th>PORTÉE</th><th>SALVO</th></tr>
            <tr>
                <td style="color:#d4af37;">${item.stats.dmg}</td>
                <td>${item.stats.ap}</td>
                <td>${item.stats.range}</td>
                <td>${item.stats.salvo || "-"}</td>
            </tr>
        </table>`;
    } else if (item.type === "ARMOR") {
        detailsHtml += `
        <table class="stat-table">
            <tr><th>ARMOUR RATING</th><th>TRAITS</th></tr>
            <tr>
                <td style="color:#d4af37;">${item.stats.ar}</td>
                <td>${item.stats.traits}</td>
            </tr>
        </table>`;
    } else if (item.type === "GEAR" || item.type === "CYBER") {
        detailsHtml += `
        <table class="stat-table">
            <tr><th>EFFET PRINCIPAL / STATS</th></tr>
            <tr><td style="color:#d4af37;">${item.stats.traits}</td></tr>
        </table>`;
    }

    // 3. Mots-clés Faction
    if (k.length > 0) {
        detailsHtml += `<div style="margin:10px 0; font-size:0.8em; color:#888;">FACTIONS : ${k.join(", ")}</div>`;
    }

    // 4. Traits et Desc
    if (item.traits && item.traits.length > 0) {
        detailsHtml += `<div style="margin: 15px 0;"><strong>TRAITS:</strong> `;
        item.traits.forEach(t => detailsHtml += `<span class="trait-tag">[${t}]</span> `);
        detailsHtml += `</div>`;
    }

    detailsHtml += `
    <div style="background:rgba(0,0,0,0.3); padding:10px; border-left:2px solid #33ff00; margin-top:15px;">
        <p style="color:#ddd; font-style:italic; margin:0;">"${item.desc}"</p>
    </div>
    <p style="font-size:0.8em; color:#666; text-align:right; margin-top:10px;">SOURCE : ${item.src}</p>`;

    document.getElementById('modalItemBody').innerHTML = detailsHtml;
    modal.style.display = 'flex';
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
    renderItems();
    const modal = document.getElementById('itemModal');
    const btnClose = document.getElementById('btnCloseItem');

    if (btnClose) btnClose.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (event) => { if (event.target == modal) modal.style.display = 'none'; });
});