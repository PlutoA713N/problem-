function decentNumber (n) {

  var head,
      c = n/3, 
      newN = n-5;
    
  if(Number.isInteger(c)){
    return Array(n).fill(5);
  }
  
  for(var i = c; i > 0; i--){
          
     if(newN >= 0){
       
       head = decentNumber(newN);
       
       if(head){
         return head.concat(Array(5).fill(3));
       }
       
       break;
       
     }
  
  }
  
  return false;
   
}

function decentNumber(n) {
    let r = '-1', a = (3 - n%3)*5
    if (n >= 3) if (n%3 == 0) r = '5'.repeat(n)
    else if (n-a >= 0) r = '5'.repeat(n-a) + '3'.repeat(a)
    console.log(r)
}
