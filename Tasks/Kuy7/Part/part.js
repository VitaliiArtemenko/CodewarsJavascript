function part(x){
    const items = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa',  'Nomad'];

    return x.filter(el => items.includes(el)).length === 0 ? "Lynn, I've pierced my foot on a spike!!"
        : "Mine's a Pint" + '!'.repeat(x.filter(el => items.includes(el)).length);
}

module.exports = part;