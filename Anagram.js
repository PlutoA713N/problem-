//learnt replace ()
function anagram(s){
let a = s.slice(0,s.length/2)
    let b = s.slice(s.length/2)
    let count = 0;
    for(let i=0;i<s.length/2;i++){
          a.includes(b[i]) ? a = a.replace(b[i],"") : count++;
        }
   return s.length%2 == 0? count : -1
}
anagram('abccde');
anagram('xaxbbbxx');

    let a = s.slice(0,s.length/2)
    let b = s.slice(s.length/2)
    let count = 0;
    for(let i=0;i<s.length/2;i++){
       for(let j=0;j<s.length/2;j++){
        if(a[j] != b[i]){
          //console.log(i,j)
            count++
        }
      }
    }
    console.log(a,b,count)
 
