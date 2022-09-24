#took me a time to understand this question , it's kinda long

function permutationEquation(p){
    let ar = [];
    for(let i=1;i<=p.length;i++){
        var store = p.indexOf(p.indexOf(i)+1);
        ar.push(store + 1);
    }
    //console.log(ar)
    return ar;
}
permutationEquation([5,2,1,3,4]);

