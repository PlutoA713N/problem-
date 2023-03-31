//https://www.hackerrank.com/challenges/two-characters/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function alternate(s) {
    // Write your code here
const chars = Array.from(new Set([...s]));
    const list = new Array();
    const strings = new Array();
    
    let max = 0;
    
    permutations(chars);
    generateStrings(list);
    stringValidator(strings);
    

    function permutations(array){
        for(let index = 0; index < array.length; index++){
            for(let jindex = index+1; jindex < array.length; jindex++){
                list.push(chars[index] + chars[jindex])
            }
        }
    }
    
    function generateStrings(list){
        list.forEach(string => {
            const replace = new RegExp('[^'+ string + ']', 'g')
            strings.push( s.replace(replace, ''))
        })
    }
    
    function stringValidator(string){
        for(let index = 0; index < string.length; index++){
            const a =  [ string[index][0],
                 string[index][1]];
            let count = 0;
           
           for(let jindex = 0; jindex < string[index].length; jindex++) {
               if(string[index][jindex] == a[jindex % 2] ){
                   count += 1;
               }
          
             if(count == string[index].length && count > max){
                 max = count;
             }
           }
        }
        
    }
    
   // console.log( strings, max );
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);
    
    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
