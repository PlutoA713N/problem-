
//My solution is correct but for some few things it's failing for 2 cases ..
//Similar solution is at the bottom by other coders by using fill to count elements in an array style
function pickingNumbers(a){
    let max = 0;
    let object = a.reduce((a,b)=>{
        a[b] = ++a[b] || 1;
        return a;
    },{});
    let values = (Object.values(object));
    for(let i=0;i<values.length;i++){
        let key = (Object.keys(object));
        let keys = key[i];
        let xkey = key[i+1]
        if((Math.abs(keys - xkey)) <= 1){
           var output = values[i]+values[i+1]
           if(output > max){
           max = output;
           }
        }
    }
    return max;
}
pickingNumbers([4, 6, 5, 3, 3, 1])
pickingNumbers([1, 2, 2, 3, 1, 2])
pickingNumbers([1,1,2,2,4,4,5,5,5])


    function pickingNumbers(a) {
        // Write your code here
        let array = Array(a.length).fill(0), max = 0;
        
        for(let i = 0; i < a.length; i++) {
            array[a[i]]++;
        }
        
        for(let i = 0; i < a.length; i++) {
            if(array[i] + array[i + 1] > max) {
                max = array[i] + array[i + 1];
            }
        }
        return max;
    }



function pickingNumbers(a) {
    return a.reduce((count,val) => {
        // count occurance of each number
        count[val]++
        return count;
    }, new Array(100).fill(0))
        .reduce((max, val, index, count) =>{
        // max number of integers such that the absolute 
        // difference between any two is 1
        if (max < val + count[index + 1]){
                max = val + count[index + 1];
        }
        return max;
    }, 0);
}


function pickingNumbers(a) {
    // Write your code here
    let max = 0;
    let values = new Array(100).fill(0);

    (a || []).forEach(value => {
        values[value]++;
    });

    return values.reduce((target, value, index) => {
        (
            (index >= 1) &&
            (value + values[index - 1] > target)
        ) && (target = value + values[index - 1]);

        return target;
    }, []);
}
