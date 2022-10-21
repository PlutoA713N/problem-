
//Other coders
function insertionSort2(n, a) {
    for (let i=1; i < a.length; i++) {
        let t = a[i], j = i-1
        while(t < a[j++]) a[j--] = a[j--]
        a[j] = t, console.log(...a)
    }
}

function insertionSort2(n, arr) {
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] < arr[j]){
                const aux = arr[j]
                arr[j] = arr[i]
                arr[i] = aux
            }
        }
        if(i != 0) console.log(arr.join(' '))
    }

}


function insertionSort2(n: number, arr: number[]): void {
   let newArray: number[] = arr;
   for(let i:number = 0; i<n-1 ; i++) {
        if(newArray[i]>newArray[i+1]){
           const firstOrder = newArray.slice(0,i+2).sort((a,b)=>{ return a-b});
           const secondOrder = newArray.slice(i+2,n);
          newArray = firstOrder.concat(secondOrder);           
        }
        console.log(newArray.join(' ')); 
   }

}


const recursiveFunction = (array, index) => {
    if(array[index]) {
      
    const actual = array[index]
      const modifiedArray = array
      
      const biggerIndex = modifiedArray.findIndex(item => actual <= item)
      if(biggerIndex < index) {
        modifiedArray.splice(index, 1);
        modifiedArray.splice(biggerIndex, 0, actual)
      }
      
      console.log(modifiedArray.join(' ')) 
      recursiveFunction(modifiedArray, index+1)
    }
  }

  recursiveFunction(arr, 1)
