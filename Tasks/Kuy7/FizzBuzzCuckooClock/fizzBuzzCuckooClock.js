function fizzBuzzCuckooClock(time) {
    const nums = time.split(':').map(Number);

    if(nums[1] === 0) {
        if(nums[0] === 0 ) return 'Cuckoo '.repeat(12).trim();
        if (nums[0] > 12) {
            return 'Cuckoo '.repeat(nums[0] - 12).trim();
        } else return 'Cuckoo '.repeat(nums[0]).trim();
    }

    if(nums[1] === 30) return 'Cuckoo';

    if(nums[1] % 3 === 0 && nums[1] % 5 === 0) return 'Fizz Buzz';

    if(nums[1] % 3 === 0) return 'Fizz';

    if(nums[1] % 5 === 0) {
        return 'Buzz';
    } else return 'tick';
}

module.exports = fizzBuzzCuckooClock;
