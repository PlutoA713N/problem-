function processData(input) {
    //Enter your code here
const regex = /<\s*(\w+).*?>|<\s*(\w+).*?\/>/g;
    const unique_arr = new Set(); 
    while (match = regex.exec(input)) {
        unique_arr.add(match[1]);
    }
    console.log([...unique_arr].sort().join(';'));
    } 
