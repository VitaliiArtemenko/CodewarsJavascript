function timeConvert(num) {
    return num > 0 ? `${Math.trunc(num / 60).toString().padStart(2, "0")}:${(num % 60).toString().padStart(2, "0")}` : "00:00";
}

module.exports = timeConvert;