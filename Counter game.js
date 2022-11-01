
//Same logic but one only correct path to goal...I cracked logic but path is filled with stones and round n round,not sure about the path
function counterGame(n){
   let v = Math.log2(n),c = 0;
    if(n == 1){
       return 'Richard'
    }
    while(n >= 0){
        v = Math.log2(n)
        if(v !== (v|0)){
            n = 2 ** (v|0)
            c++
        }else{
            n = n/2;
            c++
        }
         if(n == 1){
            console.log(c)
            break;
        }
    }
    return c % 2 ? 'Richard' : 'Louise'
   
}
counterGame(132)


function counterGame(n) {
    let move = 0;
    while(n > 1) {
        let power = parseInt(Math.log2(n));
        let max = 2**power;
        if(n === max) {
            n  = parseInt(n/2);
        } else {
            n = n - max;
        }
        move++;
    }
    if(move %2 === 0) {
        return 'Richard';
    } else {
        return 'Louise';
    }
}

console.log(counterGame(6));
console.log(counterGame(8));


function counterGame(n) {
  const exp = i => 2**(~-i.toString(2).length);
  const next = i => i === exp(i) ? i/2 : i - exp(i);
  let value = n;
  let turns = 0;

  while (value > 1) {
    turns++;
    value = next(value);
  }
  
  return ['Richard', 'Louise'][turns%2]
}


function counterGame(n) {
    // Bit operations solution
    
    const isPowerOfTwo = (x) => !(x&(x-1n))
    
    const bin = (x) => x.toString(2).padStart(64, '0')
    
    const unsetLeftMostBit = (x) => {
        console.log('x     = ', bin(x))
        let mask = BigInt(x)
        mask |= mask >> 1n
        mask |= mask >> 2n
        mask |= mask >> 4n
        mask |= mask >> 8n
        mask |= mask >> 16n
        mask |= mask >> 32n
        mask = mask >> 1n
        console.log('mask>>= ', bin(mask))
        let ret = BigInt(x & mask)
        console.log('masked= ', bin(ret))
        
        return ret
    }
    
    let players = ['Louise', 'Richard']
    let p = 1
    
    let bigN = BigInt(n)
    
    while (bigN != 1n) {
        p = +!p
        console.log('n = ', bigN)
        if (isPowerOfTwo(bigN)) {
            console.log(bigN, ' is power of two')
            bigN = bigN >> 1n
        }
        else { // set left-most 1 bit to zero
            console.log(bigN, ' is NOT power of two')
            bigN = unsetLeftMostBit(bigN)
        }
    }
        
    return players[p]
}


string counterGame(long n) {
    int a = __builtin_popcountll(n)&1;
    int b =  log2(n&-n)&1;
    string winner = (a^b)?"Richard":"Louise";
    return winner;
}
The problem can be solved in O(1) time. We need to calculate 2 things first.
1. Number of 1's in binary representation of n
   This can be calculated using __builtin_popcountll(n)

2. Number of 0's after the rightmost 1 in binary representation of n.
   This can be calculated using log2(n&-n)


Now we can check whether the values obtained above are even or odd:
int a = __builtin_popcountll(n)&1;
int b = (log2(n&-n))&1;
Finally xor of a and b will give us the desired output.
string winner = (a^b)?"Richard":"Louise";
