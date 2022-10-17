//failed 3 cases
function happyladyBugs(b){
    let str = b.split("").filter((v)=> v !== '_').reduce((a,b)=>{
        a[b] = ++a[b] || 1;
        return a;
    },{})
    let uscore = b.split("").filter((v)=> v == '_').length
   if(uscore == 0) return 'NO'
    let val = Object.values(str).some((v)=> v == 1)
    return val == true ? 'NO' : 'YES';
   // console.log(str,val,uscore)
    
}
happyladyBugs('X_Y__X')

//Other coders
function happyLadybugs(b) {
    const m = {}
    const a = b.split('')
    const f = a.filter(e => e !== '_')
 
    const unique = (a) => {
        const x = [null, ...a, null]
        for (let i = 1; i < x.length - 1; i++)
            if (x[i] !== null && x[i] !== x[i-1] && x[i] !== x[i+1]) return true
        return false
    }
    f.forEach(e => m[e] = (m[e] || 0) + 1)
    if (a.length === f.length) return unique(f) ? 'NO' : 'YES'
    return Object.values(m).filter(e => e === 1).length ? 'NO' : 'YES'
}


function happyLadybugs(b) {
    return (b.includes('_') ? b.split('').sort() : b.split(''))
        .filter(c => c != '_')
        .every((c, i, a) => c == a[i + 1] || c == a[i - 1]) ? 'YES' : 'NO';
}

const map = new Map();
for (let i = 0; i < b.length; i++) {
    if (map.has(b[i])) {
        map.set(b[i], map.get(b[i]) + 1)
    }
    else {
        map.set(b[i], 1)
    }
}

for (const [key, value] of map) {
    if (key != '_' && value == 1) return 'NO'
}

if (!map.has('_')) {
    for (let i = 1; i < b.length - 1; i++) {
        if (b[i] != b[i - 1] && b[i] != b[i + 1])
            return 'NO'
    }
}

return 'YES'

let hash = {},
            underScore = false,
            unEqual = false;
        
        for(let i = 0; i < a.length; i++) {
            if(a[i] === '_') {
                underScore = true;
                continue;
            }
            
            if(!hash[a[i]]) hash[a[i]] = 0;
            hash[a[i]]++;
        }
        
        if(!underScore) {
            for(let i = 1; i < a.length - 1; i++) {
                if( a[i - 1] !== a[i] && 
                    a[i] !== a[i + 1]) return 'NO';
            }   
        }
    
        for(const [key, value] of Object.entries(hash)) {
            if(value === 1) return 'NO';
        }
        return 'YES';


