//not yet finished

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
