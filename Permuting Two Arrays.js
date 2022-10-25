function twoArrays(k,a, b) {
    // Write your code here
a.sort((a,b)=> b-a)
    b.sort((a,b)=> a-b)
    let x = a.some((v,i)=> v + b[i] < k)
    return x ? 'NO' : 'YES'
}

//my failed codes

function twoArrays(k,a,b){
    let i=0,x=0;
    while(i < a.length){
        if((a[i] + b[i]) >= k){
            x++;
        }
        i++
    }
    return x === a.length ? 'YES' : 'NO'
}
twoArrays(10,[7, 6, 8, 4, 2],[5,2,6,3,1])

//Time out in test cases
function twoArrays(k,a,b){
let i=0,j=0,x=0;
    while(i <= a.length){
        if((a[i] + b[j]) >= k){
            i++, x++;        
            }
           j++
    }
return x == a.length ? 'YES' : 'NO'
}
//twoArrays(10,[7, 6, 8, 4, 2],[5,2,6,3,1])
twoArrays(10,[2,1,3],[7,8,9])

function twoArrays(k,a,b){
    let x = 0
    let len = a.length + b.length
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i] + b[j] >= k){
            x++
            }
        }
    }
    return x.length == len ? 'YES' : 'NO'
}
twoArrays(10,[7, 6, 8, 4, 2],[5,2,6,3,1])
twoArrays(10,[2,1,3],[7,8,9])
twoArrays(10,[2,1,3],[7,8,9])
