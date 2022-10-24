//my code is correct facing some wrong errors on hacker rank, works perfectly on console
function closestNumber(arr){
    let ar = [],diff = []
    arr.sort((a,b)=> a>b)
    for(let i=0;i<arr.length-1;i++){
        diff.push(Math.abs(arr[i]- arr[i+1]))
        //console.log(diff)
    }
    diff.sort((a,b)=> a-b)
    for(let i=0;i<arr.length-1;i++){
        let sum = Math.abs(arr[i]-arr[i+1])
        if(sum == diff[0]){
            ar.push(arr[i],arr[i+1])
            console.log(diff,ar)
        }
    }
}
closestNumber([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854])

function closestNumbers(arr) {
  // Write your code here
  let m = new Map();
  const sar = arr.sort((a, b) => a - b);
  for (let i = 0; i < sar.length - 1; i++) {
    const res = Math.abs(sar[i] - sar[i + 1]);
    if (m.size == 0) m.set(sar[i], sar[i + 1]);
    for (const [key, value] of m.entries()) {
      const min = Math.abs(key - value);
      if (res == min) m.set(sar[i], sar[i + 1]);
      if (res < min) {
        m.clear();
        m.set(sar[i], sar[i + 1]);
      }
    }
  }
  return [...m].flat();
}

function closestNumbers(arr: number[]): number[] {
    // Write your code here
    arr = arr.sort((a, b) => a - b);
    let results = new Map();
    let output: number[] = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        results.set(`${arr[i]}:${arr[i + 1]}`, arr[i + 1] - arr[i]);
    }
    
    var min = Math.min(...results.values());
    results.forEach((value, key) => {
        if (value === min) {
            output.push(...key.split(':'));
        }
    });
    
    return output;
}

// multi pass solution (1st attempt)
function _closestNumbers(arr) {
    const res = []
    arr.sort((a, b) => a - b)
    const shifted = arr.slice(1).concat([Infinity])
    const diffs = arr.map((v, i, a) => shifted[i] - v)
    const min = Math.min(...diffs)
    arr.forEach((v, i, a) => {if (diffs[i] === min) res.push(v, shifted[i])})
    return res
}

// 1 pass solution (2nd attempt)
function closestNumbers(arr) {
    let pairs = [], m = Infinity
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
        let d = arr[i+1] - arr[i]
        if (d < m) pairs = [], m = d
        if (d <= m) pairs.push(arr[i], arr[i+1])
    }
    return pairs
}

function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    const mapped = arr.map((v, i) => {
        let obj = {};
        obj.values = [v, arr[i + 1]];
        obj.dif = Math.abs(v - arr[i + 1]);
        return obj;
    });
    return mapped.sort((a, b) => a.dif - b.dif)
        .filter((v) => v.dif == mapped[0].dif)
        .map((v1) => v1.values)
        .flat();
}

function closestNumbers(arr) {

  arr.sort(function(a, b) { return a - b });
  let n = arr.length;
  let min = arr[1] - arr[0];
  let output = [];

  for (let i = 2; i < n; i++) {
    diff = (Math.abs(arr[i + 1] - arr[i]));
    if (diff < min) {
      min = diff;
      output = [arr[i], arr[i + 1]];
    } else if (diff == min) {
      output.push(arr[i], arr[i + 1]);
    }
  }
  return output;
}

