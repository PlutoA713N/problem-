let n = 5,s = ' ',v=0,x = '#'
for(let i=1;i<=n;i++){
    v = s.repeat(n-i)+ x.repeat(i)
    console.log(v)
}
