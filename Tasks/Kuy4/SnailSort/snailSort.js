function snailSort(array) {
    let result = [];

    while(array.length > 0) {
        result.push(...array.shift());
        for(let i=0; i<array.length; i++){
            result.push(array[i].pop())
        }
        result.push(...(array.pop() || []).reverse());
        for(let i=array.length-1; i>=0; i--){
            result.push(array[i].shift())
        }
    }
    return result;
}

module.exports = snailSort;