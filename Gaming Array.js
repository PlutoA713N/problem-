function gamingArray(arr) {
    // Write your code here
while(arr.length > 0){
let max = arr.indexOf(Math.max(...arr)),i=0;
arr.splice(max)
i++;
}
return i % 2 ? 'BOB' : 'ANDY';
}

function gamingArray(arr) {
    let max = 0;
    return arr.filter(a=>a>max?max=a:null).length%2 ? "BOB" : "ANDY";
}

function gamingArray(arr) {
    // Notes
    /*
    1) Since bob always goes first, he will be the winner if the number of turns played is odd
    2) The winner will be the one who takes the left-most element (or the only remaining element), therefore, we must look at the array from left to right.
    3) So we'll want to 
        Loop through the array
        Find the max element in the array
        When you find a new max, increment the numnber of rounds played
    */
    let totalRounds = 0
    let max = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
            totalRounds += 1
        }
    }
    return (totalRounds % 2 == 0) ? 'ANDY' : 'BOB'
}


function gamingArray(arr) {
    let m = 0
    return (arr.reduce((c,v) => v>m ? (m=v, c+1) : c, 0)) % 2 ? 'BOB' : 'ANDY'
}


