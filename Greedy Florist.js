let ar = [1,3,5,7,9],k = 3,c=0,j=0,i=0,sum = 0
ar.sort((a,b)=>b-a)
while(j < ar.length){
  sum += (i+1)*ar[j]
  c++
  if(c == k){
      c = 0;
      i++
  }
  j++;
  console.log(sum)
}

return c.sort((a, b) => b - a)
    .reduce((sum, v, i) => sum + (((i / k) | 0) + 1) * v, 0);

function getMinimumCost(k, c) {
    let cost = 0, prev = 1;
    c.sort((a, b) => b - a);
    
    for(let i = 0; i < c.length; i++) {
        cost += prev * c[i];
        if ((i + 1) % k == 0) {
            prev++;
        }
    }
    return cost;
}
