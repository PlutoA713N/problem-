function maximumToys(prices,k){
  let x = prices.sort((a,b)=> a-b)
    .reduce((a,b)=>{
        let max = 0,count = 0;
        if(max < k){
        max += a + b;
        console.log(max)
        count++
        if(max >= k) break;
        }
        return max;
    },0)
    console.log(x)
}
maximumToys([1,12,5,111,200,1000,10],50);


function maximumToys(prices,k){
    prices.sort((a,b)=> a-b)
    let sum = 0,i = 0;
    while(sum <= k){
        sum += prices[i]
        if(sum > k) break;
        i++;
        console.log(sum,prices,i)
        
    }
    return i;
}
maximumToys([1,12,5,111,200,1000,10],50);
