function maximizingXor(l,r){
    let max = 0
    for(let i=l;i<=r;i++){
        for(let j=i+1;j<=r;j++){
           let sum = i ^ j;
           if(sum > max){
               max = sum;
           }
            //console.log(max)
        }
    }
    return max;
}
maximizingXor(11,100)

Other cider

function maximizingXor(l, r) {
    return (1 << (0|Math.log2(l^r)+1))-1
}
