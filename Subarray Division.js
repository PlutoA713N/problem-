function birthday(s, d, m) {
    // Write your code here
  
  var z= 0;
for (let i=0;i<s.length;i++){
    let x = s.slice(i,i+m).reduce((x,y)=> x+y)
    if(x == d) z++
    //console.log(j)
}
  return z;
}
