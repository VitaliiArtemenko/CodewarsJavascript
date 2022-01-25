function multipleOfIndex(array) {
   return array.filter((el, index) => el % index === 0);
}

module.exports = multipleOfIndex;