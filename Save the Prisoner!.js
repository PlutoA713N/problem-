Save the Prisoner!
https://www.hackerrank.com/contests/mountblue-technologies/challenges/save-the-prisoner/submissions/code/1349130134
function saveThePrisoner(n,m,s){
    let output = ((m + s - 1) % n);
    if(output <= 0){
        return n;
    }
    return output;
}
saveThePrisoner(3,7,3);
