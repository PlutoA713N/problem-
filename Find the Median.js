function findMedian(arr) {
    // Write your code here
    arr.sort((a,b)=> a-b)
    let len = Math.floor(arr.length/2)
    return arr[len];
   
}
