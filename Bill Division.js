let ruppe = bill.filter((v,i)=> bill.indexOf(v) !== k).reduce((a,b)=>a+b)/2
console.log(b === ruppe ? 'Bon Appetit' : Math.abs(b - ruppe))

let ruppe = (bill.reduce((a,b)=>a+b) - bill[k])/2
console.log(b === ruppe ? 'Bon Appetit' : (b - ruppe))

