function misereNim(s){
    let total = s.reduce((a,b)=> a^b)
    let totalStones = s.reduce((a,b)=>a+b)
    console.log(total)
    
}
misereNim([9,8,4,4,4,7]);

//Other coder solutions
function misereNim(s) {
    return ['First','Second'][s.some(v=>v!=1) ? +!s.reduce((a,v)=>a^v) : s.length%2]
}

function misereNim(pile) {
        // Write your code here
        let xor = pile[0], totalStones = pile[0];
        for(let i = 1; i < pile.length; i++) {
            totalStones += pile[i];
            xor = xor ^ pile[i];
        }
        
        if (totalStones == pile.length) {
            return totalStones % 2 == 0 ? 'First' : 'Second';
        }
        
        return xor ? 'First' : 'Second';
    } 
