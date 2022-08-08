function countingArrayElements(array) {
    let elements = {}

    array.forEach((el => {elements[el] = (elements[el] || 0) + 1}))

    return elements
}

module.exports = countingArrayElements;