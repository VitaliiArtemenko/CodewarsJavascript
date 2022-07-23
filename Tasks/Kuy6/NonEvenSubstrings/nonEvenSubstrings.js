function nonEvenSubstrings(s) {
    let nums = []

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (parseInt(s.slice(i, j)) % 2 === 1) {
                nums.push(s.slice(i, j))
            }
        }
    }
    return nums.length;
}

let str = '9163241925954926243'

console.log(nonEvenSubstrings(str))

// TODO: https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript
