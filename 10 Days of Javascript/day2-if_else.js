'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(s) {
    let grade = 'A';
    // Write your code here
    if(s <= 5){
        return 'F'
    }else if(s > 5 && s <= 10){
        return 'E'
    }else if(s > 10 && s <= 15){
        return 'D'
    }else if( s > 15 && s <= 20){
        return 'C'
    }else if( s > 20 && s <= 25){
        return 'B'
    }
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}
