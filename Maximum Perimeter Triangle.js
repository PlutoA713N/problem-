//my code failed for 3 cases (run time error) + failed to show output'-1' even tried using ternary operator with array empty case 
//Umm it's working if only -1 is wrapped by square bracket else it's showing wrong output!😑
function maximumPerimeterTriangle(sticks){
    let ar = [];
   let sort = sticks.sort((a,b)=> b-a);
   if(sticks.length == 3 && sort[0] >= sort[1] + sort[2]){
       console.log(-1)
   }
   for(let i=0;i<sort.length;i++){
       if(sort[i] < sort[i+1] + sort[i+2])
           ar.push([sort[i],sort[i+1],sort[i+2]])
           }
           console.log(ar[0].reverse());
   
   //console.log(sort,ar,ar.length)
    
}
maximumPerimeterTriangle([1,1,1,2,3,5]);

function maximumPerimeterTriangle(s) {
    s.sort((a,b) => b-a)
    for (let i=2; i<s.length; i++) {
        const [a,b,c] = [s[i],s[i-1],s[i-2]];
        if (a+b>c) return [a,b,c]
    }
    return [-1]
}

function maximumPerimeterTriangle(a) {
        a.sort((a1, b1) => b1 - a1); 
        let sum = 0, elements = [];
        for(let i = 2; i < a.length; i++) {
            if(a[i - 2] < (a[i - 1] + a[i])) {
                let tempSum = a[i] + a[i - 1] + a[i - 2];
                if(tempSum > sum) {
                    sum = tempSum;
                    elements = [a[i], a[i - 1], a[i - 2]];
                }
            } 
        }
        return elements.length ? elements : [-1];
    }
