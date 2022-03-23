function aliasGen(fName, sName){
    let firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data', F: 'Function',L: 'Logic', M: 'Malware'};
    let surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst', M: 'Mike', T: 'T-Rex', P: 'Payload'};

    if(!isNaN(fName[0]) || !isNaN(sName[0])) return "Your name must start with a letter from A - Z.";

    return  `${firstName[fName[0].toUpperCase()]} ${surname[sName[0].toUpperCase()]}`;
}

module.exports = aliasGen;