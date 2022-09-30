function beautifulBinaryString(b) {
    // Write your code here
//console.log(b.match(/010/g).length)
  
    let a = b.match(/010/g);
   return (a == null ? [0] : a.length);
    
}
