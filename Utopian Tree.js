height = 1,n=5
let num = Math.ceil(n/2)
while(num){
height = ((height * 2)+1)
console.log(height)
num--
}
return % 2 ? height-1 : height
}

// Complete the utopianTree function below.
function utopianTree(n) {
    return new Array(n).fill(0).reduce((target, value, index) => {
        !(index % 2)
            ? (target *= 2)
            : target++;

        return target;
    }, 1);
}


let height = 0;
for(let i = 0; i < n+1; i++)
    height = i % 2 ? height * 2 : height + 1;
return height;
