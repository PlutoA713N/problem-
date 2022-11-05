const BigNumber = require('bignumber.js')

function separateNumbers (s) {
    if (s[0] === '0' || s.length < 2) return console.log('NO')

    for (let i = 1, l = Math.floor(s.length / 2); i <= l; i++) {
        if (s[i] === '0') continue
        let x = new BigNumber(s.slice(0, i))
        let bs = ''
        while (bs.length < s.length) {
            bs += x.toString()
            x = new BigNumber(x).plus(1)
        }
        if (bs === s) return console.log(`YES ${s.slice(0, i)}`)
    }

    return console.log('NO')
}

//Use BigInt for this
function separateNumbers(s) {
var beautiful = true;
for (let len = 1; len < s.length; len++) { 
    var first = s.substr(0, len);
    var num = s.substr(0, len);
    if (s.length <= len) {
        continue;
    }
    var sNew = ''.concat(first.toString());
    while (sNew.length < s.length) {
        num++;
        sNew = sNew.concat(num.toString());
    }
    if (sNew === s) {
        console.log('YES ' + first);
        beautiful = false;
        continue;
    }
}
if (beautiful) {
    console.log('NO')
}
