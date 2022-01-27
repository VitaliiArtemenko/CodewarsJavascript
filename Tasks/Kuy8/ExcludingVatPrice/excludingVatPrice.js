function excludingVatPrice(price){
    const VAT = 1.15;
    return price !== null ? parseFloat((price / VAT).toFixed(2)) : -1;
}

module.exports = excludingVatPrice;