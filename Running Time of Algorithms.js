
function runningTime(arr) {
  // Write your code here
  let count = 0;

  for (let i = 0, itotal = arr.length - 1; i < itotal; i++) {
    if (arr[i] > arr[i + 1]) {
      let value = arr[i];

      arr[i] = arr[i + 1];
      arr[i + 1] = value;
      count++;
      i = -1;
    }
  }

  return count;
}

function runningTime(a) {
    let c = 0
    for (let i=1; i < a.length; i++) {
        let t = a[i], j = i-1
        while(t < a[j++]) a[j--] = a[j--], c++
        a[j] = t
    }
    return c
}
