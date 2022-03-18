function rot13(message) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) > 64 && message.charCodeAt(i) < 123) {
            if (message.charCodeAt(i) > 109) {
                result += String.fromCharCode((message.charCodeAt(i) - 13));
            } else if (message.charCodeAt(i) < 91) {
                if (message.toLowerCase().charCodeAt(i) > 109) {
                    result += String.fromCharCode((message.toLowerCase().charCodeAt(i) - 13)).toUpperCase();
                } else result += String.fromCharCode((message.toLowerCase().charCodeAt(i) + 13)).toUpperCase();
            } else result += String.fromCharCode((message.charCodeAt(i) + 13));
        }
        else result += message[i];
    }
    return result;
}

module.exports = rot13;