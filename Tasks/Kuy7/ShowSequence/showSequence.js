const SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        if (count === 0) return "0=0";
        if (count < 0) return `${count}<0`;
        let output = "";
        let sum = 0;

        for (let i = 0; i <= count; i++) {
            output += i + '+';
            sum += i;
        }
        return `${output.slice(0, output.length - 1)} = ${sum}`;
    }
    return SequenceSum;
})();

module.exports = { SequenceSum }