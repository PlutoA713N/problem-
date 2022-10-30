function superDigit(n,k){
    console.log(n)
    if(n.length == 1) return n;
    n = n.repeat(k)
    n = Array.from(n,Number).reduce((a,b)=> a+b).toString()
    //console.log(n)
    superDigit(n,1)
}
superDigit('123',3)

function superDigit(n, k) {
    if (n < 10) {
        return n;
    }

    return superDigit(
        n
        .toString()
        .split('')
        .reduce((sum, num) => sum + (num | 0), 0) * k,
        1);
}
