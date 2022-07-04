class Fighter {

    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
    }
}
const Lew = new Fighter("Lew", 10, 2);
const Harry = new Fighter("Harry", 5, 4);
const Harald = new Fighter("Harald", 20, 5);
const Jerry = new Fighter("Jerry", 30, 3);


module.exports = { Lew, Harry, Harald, Jerry };