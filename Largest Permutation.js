function large(n,arr){
    let ar = arr,ind = 0,a = 0;
    for(let i=0;i<n;i++){
       ar = ar.slice(i)
       ind = arr.indexOf(Math.max(...ar))
       a = arr[i]
       arr[i] = arr[ind]
       arr[ind] = a;
       ar = arr;
    }
    return (arr)
}
large(1,[4,2,3,5,1])
large(1,[2,1])

function large(n,arr){
    let ar = arr,ind = 0,a = 0;i=0;
    while(i < n){
       ar = ar.slice(i)
       ind = arr.indexOf(Math.max(...ar))
       a = arr[i]
       arr[i] = arr[ind]
       arr[ind] = a;
       ar = arr;
       i++
    }
    console.log (arr)
}
large(1,[4,2,3,5,1])
large(1,[2,1])


function largestPermutation(k, arr) {
    let p = {}, n = arr.length, i = 0
    arr.forEach((v, i) => p[v] = i)
    while (i < n) {
        let max = n - i
        if (p[max]> i && k) {
            p[arr[i]] = p[max]
            const t = arr[p[n-i]]
            arr[p[n-i]] = arr[i]
            arr[i] = n-i
            k--
        }
        i++
    }
    return arr
}


function largestPermutation(k,arr,n) {
    for(var x = 0; n>0 && k>0 && x<arr.length; x++){
        if(k>n){
            arr.sort((a,b) => b-a)
            break
        }
        if(arr[x] < n){
            arr[arr.indexOf(n)] = arr[x]
            arr[x] = n
            k--
        }
        n--
    }
    return arr
}


function largestPermutation(k, a) {
    let pos = {}, n = a.length;
    for(let i = 0; i < n; i++) pos[a[i]] = i;
    
    for(let i = 0; i < n; i++) {
        if((a[i] != n - i) && k > 0) {
            pos[a[i]] = pos[n - i];
            let temp = a[pos[n - i]];
            a[pos[n - i]] = a[i];
            a[i] = n - i;
            k--;
        }
    }
    return a;
}Permutation
