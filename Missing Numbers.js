let a = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14]
let b = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12]
a.forEach((v,i)=>{
    if(b.includes(v)){
        let ind = b.indexOf(v)
        b.splice(ind,1)
    }
})
let x = [...new Set(b)]
return x;

