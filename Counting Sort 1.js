function countingSort(arr){
    let ar = Array(100).fill(0)
    return arr.reduce((a,b)=>{
        a[b] = ++a[b] || 1;
        return a;
    },ar)
}
countingSort([1,1,3,2,1])
countingSort([1,1,3,2,1])
