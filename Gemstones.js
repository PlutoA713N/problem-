
//My first 2 codes doesn't work they are limited to specific length. Using every() fixed a lot
function gemstones(arr){
    var ar = [],ar2 = [];
    var counter = 0;
    let all = arr.sort((a,b)=> b.length - a.length)
    for(let i=0,j=0,k=0;i<all[0].length;i++){
        if(all[1].includes(all[0][i])){
            ar.push(all[0][i])
            j++
        } 
        if(all[2].includes(all[0][i])){
            ar2.push(all[0][i])
            k++
        }
        console.log(j,k,ar)
    }
    let room = [].concat([ar],[ar2])
    let max = room.sort((a,b)=> b.length - a.length)
    for(let i=0;i<room[0].length;i++){
        if(room[0].includes(room[i])){
        counter++;
        }
    }
    //console.log(all,counter,room)
    return counter;
}
gemstones(['vtrjvgbj','mkmjyaeav','sibzdmsk'])
function gemstones(arr){
    let k = 0;
    for(let i=0;i<arr[0].length;i++){
        let char = arr[0].charAt(i);
        if(arr[1].includes(char) && arr[2].includes(char)){
            k++;
        }      
        }
    
    return k;
}
gemstones(['vtrjvgbj','mkmjyaeav','sibzdmsk']);
gemstones(['basdfj','asdlkjfdjsa','bnafvfnsd','oafhdlasd'])

function gemstones(arr){
    let k = 0,ar = [];
    for(let i=0;i<arr[0].length;i++){
        let char = arr[0].charAt(i);
        if(i >= arr.length) break;
        if(arr[i].includes(char)){
          ar.push(char) 
          console.log(ar)
          k++
        }                     
    }
    console.log(ar,k)
    return k;
}
gemstones(['vtrjvgbj','mkmjyaeav','sibzdmsk']);
gemstones(['basdfj','asdlkjfdjsa','bnafvfnsd','oafhdlasd'])

//Solved it with the help of other coder learnt about sets
function gemstones(arr){
   let ar = arr.join('')
   let sets = [...new Set(ar)]
   let output = sets.filter(v =>
       arr.every(each=> each.includes(v)))
       console.log(output)
       return output.length;
       
      // output.push(v)
   
   console.log(output.length)
}
gemstones(['vtrjvgbj','mkmjyaeav','sibzdmsk']);
gemstones(['basdfj','asdlkjfdjsa','bnafvfnsd','oafhdlasd'])

