let inp = [4,5,7,5]
let a = (inp.reduce((a,b)=> a ^ b)),b = [] // 2
for(let i=0;i<inp.length-1;i++){
     b.push(inp[i] ^ inp[i+1])
     //console.log(b)
}
let res = ([].concat(inp,b,a))
inp.length % 2 ? res.reduce((a,b)=> a ^ b)) : 0

function sansaXor(arr) {
    return (arr.length % 2) ? arr.filter((v, i) => !(i % 2)).reduce((acc, v) => acc ^ v, 0) : 0
}


