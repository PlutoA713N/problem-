function processData(input) {
    //Enter your code 
    var newInput = input.split('\n').slice(1);
    
   var regex = /^[_.]\d+[a-zA-Z]*_?$/;
   
   newInput.forEach((str) => {
          console.log(regex.test(str) ? 'VALID' : 'INVALID');
   })
   
} 
