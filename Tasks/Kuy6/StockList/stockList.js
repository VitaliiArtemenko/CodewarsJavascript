function stockList(listOfArt, listOfCat){
    if(!listOfArt.length) return '';

    const categories = listOfCat.reduce((a, b) => (a[b] = 0, a), {});

    for (let el in categories) {
        for (let book of listOfArt) {
            if (el === book[0]) {
                categories[el] += +book.split(' ')[1];
            }
        }
    }
    return listOfCat.map(el => '(' + el + ' : ' + (categories[el]) + ')').join(' - ');
}

module.exports = stockList;