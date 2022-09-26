//compared to for loops ,maths patterns is a simplified and fastest approach ,look at the last solution
function squares(a,b){
    for(let i=a,counter = 0;i<=b;i++){
        if(Number.isInteger(Math.sqrt(i))){
            counter++;
            return counter;
        }
    }
}
squares(3,9);

function squares(a,b){
    let counter = 0;
    for(let i=a;i<=b;i += 1){
        if(Math.sqrt(i) % 1 == 0){
        counter++;
        }
    }
    console.log(counter)
   // return (counter);
}
if(Math.sqrt(i) == Math.floor(Math.sqrt(i))){
        ar.push(Math.sqrt(i))
        counter = ar.filter((x) => x % 1 == 0)

function squares(a, b) {
    // Write your code here
    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}
function squares(a, b) {
    let down = Math.round(Math.sqrt(a));
    let up = Math.round(Math.sqrt(b));

    if(down*down < a) down++;
    if(up*up > b) up--;

    return (up-down)+1;
}
function squares(a,b){
    let countSq=0
    let counterF=a
    let counterL=b
    while(!(Number.isInteger(Math.sqrt(counterF)))){
        counterF++
    }
    while(!(Number.isInteger(Math.sqrt(counterL)))){
        counterL--
    }
    let first=Math.sqrt(counterF)
    let last =Math.sqrt(counterL)
    return last+1-first
}

function squares(a, b) {
    var lowerCeil = Math.ceil(Math.sqrt(a));
    var upperFloor = Math.floor(Math.sqrt(b))
    
    return upperFloor-lowerCeil+1;
}

//Beautiful simplified solution
function squares(a, b) {
  // Get smallest square root int in range
  const minInt = Math.ceil(Math.sqrt(a));
	
  // Get largest square root int in range
  const maxInt = Math.floor(Math.sqrt(b));
  
  return maxInt - minInt + 1;

}
