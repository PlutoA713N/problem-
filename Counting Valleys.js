let x = 0,count = 0
s.split("").forEach((v)=>{
    if(v == 'D' && x == 0)count++
    v == 'U' ? x++ : x--
    return count;
})
