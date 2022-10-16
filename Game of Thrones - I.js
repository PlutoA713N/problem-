function gameOfThrones(s){
    let ar = s.split("")
    let obj = ar.reduce((a,b)=>{
        a[b] = ++a[b] || 1
        return a;
    },{})
    let val = Object.values(obj)
    let ans = val.filter((v)=> v%2 !== 0)
    return ans.length <= 1 ? 'YES' : 'NO';
    console.log(obj,val,ans)
}
gameOfThrones('cdcdcdcdeeeef')

//By other coder
function gameOfThrones(s) {
    let freq = {};
    
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    let firstOdd = s.length % 2 !== 0;
    for (let num of Object.keys(freq)) {
        if (freq[num] % 2 !== 0) {
            if (firstOdd) firstOdd = false;
            else return "NO";
        }
    }
    return "YES";
}


function gameOfThrones(s) {
    
    let str = s.split(''), chars = [... new Set(str)];
    
    return chars.map(a => str.filter(b => a == b).length % 2).filter(x => x == 1).length > 1 ? "NO" : "YES";
    
}


    let oddCount = 0;

    for(let i = s.length-1; i >= 0; i--){
        if(s.lastIndexOf(s.charAt(i)) === i){
            let j = s.indexOf(s.charAt(i));
            let k = 1;

            while(j !== i){
                j = s.indexOf(s.charAt(i), j+1)
                k++;
            }
            if(k%2 !== 0) {
                oddCount++;
                
                if(oddCount === 2) { return `NO`; }
            }
        }
    }
    return `YES`;

function gameOfThrones(s) {
        // Write your code here
        let c = 0, count = {};
        for(let i = 0; i < s.length; i++) {
            if(!count[s[i]]) count[s[i]] = 0;
            count[s[i]]++; 
        }
        
        for(let value of Object.values(count)) {
            if(value & 1) c++;
        }
        
        return c > 1 ? 'NO' : 'YES';
    }
 
 
 
