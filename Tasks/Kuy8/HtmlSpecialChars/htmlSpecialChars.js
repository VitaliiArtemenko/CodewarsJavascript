function htmlSpecialChars(formData){
    return formData.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

module.exports = htmlSpecialChars;