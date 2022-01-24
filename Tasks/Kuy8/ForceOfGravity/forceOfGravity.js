forceOfGravity = (arr_val, arr_unit) => {
    const G = 6.67e-11;
    let mass = { kg: 1, g: 1 / 1000, mg: 1 / 1_000_000, μg: 1 / 1_000_000_000, lb: 0.453592, };
    let distance = { m: 1, cm: 1 / 100, mm: 1 / 1000, μm: 1 / 1_000_000, ft: 0.3048, };

    return G * (mass[arr_unit[0]] * arr_val[0]) * (mass[arr_unit[1]] * arr_val[1])
        / Math.pow(distance[arr_unit[2]] * arr_val[2], 2);
};

module.exports = forceOfGravity;