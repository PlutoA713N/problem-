function countingSort(arr) {
    const c = Array(100).fill(0), res = []
    arr.forEach(e => c[e]++)
    c.forEach((e, i) => res.push(...Array(e).fill(i)))
    return res
}

function countingSort2(arr) {
    //let size = arr.length < 101 ? arr.length : 100
    let ans = new Array(100).fill(0)
    arr.map(x => ans[x]++)
    
    let sorted = []
    
    for (let i = 0; i < ans.length; i++){
        while(ans[i] > 0 && ans[i] != 0){
            sorted.push(i)
            ans[i]--
        }
    }
    return sorted
}
