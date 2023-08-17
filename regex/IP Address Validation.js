function processData(input) {
    //Enter your code here
    var newInput = input.split('\n').slice(1);
    
    let ipv4 = /^([12]?[\d]?[\d]\.){3}[12]?[\d]?[\d]$/;
    let ipv6 = /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/;
    
    newInput.forEach((str) => {
        console.log( ipv4.test(str) ? 'IPv4' : ipv6.test(str) ? 'IPv6' : 'Neither' )     ;
    });
} 
