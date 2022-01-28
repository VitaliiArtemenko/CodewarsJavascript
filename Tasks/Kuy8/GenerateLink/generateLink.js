function generateLink(user){
    return 'http://www.codewars.com/users/' + encodeURIComponent(user);
}

module.exports = generateLink;