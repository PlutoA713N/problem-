//Time0ut
t = 17
let s=1,d=3,v=d
while(true){
    if(d == 0){
        d = v * 2
        v = d
    }
  if(s == t) return d;
  s++
  d--
}


//Large values are considers as small modules....to simplify cal. Herefor a particular cycle the total decrment time - remaining time + 1 is pattern n sol
let rem = 3,t=50,i=0
while (t > rem){
    i++
    t = t-rem
    rem *= 2
    //console.log(t,rem,i)
}
return (rem-t+1);
