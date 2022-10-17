function toys(w){
    let len = w.length;
    let count = 0;
    let items = 0;
    let total = 0;
    let sets = [...(new Set(w))].sort((a,b)=>a-b)
    for(let i=0;i<w.length;i++){
        let diff = Math.abs(sets[i] - sets[i+1])
        if( diff <= 4){
            items++
            total += sets[i];
        }
        if(total == sets[i+1] && items == 4){
               items++
                total += a[i+1]
            }
        if(diff >= 4){
            count++
        }
        console.log(count)
    }
    console.log(sets)
}
toys([12,15,7,8,19,24])
toys([1, 2, 3, 21, 7, 12, 14, 21])


function toys(w) {
        w.sort((a, b) => a - b);
        // Write your code here
        let weight = w[0] + 4, container = 1;
        for(let i = 1; i < w.length; i++) {
            if(w[i] > weight) {
                container++;
                weight = w[i] + 4;
            }
        }
        return container;
    }

function toys(w) {
    w.sort((a, b) => a - b)
    let t = w[0], c = 1
    for (const v of w)
        if (v >= t + 5) t = v, c++
    return c
}
