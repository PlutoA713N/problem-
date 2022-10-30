//second attempt succeed ✓✓✓ due to small bug :?
//4 mistakes

function gridSearch(G, P) {
 let grid_l = G.length,ar=[],ar2=[]
let col = P.length,col_s = P[0]. length;
for(let i=0;i<grid_l;i++){
    let v = G[i].search(P[0])
      if(v !== -1){
        ar.push(i,v)
    }
}
for(let j=ar[0],r=0;j<ar[0]+col;j++){
    ar2.push(G[j].split('').slice(ar[1],ar[1]+col_s).join(''))
}
  console.log(ar2,P)
return ar2.every((v)=> P.includes(v)) ? 'YES' : 'NO'
}


/*
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */

function gridSearch(G: string[], P: string[]): string {
  // Write your code here

  for (let i = 0, itotal = G.length - P.length; i <= itotal; i++) {
    let indexes = [];

    for (let k = 0, ktotal = G[i].length - P[0].length; k <= ktotal; k++) {
      if (G[i].slice(k, k + P[0].length) == P[0]) {
        indexes.push(k);
      }
    }

    if (indexes.length > 0) {
      for (const index of indexes) {
        for (let j = i + 1, jtotal = P.length + i; j < jtotal; j++) {
          if (G[j].slice(index, index + P[j - i].length) != P[j - i]) {
            break;
          }
          if (j - i + 1 == P.length) {
            return 'YES';
          }
        }
      }
    }
  }

  return 'NO';
}
