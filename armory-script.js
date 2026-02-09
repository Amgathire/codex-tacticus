// --- BIBLIOTHÈQUE DES SOURCES ---
const armorySources = {
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
    { id: "knife", name: "Couteau de Combat", type: "MELEE", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { dmg: "2+1ED", ap: "0", range: "Engagé" }, traits: ["Fiable"], src: armorySources.CORE, desc: "Lame standard de survie." },
    { id: "chainsword", name: "Épée Tronçonneuse", type: "MELEE", rarity: "Commun", keywords: ["IMPERIUM", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "Engagé" }, traits: ["Brutal", "Parade"], src: armorySources.CORE, desc: "Dents en adamantium rotatives." },
    { id: "power_sword", name: "Épée Énergétique", type: "MELEE", rarity: "Rare", keywords: ["IMPERIUM", "AELDARI"], stats: { dmg: "5+1ED", ap: "-3", range: "Engagé" }, traits: ["Parade", "Énergétique"], src: armorySources.CORE, desc: "Champ de disruption moléculaire." },
    { id: "force_sword", name: "Épée de Force", type: "MELEE", rarity: "Unique", keywords: ["PSYKER"], stats: { dmg: "5+1ED", ap: "-3", range: "Engagé" }, traits: ["Force", "Psy-Focus"], src: armorySources.CORE, desc: "Inutilisable par les non-psykers." },
    { id: "power_fist", name: "Gantelet Énergétique", type: "MELEE", rarity: "Très Rare", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "12+1ED", ap: "-3", range: "Engagé" }, traits: ["Brutal", "Encombrant", "Énergétique"], src: armorySources.CORE, desc: "Peut broyer un char." },
    { id: "thunder_hammer", name: "Marteau Tonnerre", type: "MELEE", rarity: "Unique", keywords: ["IMPERIUM", "ASTARTES"], stats: { dmg: "16+1ED", ap: "-3", range: "Engagé" }, traits: ["Brutal", "Encombrant", "Assommant"], src: armorySources.CORE, desc: "Libère une onde de choc à l'impact." },
    { id: "eviscerator", name: "Eviscerator", type: "MELEE", rarity: "Très Rare", keywords: ["ADEPTUS MINISTORUM"], stats: { dmg: "14+1ED", ap: "-2", range: "Engagé" }, traits: ["Brutal", "Encombrant", "Déchirant"], src: armorySources.FSPG, desc: "Épée tronçonneuse géante à deux mains." },
    { id: "choppa", name: "Kikoup'", type: "MELEE", rarity: "Commun", keywords: ["ORK"], stats: { dmg: "7+1ED", ap: "0", range: "Engagé" }, traits: ["Fiable"], src: armorySources.CORE, desc: "Grosse lame brutale." },
    { id: "big_choppa", name: "Gros Kikoup'", type: "MELEE", rarity: "Uncommon", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "-1", range: "Engagé" }, traits: ["À deux mains", "Brutal"], src: armorySources.CORE, desc: "Encore plus gros." },
    { id: "power_klaw", name: "Pince Énergétik", type: "MELEE", rarity: "Rare", keywords: ["ORK"], stats: { dmg: "12+1ED", ap: "-3", range: "Engagé" }, traits: ["Encombrant", "Énergétique"], src: armorySources.CORE, desc: "Ouvre les boîtes de conserve." },
    { id: "witchblade", name: "Lame Sorcière", type: "MELEE", rarity: "Rare", keywords: ["AELDARI", "PSYKER"], stats: { dmg: "6+1ED", ap: "0", range: "Engagé" }, traits: ["Force", "Agile"], src: armorySources.CORE, desc: "Arme élégante à matrice psychique." },
    { id: "agoniser", name: "Agoniseur", type: "MELEE", rarity: "Rare", keywords: ["DRUKHARI"], stats: { dmg: "4+1ED", ap: "-1", range: "Engagé" }, traits: ["Agile", "Douloureux", "Énergétique"], src: armorySources.HES, desc: "Fouet neurotoxique Drukhari." },
    { id: "hyperphase_sword", name: "Épée d'Hyperphase", type: "MELEE", rarity: "Rare", keywords: ["NECRONS"], stats: { dmg: "6+1ED", ap: "-3", range: "Engagé" }, traits: ["Énergétique", "Parade"], src: armorySources.LON, desc: "Vibre entre les dimensions." },
    { id: "shield_slab", name: "Bouclier (Slabshield)", type: "MELEE", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "OGRYN"], stats: { dmg: "Force+0ED", ap: "0", range: "Engagé" }, traits: ["Bouclier (+2 Défense)", "Encombrant"], src: armorySources.CORE, desc: "Une plaque de métal massive utilisée comme couvert mobile." },

    // =======================
    // 2. ARMES À DISTANCE
    // =======================
    { id: "laspistol", name: "Pistolet Laser", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM"], stats: { dmg: "7+1ED", ap: "0", range: "24m", salvo: "1" }, traits: ["Fiable", "Pistolet"], src: armorySources.CORE, desc: "Arme de poing standard." },
    { id: "lasgun", name: "Fusil Laser", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM"], stats: { dmg: "7+1ED", ap: "0", range: "48m", salvo: "2" }, traits: ["Fiable"], src: armorySources.CORE, desc: "Le marteau de l'Empereur." },
    { id: "autogun", name: "Fusil d'Assaut (Autogun)", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "CHAOS", "SCUM"], stats: { dmg: "7+1ED", ap: "0", range: "40m", salvo: "3" }, traits: ["Munitions cinétiques"], src: armorySources.CORE, desc: "Arme à projectiles solides." },
    { id: "shotgun", name: "Fusil à Pompe", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { dmg: "8+1ED", ap: "0", range: "12m", salvo: "2" }, traits: ["Assaut", "Dispertion"], src: armorySources.CORE, desc: "Dévastateur à courte portée." },
    { id: "bolt_pistol", name: "Pistolet Bolter", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "24m", salvo: "1" }, traits: ["Brutal", "Pistolet"], src: armorySources.CORE, desc: "L'arme des officiers." },
    { id: "boltgun", name: "Bolter", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "40m", salvo: "2" }, traits: ["Brutal", "Tir Rapide (2)"], src: armorySources.CORE, desc: "Saint Bolter." },
    { id: "heavy_bolter", name: "Bolter Lourd", type: "RANGED", rarity: "Rare", keywords: ["ASTARTES", "CHAOS"], stats: { dmg: "12+1ED", ap: "-1", range: "60m", salvo: "4" }, traits: ["Brutal", "Lourd (4)"], src: armorySources.CORE, desc: "Impossible à manier sans armure énergétique." },
    { id: "plasma_gun", name: "Fusil Plasma", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "CHAOS"], stats: { dmg: "15+1ED", ap: "-3", range: "48m", salvo: "2" }, traits: ["Tir Rapide(1)", "Surchauffe"], src: armorySources.CORE, desc: "Anti-élite redoutable." },
    { id: "melta_gun", name: "Fuseur", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM"], stats: { dmg: "16+2ED", ap: "-4", range: "12m", salvo: "1" }, traits: ["Fusion", "Assaut"], src: armorySources.CORE, desc: "Anti-char thermique." },
    { id: "arc_rifle", name: "Fusil à Arc", type: "RANGED", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { dmg: "14+1ED", ap: "-1", range: "48m", salvo: "2" }, traits: ["Arc (Vehicle)", "Tir Rapide(1)"], src: armorySources.CORE, desc: "Grille les circuits machines." },
    { id: "radium_carbine", name: "Carabine à Radium", type: "RANGED", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { dmg: "7+1ED", ap: "0", range: "36m", salvo: "3" }, traits: ["Rad-Sat", "Assaut"], src: armorySources.CORE, desc: "Projectiles radioactifs." },
    { id: "slugga", name: "Kalfling'", type: "RANGED", rarity: "Commun", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "0", range: "18m", salvo: "1" }, traits: ["Pistolet", "Inprécis"], src: armorySources.CORE, desc: "Gros pistolet Ork." },
    { id: "shoota", name: "Fling'", type: "RANGED", rarity: "Commun", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "0", range: "36m", salvo: "3" }, traits: ["Assaut", "Inprécis"], src: armorySources.CORE, desc: "Fusil d'assaut Ork." },
    { id: "shuriken_catapult", name: "Catapulte Shuriken", type: "RANGED", rarity: "Rare", keywords: ["AELDARI"], stats: { dmg: "10+1ED", ap: "0", range: "36m", salvo: "3" }, traits: ["Déchirant", "Assaut"], src: armorySources.CORE, desc: "Disques monomoléculaires." },
    { id: "pulse_rifle", name: "Fusil à Impulsion", type: "RANGED", rarity: "Rare", keywords: ["T'AU"], stats: { dmg: "12+1ED", ap: "-1", range: "60m", salvo: "2" }, traits: ["Tir Rapide(1)"], src: armorySources.VAX, desc: "Arme T'au longue portée." },
    { id: "rail_rifle", name: "Fusil Rail", type: "RANGED", rarity: "Très Rare", keywords: ["T'AU"], stats: { dmg: "16+1ED", ap: "-4", range: "60m", salvo: "1" }, traits: ["Mortal Wound (1)", "Lourd"], src: armorySources.VAX, desc: "Accélération magnétique." },
    { id: "gauss_flayer", name: "Ecorcheur Gauss", type: "RANGED", rarity: "Unique", keywords: ["NECRONS"], stats: { dmg: "10+1ED", ap: "-1", range: "48m", salvo: "2" }, traits: ["Tir Rapide(1)", "Désintégration"], src: armorySources.LON, desc: "Désassemble la matière." },
    { id: "splinter_rifle", name: "Fusil Éclateur", type: "RANGED", rarity: "Rare", keywords: ["DRUKHARI"], stats: { dmg: "8+1ED", ap: "0", range: "48m", salvo: "3" }, traits: ["Toxique(4)", "Tir Rapide(1)"], src: armorySources.HES, desc: "Tire des cristaux empoisonnés." },

    // =======================
    // 3. ARMURES (Complète)
    // =======================
    { id: "flak_armor", name: "Armure Flak", type: "ARMOR", rarity: "Commun", keywords: ["IMPERIUM", "SCUM", "ASTRA MILITARUM"], stats: { ar: "3", traits: "-" }, traits: ["Légère"], src: armorySources.CORE, desc: "Gilet standard de la Garde Impériale." },
    { id: "mesh_armor", name: "Armure Composite (Mesh)", type: "ARMOR", rarity: "Rare", keywords: ["IMPERIUM", "AELDARI", "SCUM"], stats: { ar: "3", traits: "-" }, traits: ["Légère", "Thermique"], src: armorySources.CORE, desc: "Tissu thermo-plasmique avancé." },
    { id: "carapace_armor", name: "Armure Carapace", type: "ARMOR", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTRA MILITARUM", "ADEPTUS ARBITES"], stats: { ar: "4", traits: "Lourde (4)" }, traits: ["Rigide"], src: armorySources.CORE, desc: "Plaques de céramite moulées." },
    { id: "skitarii_cuirass", name: "Auto-Cuirasse Skitarii", type: "ARMOR", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { ar: "4", traits: "Lourde (4)" }, traits: ["Rad-Proof", "Interface"], src: armorySources.CORE, desc: "Armure scellée protégeant des radiations." },
    { id: "heavy_plate", name: "Plaques Lourdes", type: "ARMOR", rarity: "Commun", keywords: ["SCUM", "CHAOS", "ORK"], stats: { ar: "4", traits: "Lourde (5)" }, traits: ["Encombrant", "Primitif"], src: armorySources.CORE, desc: "Plaques de métal soudées grossièrement." },
    { id: "ignatus_power_armor", name: "Armure Énergétique Ignatus", type: "ARMOR", rarity: "Très Rare", keywords: ["IMPERIUM", "INQUISITION"], stats: { ar: "4", traits: "Énergétique" }, traits: ["Force +1", "Champ de Force (1)"], src: armorySources.CORE, desc: "Modèle léger pour inquisiteurs humains." },
    { id: "sororitas_power_armor", name: "Armure Sororitas", type: "ARMOR", rarity: "Très Rare", keywords: ["ADEPTUS MINISTORUM", "ADEPTA SORORITAS"], stats: { ar: "5", traits: "Énergétique" }, traits: ["Force +1", "Symbole (Foi)"], src: armorySources.CORE, desc: "L'armure sainte des Sœurs de Bataille." },
    { id: "aquila_power_armor", name: "Armure Astartes (Mk VII)", type: "ARMOR", rarity: "Légendaire", keywords: ["ADEPTUS ASTARTES", "CHAOS"], stats: { ar: "5", traits: "Énergétique" }, traits: ["Force +2", "Taille (Large)", "Systèmes de Survie"], src: armorySources.CORE, desc: "La protection emblématique des Space Marines." },
    { id: "tacticus_armor", name: "Armure Tacticus (Primaris)", type: "ARMOR", rarity: "Légendaire", keywords: ["ADEPTUS ASTARTES", "PRIMARIS"], stats: { ar: "6", traits: "Énergétique" }, traits: ["Force +2", "Taille (Large)"], src: armorySources.CORE, desc: "Armure Mk X standard des Primaris." },
    { id: "terminator_armor", name: "Armure Terminator", type: "ARMOR", rarity: "Unique", keywords: ["ADEPTUS ASTARTES", "CHAOS"], stats: { ar: "7", traits: "Dreadnought" }, traits: ["Force +4", "Invulnérable", "Cumbersome"], src: armorySources.CORE, desc: "Armure Tactique Dreadnought." },
    { id: "runes_armor", name: "Armure Runique", type: "ARMOR", rarity: "Rare", keywords: ["AELDARI", "ASURYANI", "PSYKER"], stats: { ar: "4", traits: "-" }, traits: ["Psy-Résonance", "Légère"], src: armorySources.CORE, desc: "Armure psycho-active des Warlocks." },
    { id: "ghostplate", name: "Armure Ghostplate", type: "ARMOR", rarity: "Très Rare", keywords: ["DRUKHARI", "AELDARI"], stats: { ar: "4", traits: "Champ de Force" }, traits: ["Agile", "Discrétion"], src: armorySources.HES, desc: "Matériau ultra-léger renforcé par des champs de force." },
    { id: "mega_armor", name: "Méga-Armur'", type: "ARMOR", rarity: "Légendaire", keywords: ["ORK"], stats: { ar: "7", traits: "Powered" }, traits: ["Force +3", "Lent", "Kustom"], src: armorySources.CORE, desc: "Des tonnes de plaques de métal." },
    { id: "combat_shield", name: "Bouclier de Combat", type: "ARMOR", rarity: "Uncommon", keywords: ["IMPERIUM", "ADEPTUS ARBITES"], stats: { ar: "+1", traits: "Bouclier" }, traits: ["Défense +1"], src: armorySources.CORE, desc: "S'attache au bras." },
    { id: "storm_shield", name: "Bouclier Tempête", type: "ARMOR", rarity: "Très Rare", keywords: ["ADEPTUS ASTARTES", "INQUISITION"], stats: { ar: "+2", traits: "Champ de Force" }, traits: ["Défense +2", "Invulnérable"], src: armorySources.CORE, desc: "Génère un champ d'énergie capable de parer des tirs de canon laser." },
    { id: "crisis_suit", name: "Exo-armure XV8 Crisis", type: "ARMOR", rarity: "Unique", keywords: ["T'AU"], stats: { ar: "6", traits: "Véhicule (Walker)" }, traits: ["Vol", "Jetpack"], src: armorySources.VAX, desc: "Plateforme de combat T'au." },

    // =======================
    // 4. ÉQUIPEMENT & CYBER (Complète)
    // =======================
    { id: "medikit", name: "Narthecium / Médikit", type: "GEAR", rarity: "Commun", keywords: ["IMPERIUM"], stats: { ar: "-", traits: "Médical" }, traits: ["Outil (+1D Médicae)", "Indispensable"], src: armorySources.CORE, desc: "Contient des stims, bandages et synth-peau." },
    { id: "combi_tool", name: "Combi-Outil", type: "GEAR", rarity: "Uncommon", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "-", traits: "Technique" }, traits: ["Outil (+1D Tech)", "Polyvalent"], src: armorySources.CORE, desc: "Un appareil rempli de clés et outils." },
    { id: "void_suit", name: "Combinaison Spatiale", type: "GEAR", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "2", traits: "Scellée" }, traits: ["Immunité (Gaz)", "Survie (Vide)"], src: armorySources.CORE, desc: "Permet de survivre dans le vide." },
    { id: "magnoculars", name: "Magnoculaires", type: "GEAR", rarity: "Commun", keywords: ["IMPERIUM", "T'AU"], stats: { ar: "-", traits: "Vision" }, traits: ["Zoom", "Vigilance (+1D)"], src: armorySources.CORE, desc: "Jumelles électroniques avancées." },
    { id: "ammo_cache", name: "Caisse de Munitions", type: "GEAR", rarity: "Uncommon", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "-", traits: "Recharge" }, traits: ["3 Recharges", "Lourd"], src: armorySources.CORE, desc: "Une caisse lourde contenant des munitions." },
    { id: "rosarius", name: "Rosarius", type: "GEAR", rarity: "Très Rare", keywords: ["ADEPTUS MINISTORUM", "ASTARTES"], stats: { ar: "*", traits: "Champ de Force" }, traits: ["Défense +4", "Symbole Religieux"], src: armorySources.CORE, desc: "Générateur de champ de conversion." },
    { id: "cameleoline", name: "Cape en Caméléoline", type: "GEAR", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES"], stats: { ar: "-", traits: "Camouflage" }, traits: ["Discrétion (+2D)"], src: armorySources.CORE, desc: "Tissu mimétique." },
    { id: "mechadendrite", name: "Méchadendrite", type: "CYBER", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { ar: "-", traits: "-" }, traits: ["Outil (+1D)"], src: armorySources.CORE, desc: "Bras mécanique supplémentaire." },
    { id: "cortex_implant", name: "Implant Cortex", type: "CYBER", rarity: "Très Rare", keywords: ["IMPERIUM"], stats: { ar: "-", traits: "-" }, traits: ["Logique +1"], src: armorySources.CORE, desc: "Augmentation cognitive." },
    { id: "bionic_arm", name: "Bras Bionique", type: "CYBER", rarity: "Rare", keywords: ["IMPERIUM", "ADEPTUS MECHANICUS"], stats: { ar: "1", traits: "Membre" }, traits: ["Force +1", "Durable"], src: armorySources.CORE, desc: "Remplacement mécanique augmentant la force brute." },
    { id: "bionic_legs", name: "Jambes Bioniques", type: "CYBER", rarity: "Rare", keywords: ["IMPERIUM"], stats: { ar: "-", traits: "Mouvement" }, traits: ["Vitesse +2", "Saut Augmenté"], src: armorySources.CORE, desc: "Permet de courir plus vite et sauter plus haut." },
    { id: "subskin_armor", name: "Armure Sous-cutanée", type: "CYBER", rarity: "Très Rare", keywords: ["IMPERIUM", "SCUM"], stats: { ar: "1", traits: "Interne" }, traits: ["Cumulable", "Invisible"], src: armorySources.CORE, desc: "Plaques de céramite greffées sous la peau." },
    { id: "respirator_augment", name: "Respirateur Interne", type: "CYBER", rarity: "Uncommon", keywords: ["IMPERIUM", "CHEM-DOG"], stats: { ar: "-", traits: "Poumons" }, traits: ["Immunité (Gaz)", "Filtre"], src: armorySources.CORE, desc: "Remplace les voies respiratoires." },
    { id: "miu", name: "Unité d'Impulsion Mentale (MIU)", type: "CYBER", rarity: "Rare", keywords: ["ADEPTUS MECHANICUS"], stats: { ar: "-", traits: "Interface" }, traits: ["Tech (+2D)", "Pilotage (+1D)"], src: armorySources.CORE, desc: "Connecte le cerveau directement à la machine." },

    // =======================
    // 5. GRENADES & EXPLOSIFS
    // =======================
    { id: "frag_grenade", name: "Grenade Frag", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "SCUM", "CHAOS"], stats: { dmg: "10+1ED", ap: "0", range: "Sx3m", salvo: "-" }, traits: ["Explosion (Petite)", "Lancer"], src: armorySources.CORE, desc: "Explosif antipersonnel standard." },
    { id: "krak_grenade", name: "Grenade Krak", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "14+2ED", ap: "-2", range: "Sx3m", salvo: "-" }, traits: ["Explosion (Petite)", "Lancer", "Pénétrant"], src: armorySources.CORE, desc: "Charge concentrée pour percer les blindages." },
    { id: "melta_bomb", name: "Bombe à Fusion", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "16+4ED", ap: "-4", range: "Contact", salvo: "-" }, traits: ["Fusion", "Explosion (Petite)", "Lourde"], src: armorySources.CORE, desc: "Détruit les fortifications et les chars lourds." },
    { id: "photon_grenade", name: "Grenade à Photons", type: "RANGED", rarity: "Uncommon", keywords: ["T'AU"], stats: { dmg: "-", ap: "-", range: "Sx3m", salvo: "-" }, traits: ["Aveuglant", "Lancer", "Explosion (Grande)"], src: armorySources.VAX, desc: "Grenade défensive T'au émettant une lumière aveuglante." },
    { id: "plasma_grenade", name: "Grenade Plasma", type: "RANGED", rarity: "Rare", keywords: ["AELDARI", "DRUKHARI"], stats: { dmg: "12+1ED", ap: "-1", range: "Sx3m", salvo: "-" }, traits: ["Explosion (Petite)", "Lancer"], src: armorySources.CORE, desc: "Libère une sphère de plasma instable." },

    // =======================
    // 6. ARMES LOURDES & SPÉCIALES
    // =======================
    { id: "heavy_stubber", name: "Mitrailleuse Lourde", type: "RANGED", rarity: "Uncommon", keywords: ["IMPERIUM", "CHAOS", "SCUM"], stats: { dmg: "10+1ED", ap: "0", range: "72m", salvo: "4" }, traits: ["Lourd (3)", "Tir Rapide (3)"], src: armorySources.CORE, desc: "Arme automatique gros calibre de soutien." },
    { id: "autocannon", name: "Autocanon", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "CHAOS", "ASTARTES"], stats: { dmg: "16+1ED", ap: "-2", range: "96m", salvo: "3" }, traits: ["Lourd (4)", "Brutal"], src: armorySources.CORE, desc: "Tire des obus explosifs de gros calibre." },
    { id: "lascannon", name: "Canon Laser (Portatif)", type: "RANGED", rarity: "Très Rare", keywords: ["IMPERIUM", "CHAOS", "ASTARTES"], stats: { dmg: "18+3ED", ap: "-3", range: "120m", salvo: "1" }, traits: ["Lourd (4)", "Sniper", "Fusion"], src: armorySources.CORE, desc: "L'arme anti-char ultime de l'infanterie." },
    { id: "missile_launcher", name: "Lance-Missiles", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES", "CHAOS"], stats: { dmg: "Spécial", ap: "Spécial", range: "100m", salvo: "1" }, traits: ["Lourd (4)", "Explosion (Variable)"], src: armorySources.CORE, desc: "Peut tirer des missiles Frag ou Krak." },
    { id: "heavy_flamer", name: "Lance-Flammes Lourd", type: "RANGED", rarity: "Rare", keywords: ["IMPERIUM", "ASTARTES", "ADEPTAS SORORITAS"], stats: { dmg: "12+1ED", ap: "-1", range: "Souffle", salvo: "-" }, traits: ["Lourd (4)", "Zone", "Brûlure"], src: armorySources.CORE, desc: "Version massive du lance-flammes standard." },
    { id: "rokkit_launcha", name: "Lance-Rokettes", type: "RANGED", rarity: "Uncommon", keywords: ["ORK"], stats: { dmg: "16+1ED", ap: "-2", range: "60m", salvo: "1" }, traits: ["Explosion (Petite)", "Lourd (4)"], src: armorySources.CORE, desc: "Rudimentaire mais efficace." },
    { id: "burna", name: "Kram'eur (Burna)", type: "RANGED", rarity: "Uncommon", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "0", range: "Souffle", salvo: "-" }, traits: ["Brûlure", "Assaut", "Zone"], src: armorySources.CORE, desc: "Lance-flammes Ork." },
    { id: "reaper_launcher", name: "Lanceur Reaper", type: "RANGED", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "14+2ED", ap: "-2", range: "120m", salvo: "2" }, traits: ["Lourd (4)", "Précis"], src: armorySources.CORE, desc: "Tire des missiles monofilaments perforants." },
    { id: "death_spinner", name: "Tisse-Mort", type: "RANGED", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "10+2ED", ap: "0", range: "24m", salvo: "2" }, traits: ["Déchirant", "Zone", "Assaut"], src: armorySources.CORE, desc: "Projette un nuage de fils monomoléculaires." },

    // =======================
    // 7. RELIQUES & PRIMITIF
    // =======================
    { id: "burning_blade", name: "La Lame Ardente", type: "MELEE", rarity: "Unique", keywords: ["IMPERIUM", "ASTARTES"], stats: { dmg: "8+2ED", ap: "-4", range: "Engagé" }, traits: ["Brûlure", "Parade", "Relique"], src: armorySources.CORE, desc: "Une épée énergétique ancienne qui s'enflamme." },
    { id: "null_rod", name: "Sceptre de Négation", type: "MELEE", rarity: "Très Rare", keywords: ["INQUISITION", "SILENT SISTERHOOD"], stats: { dmg: "6+1ED", ap: "-2", range: "Engagé" }, traits: ["Anti-Psy", "Choc"], src: armorySources.CORE, desc: "Annule les pouvoirs psychiques au contact." },
    { id: "digital_weapons", name: "Armes Digitales", type: "RANGED", rarity: "Très Rare", keywords: ["IMPERIUM", "INQUISITION", "SCUM"], stats: { dmg: "12+1ED", ap: "-3", range: "3m", salvo: "1" }, traits: ["Dissimulé", "Pistolet", "Unique"], src: armorySources.CORE, desc: "Lasers miniatures cachés dans des bagues." },
    { id: "bow", name: "Arc / Arbalète", type: "RANGED", rarity: "Commun", keywords: ["PRIMITIVE", "SCUM", "AELDARI"], stats: { dmg: "7+1ED", ap: "0", range: "24m", salvo: "-" }, traits: ["Silencieux"], src: armorySources.CORE, desc: "Arme silencieuse." },
    { id: "musket", name: "Mousquet / Tromblon", type: "RANGED", rarity: "Commun", keywords: ["PRIMITIVE", "SCUM"], stats: { dmg: "8+1ED", ap: "0", range: "12m", salvo: "-" }, traits: ["Inprécis", "Bruyant"], src: armorySources.CORE, desc: "Arme à poudre noire archaïque." },
    { id: "stub_gun", name: "Revolver (Stub Gun)", type: "RANGED", rarity: "Commun", keywords: ["IMPERIUM", "SCUM"], stats: { dmg: "7+1ED", ap: "0", range: "18m", salvo: "1" }, traits: ["Pistolet", "Fiable"], src: armorySources.CORE, desc: "Pistolet à balles gros calibre." },

    // ==========================================
    // === ARMES AELDARI (ASURYANI, HARLEQUIN, CORSAIRES)
    // ==========================================

    // --- MÊLÉE AELDARI ---
    { id: "scorpion_chainsword", name: "Épée Scorpion", type: "MELEE", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "9+1ED", ap: "0", range: "Engagé" }, traits: ["Brutal", "Silencieux", "Parade"], src: armorySources.CORE, desc: "Tronçonneuse furtive et légère." },
    { id: "biting_blade", name: "Lame Mordante", type: "MELEE", rarity: "Très Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "12+1ED", ap: "-1", range: "Engagé" }, traits: ["Lourde", "Déchirant"], src: armorySources.CORE, desc: "Grande épée des Scorpions Exarques." },
    { id: "singing_spear", name: "Lance Chantante", type: "MELEE", rarity: "Très Rare", keywords: ["AELDARI", "PSYKER"], stats: { dmg: "Force+4", ap: "0", range: "Engagé/12m" }, traits: ["Force", "Lancer", "Psy-Focus"], src: armorySources.CORE, desc: "Arme psychique revenant en main." },
    { id: "diresword", name: "Lame Funeste", type: "MELEE", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "10+1ED", ap: "-3", range: "Engagé" }, traits: ["Parade", "Mortal Wound"], src: armorySources.CORE, desc: "Contient l'esprit d'un guerrier mort." },
    { id: "harlequin_kiss", name: "Baiser d'Harlequin", type: "MELEE", rarity: "Unique", keywords: ["AELDARI", "HARLEQUIN"], stats: { dmg: "12+1ED", ap: "-4", range: "Engagé" }, traits: ["Brutal", "Pénétrant"], src: armorySources.AAA, desc: "Injecte un monofilament liquide mortel." },
    { id: "executioner", name: "Exécuteur", type: "MELEE", rarity: "Légendaire", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "14+1ED", ap: "-3", range: "Engagé" }, traits: ["À deux mains", "Déchirant"], src: armorySources.CORE, desc: "Glaive des Banshees Exarques." },
    { id: "ghost_axe", name: "Hache Fantôme", type: "MELEE", rarity: "Rare", keywords: ["AELDARI"], stats: { dmg: "10+2ED", ap: "-2", range: "Engagé" }, traits: ["Encombrant"], src: armorySources.CORE, desc: "Arme lourde des Wraithblades." },

    // --- DISTANCE AELDARI ---
    { id: "shuriken_pistol", name: "Pistolet Shuriken", type: "RANGED", rarity: "Rare", keywords: ["AELDARI"], stats: { dmg: "10+1ED", ap: "0", range: "24m", salvo: "2" }, traits: ["Pistolet", "Déchirant"], src: armorySources.CORE, desc: "Arme de poing tirant des disques." },
    { id: "shuriken_catapult", name: "Catapulte Shuriken", type: "RANGED", rarity: "Rare", keywords: ["AELDARI"], stats: { dmg: "10+1ED", ap: "0", range: "36m", salvo: "3" }, traits: ["Assaut", "Déchirant"], src: armorySources.CORE, desc: "L'arme standard des Gardiens." },
    { id: "ranger_long_rifle", name: "Long Fusil de Ranger", type: "RANGED", rarity: "Rare", keywords: ["AELDARI"], stats: { dmg: "10+1ED", ap: "0", range: "100m", salvo: "0" }, traits: ["Sniper", "Lourd"], src: armorySources.CORE, desc: "Précision mortelle à longue distance." },
    { id: "fusion_pistol", name: "Pistolet à Fusion", type: "RANGED", rarity: "Très Rare", keywords: ["AELDARI", "HARLEQUIN"], stats: { dmg: "16+2ED", ap: "-4", range: "6m", salvo: "1" }, traits: ["Pistolet", "Fusion"], src: armorySources.CORE, desc: "Un fuseur compact et dévastateur." },
    { id: "fusion_gun", name: "Fusil à Fusion", type: "RANGED", rarity: "Très Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "16+2ED", ap: "-4", range: "12m", salvo: "1" }, traits: ["Fusion", "Assaut"], src: armorySources.CORE, desc: "L'arme des Fire Dragons." },
    { id: "death_spinner", name: "Tisse-Mort", type: "RANGED", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "10+2ED", ap: "0", range: "24m", salvo: "2" }, traits: ["Déchirant", "Zone", "Assaut"], src: armorySources.CORE, desc: "Projette un nuage de fils monomoléculaires." },
    { id: "neuro_disruptor", name: "Neuro-Disrupteur", type: "RANGED", rarity: "Très Rare", keywords: ["AELDARI", "HARLEQUIN"], stats: { dmg: "Spécial", ap: "-", range: "18m", salvo: "1" }, traits: ["Pistolet", "Explosion", "Assommant"], src: armorySources.AAA, desc: "Détruit les tissus nerveux." },
    { id: "reaper_launcher", name: "Lanceur Reaper", type: "RANGED", rarity: "Très Rare", keywords: ["AELDARI", "ASURYANI"], stats: { dmg: "14+2ED", ap: "-2", range: "120m", salvo: "2" }, traits: ["Lourd (4)", "Précis"], src: armorySources.CORE, desc: "Tire des missiles monofilaments perforants." },
    { id: "shuriken_cannon", name: "Canon Shuriken", type: "RANGED", rarity: "Rare", keywords: ["AELDARI"], stats: { dmg: "12+1ED", ap: "0", range: "60m", salvo: "4" }, traits: ["Lourd (4)", "Déchirant"], src: armorySources.CORE, desc: "Déchiquette l'infanterie." },
    { id: "prism_rifle", name: "Fusil à Prisme", type: "RANGED", rarity: "Légendaire", keywords: ["AELDARI", "CORSAIR"], stats: { dmg: "14+1ED", ap: "-3", range: "72m", salvo: "2" }, traits: ["Lourd", "Laser"], src: armorySources.AAA, desc: "Technologie rare de focalisation laser." },

    // --- ARMURES & ÉQUIPEMENT AELDARI ---
    { id: "mesh_armor", name: "Armure Composite (Mesh)", type: "ARMOR", rarity: "Rare", keywords: ["AELDARI", "CORSAIR"], stats: { ar: "3", traits: "-" }, traits: ["Légère", "Thermique"], src: armorySources.CORE, desc: "Tissu thermo-plasmique avancé." },
    { id: "heavy_mesh", name: "Armure Composite Lourde", type: "ARMOR", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { ar: "4", traits: "-" }, traits: ["Légère"], src: armorySources.CORE, desc: "Portée par les Guerriers Aspects." },
    { id: "holo_suit", name: "Holo-Combinaison", type: "ARMOR", rarity: "Unique", keywords: ["AELDARI", "HARLEQUIN"], stats: { ar: "2", traits: "Champ de Force" }, traits: ["Invulnérable", "Camouflage"], src: armorySources.AAA, desc: "Brouille la vision de l'ennemi." },
    { id: "runes_armor", name: "Armure Runique", type: "ARMOR", rarity: "Très Rare", keywords: ["AELDARI", "PSYKER"], stats: { ar: "4", traits: "Psy-Résonance" }, traits: ["Invulnérable (4+)"], src: armorySources.CORE, desc: "Protège contre les attaques physiques et psychiques." },
    { id: "banshee_mask", name: "Masque de Banshee", type: "GEAR", rarity: "Rare", keywords: ["AELDARI", "ASURYANI"], stats: { ar: "-", traits: "Terror" }, traits: ["Peur", "Initiative +2"], src: armorySources.CORE, desc: "Amplifie le cri de guerre pour paralyser l'ennemi." },
    { id: "flip_belt", name: "Ceinture Anti-Grav", type: "GEAR", rarity: "Rare", keywords: ["AELDARI", "HARLEQUIN"], stats: { ar: "-", traits: "Mouvement" }, traits: ["Vol", "Agilité +1D"], src: armorySources.AAA, desc: "Permet des acrobaties impossibles." },
// ==========================================
    // === ARMES ORKS (LA WAAAGH!)
    // ==========================================

    // --- MÊLÉE ORK (SUPPLÉMENTS) ---
    // Note: Kikoup, Gros Kikoup et Pince sont déjà dans la base standard, voici les ajouts.
    { id: "killsaw", name: "Disqueuse (Killsaw)", type: "MELEE", rarity: "Rare", keywords: ["ORK"], stats: { dmg: "16+1ED", ap: "-4", range: "Engagé" }, traits: ["Encombrant", "Déchirant"], src: armorySources.CORE, desc: "Scie circulaire industrielle montée sur bras." },
    { id: "tankhammer", name: "Marteau-Kasseur", type: "MELEE", rarity: "Rare", keywords: ["ORK"], stats: { dmg: "16+1ED", ap: "-2", range: "Engagé" }, traits: ["Brutal", "Explosion", "Inwieldy"], src: armorySources.CORE, desc: "Une roquette attachée à un bâton. Très dangereux." },
    { id: "chain_choppa", name: "Kikoup' Tronçonneur", type: "MELEE", rarity: "Uncommon", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "-1", range: "Engagé" }, traits: ["Brutal", "Parade"], src: armorySources.CORE, desc: "Hybride entre une hache et une tronçonneuse." },
    { id: "copper_toof", name: "Dent en Cuivre", type: "MELEE", rarity: "Unique", keywords: ["ORK"], stats: { dmg: "4+1ED", ap: "0", range: "Engagé" }, traits: ["Chanceux", "Social"], src: armorySources.AAA, desc: "Un porte-bonheur qui sert aussi à cogner." },

    // --- DISTANCE ORK (SUPPLÉMENTS) ---
    { id: "dakkagun", name: "Fling'dakka", type: "RANGED", rarity: "Rare", keywords: ["ORK"], stats: { dmg: "12+1ED", ap: "0", range: "36m", salvo: "4" }, traits: ["Assaut", "Inprécis"], src: armorySources.CORE, desc: "Deux flings scotchés ensemble. Deux fois plus de bruit." },
    { id: "snazzgun", name: "Fling'kiflash", type: "RANGED", rarity: "Très Rare", keywords: ["ORK", "FLASH GIT"], stats: { dmg: "12+2ED", ap: "-2", range: "48m", salvo: "3" }, traits: ["Lourd", "Kustom"], src: armorySources.CORE, desc: "Arme de luxe, calibrée pour le carnage." },
    { id: "kustom_mega_blasta", name: "Méga-Eud'kramer", type: "RANGED", rarity: "Très Rare", keywords: ["ORK", "MEK"], stats: { dmg: "16+1ED", ap: "-3", range: "48m", salvo: "2" }, traits: ["Assaut", "Surchauffe", "Mortal Wound"], src: armorySources.CORE, desc: "Technologie plasma instable des Meks." },
    { id: "shokk_attack_gun", name: "Kanun Shokk", type: "RANGED", rarity: "Légendaire", keywords: ["ORK", "BIG MEK"], stats: { dmg: "Spécial", ap: "Spécial", range: "120m", salvo: "1" }, traits: ["Lourd", "Explosion (Lge)"], src: armorySources.CORE, desc: "Téléporte des Grots enragés à l'intérieur de la cible." },
    { id: "grot_zooka", name: "Grot-zooka", type: "RANGED", rarity: "Rare", keywords: ["ORK", "GROT"], stats: { dmg: "10+1ED", ap: "0", range: "36m", salvo: "2" }, traits: ["Explosion", "Assaut"], src: armorySources.CORE, desc: "Tire tout ce qui traîne : ferraille, clous, détritus." },
    { id: "smasha_gun", name: "Kanun' Kasseur", type: "RANGED", rarity: "Rare", keywords: ["ORK"], stats: { dmg: "14+1ED", ap: "-2", range: "72m", salvo: "1" }, traits: ["Lourd", "Assommant"], src: armorySources.COS, desc: "Utilise des champs de force tracteurs pour écraser la cible." },
    { id: "bubblechukka", name: "Lance-Bulles", type: "RANGED", rarity: "Très Rare", keywords: ["ORK"], stats: { dmg: "Variable", ap: "Variable", range: "60m", salvo: "1" }, traits: ["Aléatoire", "Lourd"], src: armorySources.COS, desc: "Tire des bulles de force de taille et d'effet aléatoires." },

    // --- ARMURES & ÉQUIPEMENT ORK ---
    { id: "eavy_armor", name: "Armur' Lourd'", type: "ARMOR", rarity: "Uncommon", keywords: ["ORK"], stats: { ar: "4", traits: "Lourde (5)" }, traits: ["Durable", "Encombrant"], src: armorySources.CORE, desc: "Des plaques de métal rivetées directement sur les muscles." },
    { id: "bosspole", name: "Bâton de Boss", type: "GEAR", rarity: "Rare", keywords: ["ORK", "NOB"], stats: { ar: "-", traits: "Commandement" }, traits: ["Autorité", "Symbole"], src: armorySources.CORE, desc: "Permet de remettre les Boyz dans le rang." },
    { id: "dok_tools", name: "Outils de Dok", type: "GEAR", rarity: "Rare", keywords: ["ORK", "PAINBOY"], stats: { ar: "-", traits: "Médical" }, traits: ["Outil (+1D)", "Douloureux"], src: armorySources.CORE, desc: "Seringues rouillées et scies à os." },
    { id: "mek_tools", name: "Outils de Mek", type: "GEAR", rarity: "Uncommon", keywords: ["ORK", "MEK"], stats: { ar: "-", traits: "Technique" }, traits: ["Outil (+2D Tech)", "Lourd"], src: armorySources.CORE, desc: "Clé à molette géante et chalumeau." },
    { id: "stikkbomb", name: "Bâton-Bombe (Stikkbomb)", type: "RANGED", rarity: "Commun", keywords: ["ORK"], stats: { dmg: "10+1ED", ap: "0", range: "Sx3m", salvo: "-" }, traits: ["Explosion", "Lancer", "Brutal"], src: armorySources.CORE, desc: "Grenade à manche, idéale pour le corps à corps aussi." },
    { id: "tankbusta_bomb", name: "Bomb' Kasse-Tank", type: "RANGED", rarity: "Rare", keywords: ["ORK"], stats: { dmg: "16+4ED", ap: "-4", range: "Contact", salvo: "-" }, traits: ["Fusion", "Lourde", "Anti-Véhicule"], src: armorySources.CORE, desc: "Disque magnétique explosif." },
// ==========================================
    // === ARMES & ÉQUIPEMENT DE L'EMPIRE T'AU
    // ==========================================

    // --- MÊLÉE T'AU & AUXILIAIRES ---
    { id: "bonding_knife", name: "Couteau Rituel (Ta'lissera)", type: "MELEE", rarity: "Uncommon", keywords: ["T'AU"], stats: { dmg: "2+1ED", ap: "0", range: "Engagé" }, traits: ["Symbol", "Honorable"], src: armorySources.VAX, desc: "Symbole d'union d'une équipe, pas vraiment une arme de guerre." },
    { id: "kroot_rifle_melee", name: "Fusil Kroot (Lames)", type: "MELEE", rarity: "Commun", keywords: ["KROOT"], stats: { dmg: "8+1ED", ap: "0", range: "Engagé" }, traits: ["Parade", "A deux mains"], src: armorySources.VAX, desc: "Lames fixées sur le canon et la crosse." },
    { id: "fusion_blades", name: "Lames à Fusion", type: "MELEE", rarity: "Très Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { dmg: "14+2ED", ap: "-4", range: "Engagé" }, traits: ["Fusion", "Brutal", "Énergétique"], src: armorySources.VAX, desc: "Projecteurs à fusion modifiés pour le corps à corps (Exo-armure)." },
    { id: "onager_gauntlet", name: "Gantelet Onager", type: "MELEE", rarity: "Unique", keywords: ["T'AU", "BATTLESUIT"], stats: { dmg: "16+1ED", ap: "-3", range: "Engagé" }, traits: ["Brutal", "Assommant"], src: armorySources.VAX, desc: "Technologie expérimentale dévastatrice." },
    { id: "emp_grenade", name: "Grenade PEM", type: "RANGED", rarity: "Uncommon", keywords: ["T'AU"], stats: { dmg: "-", ap: "-", range: "Sx3m", salvo: "-" }, traits: ["Haywire", "Lancer", "Explosion"], src: armorySources.CORE, desc: "Désactive les véhicules et systèmes électroniques." },

    // --- DISTANCE T'AU (INFANTERIE) ---
    { id: "pulse_pistol", name: "Pistolet à Impulsion", type: "RANGED", rarity: "Commun", keywords: ["T'AU"], stats: { dmg: "10+1ED", ap: "-1", range: "30m", salvo: "1" }, traits: ["Pistolet", "Fiable"], src: armorySources.VAX, desc: "Arme de poing standard des Shas'ui." },
    { id: "pulse_carbine", name: "Carabine à Impulsion", type: "RANGED", rarity: "Commun", keywords: ["T'AU"], stats: { dmg: "12+1ED", ap: "0", range: "48m", salvo: "3" }, traits: ["Assaut", "Pinning"], src: armorySources.VAX, desc: "Dispose d'un lance-grenades à photons intégré." },
    { id: "pulse_rifle", name: "Fusil à Impulsion", type: "RANGED", rarity: "Commun", keywords: ["T'AU"], stats: { dmg: "12+1ED", ap: "-1", range: "72m", salvo: "2" }, traits: ["Tir Rapide (1)", "Fiable"], src: armorySources.CORE, desc: "Portée supérieure à la plupart des fusils impériaux." },
    { id: "pulse_blaster", name: "Eclateur à Impulsion", type: "RANGED", rarity: "Uncommon", keywords: ["T'AU"], stats: { dmg: "14+1ED", ap: "-2", range: "12m", salvo: "2" }, traits: ["Assaut", "Shotgun"], src: armorySources.VAX, desc: "Dévastateur à courte portée (Breacher)." },
    { id: "rail_rifle", name: "Fusil Rail", type: "RANGED", rarity: "Rare", keywords: ["T'AU", "PATHFINDER"], stats: { dmg: "14+1ED", ap: "-3", range: "60m", salvo: "1" }, traits: ["Mortal Wound (1)", "Lourd", "Sniper"], src: armorySources.VAX, desc: "Accélérateur linéaire portatif." },
    { id: "ion_rifle", name: "Fusil à Ions", type: "RANGED", rarity: "Rare", keywords: ["T'AU", "PATHFINDER"], stats: { dmg: "14+1ED", ap: "-1", range: "60m", salvo: "3" }, traits: ["Lourd", "Surchauffe"], src: armorySources.VAX, desc: "Tire des particules ionisées instables." },
    { id: "kroot_rifle", name: "Fusil Kroot", type: "RANGED", rarity: "Commun", keywords: ["KROOT"], stats: { dmg: "9+1ED", ap: "0", range: "48m", salvo: "2" }, traits: ["Tir Rapide (1)"], src: armorySources.VAX, desc: "Arme à poudre primitive mais efficace." },
    { id: "neutron_blaster", name: "Blaster à Neutrons", type: "RANGED", rarity: "Rare", keywords: ["VESPID"], stats: { dmg: "10+1ED", ap: "-2", range: "18m", salvo: "2" }, traits: ["Assaut", "Rad"], src: armorySources.VAX, desc: "Arme unique des Vespids." },

    // --- ARMEMENT EXO-ARMURES (BATTLESUITS) ---
    { id: "burst_cannon", name: "Canon à Impulsion (Burst)", type: "RANGED", rarity: "Uncommon", keywords: ["T'AU", "BATTLESUIT"], stats: { dmg: "12+1ED", ap: "0", range: "36m", salvo: "6" }, traits: ["Lourd", "Assaut"], src: armorySources.VAX, desc: "Mitrailleuse rotative à impulsion." },
    { id: "missile_pod", name: "Nacelle de Missiles", type: "RANGED", rarity: "Uncommon", keywords: ["T'AU", "BATTLESUIT"], stats: { dmg: "14+1ED", ap: "-1", range: "90m", salvo: "2" }, traits: ["Lourd", "Explosion (Petite)"], src: armorySources.VAX, desc: "Tire des salves de missiles autoguidés." },
    { id: "fusion_blaster", name: "Blaster à Fusion", type: "RANGED", rarity: "Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { dmg: "16+2ED", ap: "-4", range: "18m", salvo: "1" }, traits: ["Assaut", "Fusion"], src: armorySources.VAX, desc: "L'arme anti-char de prédilection des Crisis." },
    { id: "plasma_rifle_tau", name: "Fusil à Plasma T'au", type: "RANGED", rarity: "Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { dmg: "14+1ED", ap: "-3", range: "48m", salvo: "2" }, traits: ["Tir Rapide (1)", "Fiable"], src: armorySources.VAX, desc: "Moins puissant que l'Impérial, mais ne surchauffe pas." },
    { id: "cyclic_ion", name: "Éclateur à Ions Cyclique", type: "RANGED", rarity: "Très Rare", keywords: ["T'AU", "COMMANDER"], stats: { dmg: "14+1ED", ap: "-2", range: "36m", salvo: "4" }, traits: ["Assaut", "Surchauffe"], src: armorySources.VAX, desc: "Arme expérimentale à haute cadence." },
    { id: "smart_missile", name: "Système de Missiles Intelligents", type: "RANGED", rarity: "Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { dmg: "12+1ED", ap: "0", range: "60m", salvo: "4" }, traits: ["Lourd", "Ignore Couvert", "Pas de Ligne de Vue"], src: armorySources.VAX, desc: "Missiles contournant les obstacles." },
    { id: "heavy_rail_rifle", name: "Fusil Rail Lourd", type: "RANGED", rarity: "Très Rare", keywords: ["T'AU", "BROADSIDE"], stats: { dmg: "18+2ED", ap: "-5", range: "120m", salvo: "1" }, traits: ["Lourd", "Mortal Wound (2)", "Destructeur"], src: armorySources.VAX, desc: "Arme principale des Broadside XV88." },

    // --- ARMURES T'AU ---
    { id: "recon_armor", name: "Armure de Reconnaissance", type: "ARMOR", rarity: "Commun", keywords: ["T'AU", "PATHFINDER"], stats: { ar: "3", traits: "-" }, traits: ["Légère", "Encombrement 0"], src: armorySources.VAX, desc: "Tissu composite léger." },
    { id: "combat_armor", name: "Armure de Combat T'au", type: "ARMOR", rarity: "Commun", keywords: ["T'AU"], stats: { ar: "4", traits: "Scellée" }, traits: ["Solide", "Systèmes de Visée"], src: armorySources.VAX, desc: "Standard pour les Guerriers de Feu." },
    { id: "stealth_suit", name: "Exo-armure XV25 Stealth", type: "ARMOR", rarity: "Rare", keywords: ["T'AU"], stats: { ar: "5", traits: "Powered" }, traits: ["Force +2", "Camouflage (+2D)", "Vol"], src: armorySources.VAX, desc: "Génère un champ de distorsion optique." },
    { id: "crisis_suit", name: "Exo-armure XV8 Crisis", type: "ARMOR", rarity: "Très Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { ar: "6", traits: "Véhicule" }, traits: ["Force +4", "Vol", "Hard Points (3)"], src: armorySources.VAX, desc: "L'icône de la caste du Feu." },
    { id: "broadside_suit", name: "Exo-armure XV88 Broadside", type: "ARMOR", rarity: "Très Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { ar: "7", traits: "Véhicule" }, traits: ["Force +4", "Stable", "Lent"], src: armorySources.VAX, desc: "Plateforme d'artillerie lourde bipède." },
    { id: "enforcer_suit", name: "Exo-armure XV85 Enforcer", type: "ARMOR", rarity: "Légendaire", keywords: ["T'AU", "COMMANDER"], stats: { ar: "7", traits: "Véhicule" }, traits: ["Force +4", "Vol", "Commandement"], src: armorySources.VAX, desc: "Réservée aux Commandeurs." },

    // --- ÉQUIPEMENT & DRONES ---
    { id: "markerlight", name: "Désignateur Laser", type: "GEAR", rarity: "Commun", keywords: ["T'AU"], stats: { ar: "-", traits: "Ciblage" }, traits: ["Marquage (+1D pour Alliés)", "Vigilance"], src: armorySources.VAX, desc: "Peint la cible pour les armes guidées." },
    { id: "shield_generator", name: "Générateur de Bouclier", type: "GEAR", rarity: "Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { ar: "+1", traits: "Champ de Force" }, traits: ["Invulnérable (4+)"], src: armorySources.VAX, desc: "Sauvegarde invulnérable contre les tirs puissants." },
    { id: "drone_controller", name: "Contrôleur de Drones", type: "GEAR", rarity: "Uncommon", keywords: ["T'AU"], stats: { ar: "-", traits: "Tech" }, traits: ["Commande (Drones)", "Tech (+1D)"], src: armorySources.VAX, desc: "Permet de diriger les IA des drones." },
    { id: "target_lock", name: "Verrouillage de Cible", type: "GEAR", rarity: "Uncommon", keywords: ["T'AU", "BATTLESUIT"], stats: { ar: "-", traits: "Visée" }, traits: ["Ignore Malus Mouvement", "Tir en Mouvement"], src: armorySources.VAX, desc: "Système de stabilisation gyroscopique." },
    { id: "stimulant_injector", name: "Injecteur de Stims", type: "GEAR", rarity: "Rare", keywords: ["T'AU", "BATTLESUIT"], stats: { ar: "-", traits: "Médical" }, traits: ["Insensible (5+)", "Urgence"], src: armorySources.VAX, desc: "Injection automatique en cas de blessure critique." },
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

document.addEventListener('DOMContentLoaded', function() {
    // Sécurité : On ne lance le rendu que si la grille existe
    if (document.getElementById('armoryGrid')) {
        renderItems();
    }

    const modal = document.getElementById('itemModal');
    const btnClose = document.getElementById('btnCloseItem');

    if (modal && btnClose) {
        btnClose.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (event) => { if (event.target == modal) modal.style.display = 'none'; });
    }
});