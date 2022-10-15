function cuttheSticks(arr){
    let ar = [];
    while(arr.length > 0){
    ar.push(arr.length)
    let min = Math.min(...arr)
    let x = arr.map((v)=> v - min);
    let filterd = x.filter((v)=> v !== 0)
    arr = filterd
   // console.log(min,ar,x,filterd)
    }
    return ar;
}
cuttheSticks([5,4,4,2,2,8])
cuttheSticks([1,2,3, 4, 3, 3, 2, 1])


Other coders
// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
    let result = [];

    while (arr.length > 0) {
        result.push(arr.length);

        arr.sort((a, b) => (a - b));

        let front = arr[0];

        arr.reduce((target, value, index) => {
            arr[index] -= front;

            return target;
        }, []);

        let remove = arr.lastIndexOf(0) + 1;

        arr.splice(0, remove);
    }

    return result;
}

