//object solutions are very cool :|
function beautifulTriplets(d, arr) {
        // Write your code here
        let hash = {}, count = 0;
        for(let i = 0; i < arr.length; i++) hash[arr[i]] = arr[i]; 
    
        for(let i = 0; i < arr.length; i++) {
            if(hash[arr[i] + d] && hash[arr[i] + 2 * d]) count++; 
        }
        return count;
    }



//My code is passed but it's taking too much time to complile not an optimal solution
  function beautifulTriplets(d,arr){
     let counter=0;
     for(let i=0;i<arr.length;i++){
         for(let j=1;j<arr.length;j++){
             for(let k=2;k<arr.length;k++){
                 if((arr[k]-arr[j] == d) && (arr[j]-arr[i] == d)){
                     counter++;
                 }
             }
         }
     }
     console.log(counter);
 }
 beautifulTriplets(3,[1, 6, 7, 7, 8, 10, 12, 13, 14, 19])

//Simple sol. By another coder
function beautifulTriplets(d, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const numb1 = arr[i] - d;
        const numb2 = numb1 - d;
        console.log(`arr[i] : ${arr[i]}, numb1 : ${numb1}, numb2 : ${numb2}`)
        if (arr.includes(numb1) && arr.includes(numb2)) {
            result += 1;
        }
    }
    console.log(result)
    return result;
}
//beautifulTriplets(3,[1, 6, 7, 7, 8, 10, 12, 13, 14, 19])

function beautifulTriplets(d, arr) {
  const arraySet = new Set(arr);
  const array = [...arr];

  return array.reduce((target, number) => {
    new Array(3).fill(0).reduce((innerTarget, item, index) => {
      let value = number + index * d;
      arraySet.has(value) && innerTarget++;
      return innerTarget;
    }, 0) === 3 && target++;

    return target;
  }, 0);
beautifulTriplets(3,[1, 2, 4, 5, 7, 8, 10])
