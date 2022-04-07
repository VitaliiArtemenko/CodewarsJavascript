function inArray(array1, array2){
    let r = [];
    for (let el2 of array2) {
       for (let el1 of array1) {
           if (el2.includes(el1)) {
               r.push(el1);
           }
       }
    }
    return r.filter((el, i) => i === r.indexOf(el)).sort();
}

module.exports = inArray;