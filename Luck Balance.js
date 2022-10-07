//my code not an efficient one I failed to solve at the end ...lets check other programmer codes
function luckBalance(n,k,contests){
    let luckbal = 0,total = [],ar = [],ar2 = [],counter = 0, diff = 0;
    let flat = [].concat(...contests)
    for(let i=0;i<flat.length;i+=2){
        ar.push(flat[i])
        //total += flat[i];
      //  console.log(ar)
        ar2.push(flat[i+1])
        //console.log(flat[i],i,ar)
    }
    ar2.forEach((a,ind)=>{
        if(a==1){
            total.push(ar[ind])
            counter++;
            //console.log(total)
        }
    })
    total.sort();
    if(k < counter){
      diff = Math.abs(counter - k);
      var slice = total.slice(diff);
      luckbal += slice.reduce((a,b)=> a+b);
      var ardiff = total.filter((x)=> slice.indexOf(x) == -1)
      ardiff.concat(ar.filter((x)=> total.indexOf(x) == -1))
    }else{
        console.log(total);
    }
   console.log(total,slice,luckbal,ar,ardiff)
   //console.log(output,total,slice,diff,luckbal,flat,ar,ar2,total)
}
luckBalance(6, 3 ,[[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])

function luckBalance(k, contests) {
    let important = contests.filter(ar => ar[1] === 1).length;
    let sumAll = contests.reduce((a, b) => a+b[0],0);
    let sorted = contests.sort((a, b) => a[0] - b[0])
    let win = important-k >=0 ?important-k : 0 
    let min = 0
    for(let i=0;  i<sorted.length; i++){
        if(win === 0) break;
        if(sorted[i][1] === 0)continue;
        min += sorted[i][0];
        win--
    }
    return sumAll - (2*min);
}
