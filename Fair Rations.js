//6 timedout 1wrong ... facing errors to return 'No'
function fairRations(B){
    let val = 0;
    let odds = B.filter((val)=> val%2!==0).length
     if(odd <= 1) return 'NO';
    for(let i=0;i<B.length;i++){
        while(B[i] % 2 !== 0){
            B[i] += 1;
            B[i+1] += 1;
            val++
           // console.log(B)
        }
    }
    return val*2;
}
fairRations([2,3,4,5,6]);
fairRations([1,2])

Other codes
function findThere(i,B) {
    // console.log(i,B)
    while(i > 0){
        i--
        if(B%2!==0){
            return true
        }
    }
}
function fairRations(B) {
    let count=0;
for(let i=B.length-1;i>=0;i--){
    let currentElement=B[i];
    if(currentElement%2===0){
        continue;
    }
    else{
        let val=findThere(i,B);
        if(val){
            B[i]++;
            B[i-1]++;
            count=count+2
        }        
    }
}
if(B[0]%2!==0){
    console.log("NO")
    return "NO"
}
 console.log(count)

return count
}

// Complete the fairRations function below.
function fairRations(B) {
  let count = new Array(B.length - 1).fill(0).reduce((target, item, index) => {
    !!(B[index] % 2) && (B[index + 1]++, (target += 2));

    return target;
  }, 0);

  return !(B[B.length - 1] % 2) ? count : "NO";
}

function fairRations(a) {
        // Write your code here
        let temp = a, loaves = 0, i;
        for(i = 0; i < temp.length - 1; i++) {
            if(temp[i] % 2 != 0) {
                temp[i]++;
                temp[i + 1]++;
                loaves++;
            }
        }
        if(temp[i] % 2 === 0) return loaves * 2
        
        temp = []; 
        loaves = 0;
        i = 0;
        
        for(i = temp.length - 1; i > 0; i--) {
            if(temp[i] % 2 != 0) {
                temp[i]++;
                temp[i - 1]++;
            }
        }
        if(temp[i] % 2 === 0) return loaves * 2;        
        return 'NO';
    }
   
