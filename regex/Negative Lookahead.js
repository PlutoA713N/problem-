const str = "gooooo";
const match = str.match(/(\w)(?!\1)/g);
console.log(match); 

var Regex_Pattern = /([\w\S\s])(?!\1)/g;
