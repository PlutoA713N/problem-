
//Unable to solve the Onelast line
function insertionSort1(n,arr){
    let base = arr[n-1] 
    for(let i=n-2;i>=0;i--){
        if(base < arr[i]){
            arr[i+1] = arr[i]
            console.log(arr.join(' '),i)
        }
        if(base > arr[i]){
            arr[i+1] = base;
        
        console.log(arr.join(" "),i)
        }
    }
}
insertionSort1(5,[1,2,4,5,3])
insertionSort1(5,[2,4,6,8,3])

//Updated sol failed 1 case
let base = arr[n-1] 
    let i = n-1
    while(--i >= 0){
        if(arr[i] >= base){
            arr[i+1] = arr[i]
            console.log(arr.join(' '))
        } else {
            arr[i+1] = base;
            console.log(arr.join(' '))
            break;
        }
    }


function insertionSort1(n, arr) {
    let e = arr[n - 1]
    while (arr[--n - 1] > e) arr[n] = arr[n-1], console.log(...arr)
    arr[n] = e, console.log(...arr)
}

