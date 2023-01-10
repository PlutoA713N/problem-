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


other codes



function gridSearch(G, P) {
let gl  = G.length;
let gw = G[0].length;
let pl = P.length;
let pw = P[0].length;

for(let i=0;i<=gl-pl;i++)
{
    for(let j=0;j<=gw-pw;j++)
    {
        if(G[i][j] == P[0][0])
        {
            let m = i,n=j;
            let flag =1;
            for(let a=0;a<pl;a++)
            {
                for(let b = 0;b<pw;b++)
                {
                    if(P[a][b] != G[m+a][n+b])
                    {
                        flag = 0;
                        break;
                    }
                }
                if(!flag)
                break;
            }
            if(flag)
            return "YES";
        }
    }
}
return "NO";
}


function findAllIndexes(s, p) {
    let k, indexes = {}, j;
    for(let i = 0; i < s.length; i++) {
        k = i, j = 0;
        while(k < s.length && s[k] === p[j]) {
            k++;
            j++;
        }

        if(j == p.length) indexes[k - p.length] = k - p.length; 
    }
    return indexes;
}

function gridSearch(G, P) {
    let index, indexes, j = 0;
    P = P.filter((item) => item != undefined);

    for(let i = 0; i < G.length - 1; i++) {
        indexes = findAllIndexes(G[i], P[j]);
        index = G[i + 1].indexOf(P[j + 1]);
        if(indexes[index] != undefined) {
            j++;
        } else j = 0;
        if(j + 1 == P.length) return 'YES';        
    }
    return 'NO';
}


function gridSearch(G, P) {
    return G.some((str, i) => {
        if(i > G.length - P.length) return false;
        for(let j = 0; j <= str.length - P[0].length; j++) {
            if(P.every((p_k, k) => {
                return G[i + k].slice(j, j + p_k.length) === p_k;
            })) return true;
        }
    }) ? 'YES' : 'NO';
}
