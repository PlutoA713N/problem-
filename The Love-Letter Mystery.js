function theLoveLetterMystery(s){
    var len = Math.floor(s.length/2);
    var result = 0;
    for(let i=0;i<len;i++){
      var diff = (s.charCodeAt(s.length-(i+1)) - s.charCodeAt(i));
     //console.log(s.charCodeAt(s.length-(i+1)) - s.charCodeAt(i));
     result += Math.abs(diff);
    //console.log(diff,result)
    }
   return (result);
}
//theLoveLetterMystery('lmnop')
//theLoveLetterMystery('adslkfjas')
theLoveLetterMystery('bafhaef')
theLoveLetterMystery('ofrhase')
//theLoveLetterMystery('abc')
//theLoveLetterMystery('abcba')
//theLoveLetterMystery('abcd')
//theLoveLetterMystery('cba')
//theLoveLetterMystery('cde')

//Have to check other coders solutions 
