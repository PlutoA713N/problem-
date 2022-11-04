let arr = [1,2,3,4,5,6]
let x = 0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
       // console.log(i,j)
       let sum = arr[i]+arr[j]
       sum % k == 0 ? x++ : x
    }
}
return sum;


function divisibleSumPairs(n, k, ar) {
  return ar.reduce((count, num, idx) => {
    for(let j = idx + 1; j < n; j++) {
      if((num + ar[j]) % k === 0) count++
    }
    return count
  }, 0)
}



function divisibleSumPairs(n, k, ar) {
	let result = 0;
	for(let i = 0; i < n - 1; i++) {
  	result += ar.slice(i + 1, n).filter((item, index) => {
    	if ((item + ar[i]) % k === 0) {
    		return item;
      }
    }).length;
  }
  return result;
}
