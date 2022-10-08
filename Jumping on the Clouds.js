function jumpingOnClouds(c){ 
    let counter = 0;
    for(let i=0;i<c.length;){
        if(c[i] == c[i+1] && c[i+1] == c[i+2]){
           i += 2;
            counter++       
        }else if(c[i] == c[i+1]){
            i += 1;
           counter++;           
        }else if(c[i] == 1 && c[i] !== c[i+1] || c[i] !== c[i+1]){
            i += 2;
            counter++            
        }       
        if(i == c.length-1) break;
    }
    return (counter)
}
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]) //4
jumpingOnClouds([0, 0, 0, 1, 0, 0]) //3

//Other programmer
function jumpingOnClouds(c) {
        // Write your code here
        let jump = 0, i = 0;
        do {
            if(c[i + 2] == 0) {
                jump++;
                i += 2;
            } else if(c[i + 1] == 0) {
                jump++;
                i += 1;
            }
            
        } while(i != c.length - 1);
        return jump
    }
 
