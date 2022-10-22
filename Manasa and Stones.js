function add(el, arr) {
    const loc = findLoc(el, arr)
    if (loc === -1) {
    } else {
        arr.splice(loc, 0, el);
    }
    return arr;
}

function findLoc(el, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > el) return i
        if (arr[i] === el) return -1
    }
    return arr.length;
}

function stones(n, a, b) {
    let r = []
    for (let i = 0; i < n; i++){
        const value = a * (n - 1 - i) + b * i
        r = add(value, r)
    }
    return r
}



function stones(n, a, b) {
  // Write your code here
  let x = new Array(n)
    .fill(0)
    .map((item, index) => a * (n - index - 1) + b * index)
    .sort((a, b) => a - b)
    .reduce((target, item) => {
      !target.includes(item) && target.push(item);
      return target;
    }, []);
    console.log(x)
}
stones(4,10,100)
