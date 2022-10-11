function acmTeam(topic){
    let len = topic.length-1
    let variations = 0;
    for(let i=1;i<len;i++){
        variations += i;
    }
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            for(let k=0;k<topic[0].length;k++){
                console.log(i,j,k) //topic[1].length)
                
            }
        }
    }
    //console.log(len,variations)
    
//Written this code for more than 4hours it failed let's see...passed only 2 test cases
function acmTeam(topic){
    let len = topic.length-1
    let ar = [],output = []
    var a=0,b=1,i=0,count = 0,max = 5,diff = 0;
    let variations = 0;
    for(let i=1;i<len;i++){
        variations += i;
    }
        while(ar.size !== variations){
            if(topic[a][i] == 0 &&  topic[b][i] == 0){
                count++;
            }
           i++;
            if(i === 5) {
             diff = max - count;
             ar.push(diff)
             count = 0;
             i = 0;
             b++;
            }
            if(b == topic.length){
                a++;
                b = a+1;
            }  
            if(a === len) break;
        }
      let output2 = (Math.max(...ar))
     let num = ar.filter((x) => 
          x == output2)
          output.push(output2,num.length)
          return output;
}
acmTeam(['10101','11100','11010','00101'])
acmTeam(['10101','11110','00010'])

//Other coders
var max = [0,0]; 
    
    for(var i=0; i<n-1; i++){
        for(var j=i+1; j<n; j++){
            
            //check topics
            var sum = 0;
            for(var t=0; t<m; t++){
                if(topic[i][t]|topic[j][t]){
                    sum++;
                }
            }
            
            if(sum > max[0]){
               max[0] = sum; 
               max[1] = 1;
            }
            else if(sum === max[0]){
               max[1]++; 
            }
           
        }
    }
     console.log(max[0]);
     console.log(max[1]);


function acmTeam(topic) {
    // Write your code here
    var maxT = 0;
    var max = 0;
    
    for(var i=0; i<topic.length-1; i++) {
        for(var j=i+1;j<topic.length;j++) {
            // known is their combined knowledge while totalKnown 
            // is a count of every non-0 character in known
            // had to use BigInt for known to prevent javscript
            // defaulting to scientific notation
            let known = BigInt(topic[i]) + BigInt(topic[j]);
            let totalKnown = known.toString().split('').filter(topic => topic!=0).length;
            if (totalKnown > max) {
                max = totalKnown;
                maxT = 1;
            } else if (totalKnown == max) {
                maxT++;
            }
        }
    }

    return [max, maxT];
}

function acmTeam(topic) {
    // Write your code here
    let filtered = []
    function subjects(a, b) {
        return Array.from(a).filter((j, index) => {
            return (j == 1 || Array.from(b)[index] == 1)}).length
    }
    topic.map((i, index, topic) => {
        for (let v = index+1; v < topic.length; v++) {
            filtered.push(subjects(topic[index], topic[v]))}
    })     
    
       
    let maxSubj = Math.max(...filtered)
    let maxTeams = filtered.filter(i => i == maxSubj).length
    let answer = []
    answer.push(maxSubj, maxTeams)
    
    
    return answer

function acmTeam(topic) {
  let results = [];
  let range = topic.length - 1;

  for (let i of Array.from({ length: range }, (value, index) => index)) {
    results.push(
      ...Array.from(
        { length: range - i },
        (value, index) => index + 1 + i
      ).reduce((target, compare) => {
        target.push(
          [...topic[i]].reduce((target, item, valueIndex) => {
            (!!+item || !!+topic[compare][valueIndex]) && target++;

            return target;
          }, 0)
        );

        return target;
      }, [])
    );
  }

  return results
    .sort()
    .reverse()
    .reduce(
      (target, item, index) => {
        !index && (target[0] = item);

        target[0] == item && target[1]++;

        return target;
      },
      [0, 0]
    );
}
