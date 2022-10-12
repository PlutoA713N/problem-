//few cases time out
function sumXor(n){
    let count = 0;
    for(let i=0;i<=n;i++){
        if(n+i == (n ^ i)){
            count++
        }
    }
    console.log(count)
}
sumXor(5);

return 2 ** (n ? [...(n.toString(2))].filter(_ => _ == '0').length : 0)
