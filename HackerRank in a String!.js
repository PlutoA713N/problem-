//facing problem to print the output in hackerrank ..the output is correct but I'm unable to print ... comment if you can help...
function hackerrankInString(s){
    let str = 'hackerrank';
    let i = 0,j = 0;
    var ar = [];
    while(ar.length < 10){
        if(s[j].includes(str[i])){
            ar.push(str[i]);
            i++;
        }else{
        ++j;
        }
        //console.log(ar)
    }
    return (ar.length < 10 ? 'No' : 'yes')
}
//hackerrankInString('hereiamstackerrank');
hackerrankInString ('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt')
//hackerrankInString('hhaacckkekraraannk')
//hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt')

//Sometimes it's better to use for loops rather than while loops
function hackerrankInString(s){
    let str = 'hackerrank';
    let j = 0;
    for(let i=0;i<s.length;i++){
        if(s[i].includes(str[j])){
            j++;
        }
    }
    console.log(j)
    return(j < 10 ? 'No' : 'yes')
}
hackerrankInString('hereiamstackerrank');
