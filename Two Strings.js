function twoStrings(s1,s2){
    let ar = s1.split("")
   let result = ar.some((v)=> s2.includes(v))
   return result== true? 'YES' : 'NO';
   
}
twoStrings ('hello','world')
twoStrings ('hi','world')
