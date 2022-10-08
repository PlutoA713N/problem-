//I failed to grasp certain odd n even conditions
function appendandDelete(s,t,k){
    let counter = 0;
    let max = Math.max(s.length,t.length)
    let min = Math.min(s.length,t.length)
    for(let i=0;i<s.length;i++){
        if(s[i] !== t[i]){
            break;
        }
            counter++;            
    }
    if((max == min && counter == max) || s == ''){
        return 'Yes';
    }else if(s.length > t.length && ((max - counter) > k)){
        return 'No';
    }
    let modify = (max - counter) + (min - counter) 
    console.log(max,min,counter,modify)
    return modify==k ? 'Yes' : 'No'
}
appendandDelete('hackerhappy','hackerrank',9)

//modified code
Here if k < modify it returns false for rest it's 'Yes'
function appendandDelete(s,t,k){
         let counter = 0;
    let max = Math.max(s.length,t.length)
    let min = Math.min(s.length,t.length)
    for(let i=0;i<s.length;i++){
        if(s[i] !== t[i]){
            break;
        }
            counter++;            
    }
    let modify = (max - counter) + (min - counter);
    if(k == modify || k >= s.length + t.length) return 'Yes';
    else if(k >= modify && k% 2 == modify %2 ) return 'Yes'
    else return 'No'
}
appendandDelete('hackerhappy','hackerrank',9)

      

function appendAndDelete(s, t, k) {
        // Write your code here
        let operation = 0, i = 0;
        for( ; i < Math.min(s.length, t.length); i++) {
            if(s.charAt(i) != t.charAt(i)) break;
        }
        
        operation = s.length - i + t.length - i;
        if(k == operation || k >= s.length + t.length) return 'Yes';
        else if(k >= operation && k % 2 == operation % 2) return 'Yes';
        else return 'No';
    } 
 
