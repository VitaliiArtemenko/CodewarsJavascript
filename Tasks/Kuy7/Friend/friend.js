function friend(friends){
    return friends.filter(el => el.length === 4);
}

module.exports = friend;