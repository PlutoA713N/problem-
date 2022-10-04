function lonelyinteger(a){
    let obj = {};
    let ar = Array(a.length).fill(0)
    let b = a.forEach((x)=>{
        ar[x]++
    })
    let output = ar.filter((x)=> x > 0)
      console.log(Math.min(...output), output,ar)
}
lonelyinteger([1, 1, 2])

function lonelyinteger(a){
    let obj = {};
    let ar = Array(a.length).fill(0)
    let b = a.forEach((x)=>{
        ar[x]++
    })
     if(ar.includes(0) && Math.min(...ar) == 0){
         console.log(ar.indexOf(Math.min(...ar) +1))
     }else{
      console.log(ar.indexOf(Math.min(...ar)))
     }
}
lonelyinteger([1, 1, 2])

function lonelyinteger(a){
    let output = 0;
    a.sort();
    if(a.length == 1) return a;
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i] !== a[j] && a[j] > output){
                output = (a[j])
               // console.log(output)
            }
        }
    }
    console.log(output)
    return output;
}
lonelyinteger([1, 1, 2])

//Other coders solution
function lonelyInteger(a) {
  let unique = a.filter(function(value){
      console.log(a.indexOf(value),a.lastIndexOf(value))
    return a.indexOf(value) === a.lastIndexOf(value)
  })
  
  return unique[0];
}
lonelyInteger([1,2,3,1,3])


