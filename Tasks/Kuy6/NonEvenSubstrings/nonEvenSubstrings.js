function nonEvenSubstrings(s){
    let nums = s.split('').map(el => parseInt(el)).filter(el => el % 2 === 1);


    for (let i = 0; i < s.length - 1; i++) {
        for (let j = 1; j < s.length; j++) {
            console.log(s[i] + s[j])
        }
    }

    return nums
}

console.log(nonEvenSubstrings('1341'))

// TODO https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript