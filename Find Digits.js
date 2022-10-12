function findDigits(n){
    let count = 0;
    let str = n.toString()
    for(let i=0;i<str.length;i++){
       if(n % str[i] == 0){
           count++
       } 
    }
    return count;
   // console.log(str,count)
}
findDigits(1012);
