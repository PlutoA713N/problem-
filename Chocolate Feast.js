function chocolateFeast(n,c,m){
  let each = Math.floor(n/c);
  let total = Math.floor(each/m);
  let candys = (total / m) + (each % m)
  let sum = each+total+candys
  return(
  each==candys? each++ : sum)
}

//This code failed again when I used. Math.round for var chocolates 
//For maths operations it's better to use while loops
function chocolateFeast(n, c, m) {
    let counter = 0;
    let chocolates = Math.floor(n/c);
    while(true){
        let total = chocolates + (counter % m)
        counter += chocolates;
        if(total < m) break;
        chocolates = Math.floor(total/m)
        console.log(total,counter, chocolates)
    }
    return (counter)
}
//chocolateFeast(12,4,4);
chocolateFeast(15,3,2);
