function makingAnagrams(s1,s2){
   let char = 'abcdefghikjklmnopqrstuvwxyz'
   let ar = s1.split('').map((v)=> char.indexOf(v))
   let ar2 = s2.split('').map((v)=>
       char.indexOf(v))
   let box = Array(char.length).fill(0)
   let box2 = Array(char.length).fill(0)
   let x = ar.reduce((a,b)=>{
       box[b] = ++box[b] || 1
       return a;
   },box)
   let y = ar2.reduce((a,b)=>{
       box2[b] = ++box2[b] || 1;
       return a;
   },box2)
   let sum = 0;
   for(let i=0;i<26;i++){
       sum += Math.abs(x[i] - y[i])
   }
   return sum;
}
makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj','djfladfhiawasdkjvalskufhafablsdkashlahdfa')
makingAnagrams('ccde','abc')

function makeAnagram(a, b) {
    let map = {}, aCount = 0, bCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (!map[a[i]]) {
            map[a[i]] = 1;
        } else {
            map[a[i]] += 1;
        }
    }
    

    for (let j = 0; j < b.length; j++) {
        if (map[b[j]]) {
            aCount += 1;
            map[b[j]] -= 1;
        } else {
            bCount += 1
        }
    }
 
    return ((a.length - aCount) + bCount);


function makeAnagram(s1, s2) {
    var a = s1, b = s2;
    a.split('').forEach(n => {
        // if an element of "a" is in "b" string, remove it from both strings
        if (b.includes(n)) {
            a = a.replace(n, '');
            b = b.replace(n, '');
        }
    });
    // all pairs from a and b are removed so return the length of remainder
    return a.length + b.length
}

