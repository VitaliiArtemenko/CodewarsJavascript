function zombieShootout(zombies, range, ammo) {
    console.log(zombies, range, ammo);

    if (range * 2 < zombies) {
        if (ammo < range * 2) {
            return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
        } else {
            return `You shot ${range * 2} zombies before being eaten: overwhelmed.`;
        }

    } else if (ammo < zombies) {
        return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    } else  return `You shot all ${zombies} zombies.`;
}

module.exports = zombieShootout;