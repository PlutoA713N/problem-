const str = "12-34-56-78";
const match = str.match(/\d{2}(-?)(\d{2}\1){2}\d{2}/)
or
const match = new RegExp(/\d{2}(-?)\d{2}\1\d{2}\1\d{2}/)
console.log(match);
