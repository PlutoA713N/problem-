https://www.hackerrank.com/contests/mountblue-technologies/challenges/beautiful-days-at-the-movies
#My hardworking code took a lot of time, but result is sweet.
function beautifulDays(i,j,k){
    let ar1 = [], ar2 , output, counter = 0;
    for(let x=i;x<=j;x++){
        ar1.push(x)
    }
    ar2 = ar1.map((x) => x.toString().split("").reverse().join(""));
    for(let c=0;c<ar1.length;c++){
        output = Math.abs(ar1[c] - ar2[c]);
       if(output % k == 0){
           counter++;
       }
    }
    console.log(ar1,ar2,output, counter);
    return counter;
}
beautifulDays(20,23,6);


//ANOTHER programmer solution, she simplified the lines
function beautifulDays(i, j, k) {
let count=0

for(let x=i;x<=j;x++)
{
   let y=x.toString().split('').reverse().join('');
    let sol =Math.abs((x-y)/k)
    if(Number.isInteger(sol))
    {
      count+=1
    }
}
return count
}
