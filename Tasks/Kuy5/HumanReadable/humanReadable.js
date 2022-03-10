function humanReadable(seconds) {
    let hours = Math.trunc(seconds / 3600).toString().padStart(2, '0');
    let minutes = Math.trunc(seconds % 3600 / 60).toString().padStart(2, '0');
    let resSeconds = Math.trunc(seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${resSeconds}`;
}

module.exports = humanReadable;