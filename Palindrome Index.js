//failed for last 4 cases out of 14
function palindromeIndex(s){
    let ar = s.split("")
    let len = s.length-1;
    let ar1 = [],ar2 = [];
    for(let i=0;i<s.length;i++){
        if(ar[i] !== ar[len-i]){
           ar1.push(s[i])
           ar2.push(ar[len-i])
           if(ar1[i] == ar[i+1]){            
              return len-i;
              break;
           }else{            
               return i;
               break;
           }          
           
    }
    }   
    return -1;
}
palindromeIndex('bcbc')
palindromeIndex('aaab')
palindromeIndex('baa');

//My another code
function palindromeIndex(s){
    let len = s.length/2;
    let ar = s.split("");
    let obj = {};
    for(let i=0;i<ar.length;i++){
        obj[ar[i]] = ++obj[ar[i]] || 1;
    }
    let val = Object.entries(obj).sort((a,b)=> a[1]-b[1])
    let char = val[0][0];
   // console.log(s.indexOf(char))
    if(char.length == s.length){
        return -1;
    }
    for(let i=0;i<val.length;i++){
        char = val[i][0];
       if(s.indexOf(char) !== len-1 ){
    return (char,s.lastIndexOf(char))
    }
    }
}
//palindromeIndex('aabaea')
//palindromeIndex('aaab')
//palindromeIndex('baa');
//palindromeIndex('abcddeeeffff')


//Others code
function palindromeIndex(s) {
    // Write your code here
    for(let i=0;i<=s.length/2;i++)
        if(s[i]!=s[s.length-i-1]){
            if(s[i+1]==s[s.length-i-1] && 
            (s.length-i-2<0 || s[i+2]==s[s.length-i-2]))
                return i;
            if(s[i]==s[s.length-i-2] && 
            (s.length-i-2<0 || s[i+1]==s[s.length-i-3]))
                return s.length-i-1;
        }
    return -1;


function palindromeIndex(s) {
    // Write your code here
  if (checkPalindrome(s)) {
    return -1;
  } else {
    for(let i = 0; i < Math.floor(s.length/2); i++) {
      console.log(s[i], s[s.length - 1 - i]);
      if (s[i] !== s[s.length - 1 - i]) {
        const strA = s.slice(0, i).concat(s.slice(i+1));
        const strB = s.slice(0, s.length - 1 - i).concat(s.slice(s.length - i));
        if (checkPalindrome(strA)) return i;
        if(checkPalindrome(strB)) return s.length - 1 - i;
      }
    }
  }
  
  return -1;
}

function checkPalindrome(str) {
  // console.log(str);
  return str === str.split('').reverse().join('');
}
0|

def palindromeIndex(s):
    n = len(s)
    s_rev = s[::-1]
    if s == s_rev:
        return -1
    for i in range(0, n):
        if s[0:i] + s[i+1::] == s_rev[0:n-i-1] + s_rev[n-i::]:
            return i
    return -1

//Python code converted into js. Passed all cases
function palindromeIndex(s){
   let n = s.length;
   let s_rev = s.split("").reverse().join("")
   if( s == s_rev){
       return -1;
   }
   console.log(s,s_rev)
   for(let i=0;i<=n;i++){
       if(s.slice(0,i)  + s.slice(i+1) == s_rev.slice(0,n-i-1) + s_rev.slice(n-i))
       return i;
   }
   return -1;
    }
palindromeIndex('aababa');
    
    
