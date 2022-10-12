function funnyString(s){
    let st = s.split("")
    let ar = [],store = [],store2 = []
    for(let i=0;i<s.length;i++){
        ar.push(s.charCodeAt(i))
        var ar2 = [...ar].reverse()
        }
        for(let i=0;i<s.length-1;i++){
        store.push(Math.abs(ar[i]- ar[i+1]))
        store2.push(Math.abs(ar2[i]- ar2[i+1]))
        }
        let x = store.every((x,ind)=> x == store2[ind])
        return x == true? "Funny" : "Not Funny";
}
funnyString('acxz');
