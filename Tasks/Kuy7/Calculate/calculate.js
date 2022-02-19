function calculate(string) {
    let nums = string.match(/(\d[\d.]*)/g);
    return string.includes('loses') ? nums[0] - nums[1] : +nums[0] + +nums[1];
}

module.exports = calculate;