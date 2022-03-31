function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    let result = '';
    let years = Math.floor(seconds / 31536000);
    let days = Math.floor(((seconds % 31536000)) / 86400);
    let hours = Math.floor((seconds % (3600 * 24)) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let restSeconds = Math.floor(seconds % 60);

    let arr = [['years', years], ['days', days], ['hours', hours], ['minutes', minutes],
    ['seconds', restSeconds]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] !== 0) {
            if (arr[i][1] === 1) {
                result += arr[i][1] + ' ' + arr[i][0].slice(0, -1) + ', ';
            } else result += arr[i][1] + ' ' + arr[i][0] + ', ';
        }
    }
    return result.slice(0, -2).replace(/,([^,]*)$/, ' and$1');
}

module.exports = formatDuration;