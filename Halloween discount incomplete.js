//not yet finished 
//Done

function howManyGames(p,d,m,s){
    var i = d,counter = 1;
    var x = p;
    var diff = 0;
    do { 
     diff = x - i;
    x = diff;
    if(diff <= m && p <= s){
        x = m;
        diff = m;
        p += m;
        if(p >= s)
        break;
    }else{
    p += x;
    }
     counter++;
    console.log(x,diff,p,counter)
    } while(p <= s);
    console.log(counter);
    return counter;
}
howManyGames(20,3,6,85);

Other coder solution: simple n neat
function howManyGames(p, d, m, s) {
        // Return the number of games you can buy
        let sum = 0, count = -1;
        while(sum <= s) {
            sum += p <= m ? m : p;
            p -= d;
            count++;
        }
        return count;
    }
 
 
