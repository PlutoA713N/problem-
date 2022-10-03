//below 2 codes are less optimal
function repeatedString(s,n){
 var len = n/s.length
   if(len == 1 && s.includes(a)) return n;
   let matchedlen = s.match(/a/g).length
   let result = Math.ceil(matchedlen * len);
   console.log(result)
   return result;     
}
repeatedString('aba',10);

function repeatedString(s,n){
    return s.length > 1 ? n % s.length !== 0 ? Math.round(((n/s.length) * s.match(/a/g).length)+1) : ((n/s.length) * s.match(/a/g)) : n;
}
repeatedString('abcac',10);

//Modified code 
//18.1 points in hackerrank 1 time out 1 cases failed
function repeatedString(s,n){
    let y = n%s.length,counter = 0;
    for(let i=0;i<y;i++){
        if(s[i].includes('a')){
        counter++
        }
    }
    if(s.length == 1 && s.includes('a')){
        return n;
    }
    return n % s.length !== 0 ? (Math.floor(n/s.length) * (s.match(/a/g).length)+counter) : ((n/s.length) * s.match(/a/g));
//console.log(Math.floor(n/s.length) * s.match(/a/g).length+counter)
}
repeatedString('aba',10);

//Other coder solution
function repeatedString(s, n) {
   let occurances = (s.split("a").length - 1);
   let max = Math.floor(n / s.length);
   let totalAs= occurances * max;
   totalAs += (s.slice(0, n % s.length).split("a").length - 1);
   return totalAs;
}
repeatedString('aba',10);
