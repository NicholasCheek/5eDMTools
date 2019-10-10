var dwarfMale = [
    "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"
];

var dwarfFemale = [
    "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"
];

var dwarfClan = [
    " Balderk", " Battlehammer", " Brawnanvil", " Dankil", " Fireforge", " Frostbeard", " Gorunn", " Holderhek", " Ironfist", " Loderr", " Lutgehr", " Rumnaheim", " Strakeln", " Torunn", " Ungart"
];

var elfMale = [
    "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"
];

var elfFemale = [
    "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirasta", "Thia", "Vadania", "Valanthe", "Xanaphia"
];

var elfFamily = [
    " Amakiir", " Amastacia", " Galanodel", " Holimion", " Ilphelkiir", " Liadon", " Meliamne", " Na&iuml;lo", " Siannodel", " Xiloscient"
];

function getDwarfMaleName() {
    let x = Math.floor(Math.random() * dwarfMale.length);
    let y = Math.floor(Math.random() * dwarfClan.length);
    let dwarfMaleName = "";
    dwarfMaleName = dwarfMale[x] + dwarfClan[y];
    return dwarfMaleName;
};

function getDwarfFemaleName() {
    let x = Math.floor(Math.random() * dwarfFemale.length);
    let y = Math.floor(Math.random() * dwarfClan.length);
    let dwarfFemaleName = "";
    dwarfFemaleName = dwarfFemale[x] + dwarfClan[y];
    return dwarfFemaleName;
};

function getElfMaleName() {
    let x = Math.floor(Math.random() * elfMale.length);
    let y = Math.floor(Math.random() * elfFamily.length);
    let elfMaleName = "";
    elfMaleName = elfMale[x] + elfFamily[y];
    return elfMaleName;
};

function getElfFemaleName() {
    let x = Math.floor(Math.random() * elfFemale.length);
    let y = Math.floor(Math.random() * elfFamily.length);
    let elfFemaleName = "";
    elfFemaleName = elfFemale[x] + elfFamily[y];
    return elfFemaleName;
};