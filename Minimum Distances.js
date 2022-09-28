//tried using while loop for first time it worked for half cases...this is not the correct approach look at the 2nd code
function minimumDistance(a){
    var len = a.length-1;
    let x = 0,store = [] ;
    while(len){
        if(a[len] == a[x]){
            store.push(len-x);
        }
            //console.log(x,len,a[len],a[x])
        if(x >= Math.floor(len/2)){
            break;
        }
        x++;
        len--;
    }
    //console.log(store.length)
    if(store.length === 0){
        return('-1')
    }else{
        return(Math.min(...store))
    }

}
minimumDistance([7,1,3,4,1,7]);
minimumDistance([3,2,1,2,3]);
minimumDistance([1,2,3,4,10])


function minimumDistance(a){
    let len = a.length,ar=[];
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(a[i] == a[j]){
                ar.push(Math.abs(i-j))
                console.log(a[i],a[j])
            }
        }
    }
           let y = Math.min(...ar)
           console.log(y)
          return y == 'Infinity' ? '-1' : y;
    }
   
//minimumDistance([7,1,3,4,1,7]);
minimumDistance([1,2,3,4,10]);
