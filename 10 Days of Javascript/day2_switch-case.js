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

function getLetter(s) {
    let letter;
    // Write your code here
    const a = new Set('aeiou'),
          B = new Set('bcdfg'),
          C = new Set('hjklm'),
          char = s.charAt(0);
          
        
       // console.log(A.has(char)) 
        
          switch(true){
              case a.has(char):
              letter = 'A';
              break;
              case(B.has(char)):
              letter = 'B';
              break;
              case(C.has(char)):
              letter = "C";
              break;
              default:
              letter = 'D'
          }
          
          
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
