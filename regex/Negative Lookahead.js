const str = "gooooo";
const match = str.match(/(\w)(?!\1)/g);
console.log(match); 
