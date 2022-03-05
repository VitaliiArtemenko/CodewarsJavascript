function addUsername(list) {
    for (let el of list) {
        el.username = el.firstName.toLowerCase() + el.lastName[0].toLowerCase() + (new Date().getFullYear() - el.age);
    }
    return list;
}

module.exports = addUsername;