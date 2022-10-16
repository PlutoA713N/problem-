function kaprekarNumber(p,q){
    let ar = []
    for(let i=p;i<=q;i++){
        let sq = (i * i).toString()
        let l = sq.slice(0,sq.length/2)
        let r = sq.slice(sq.length/2)
        if((Number(l)+Number(r)) == i){
            ar.push(i)
        }
    }
    //console.log(...ar)
    return ar.length > 0 ? console.log(...ar) : console.log('INVALID RANGE')
}
kaprekarNumber(1,100)

//A very diff aproach by reduce 

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
  let result = Array.from(
    { length: q - p + 1 },
    (value, index) => index + p
  ).reduce((target, value, index) => {
    let square = `${value ** 2}`;
    let right = +square.substring(
      square.length - `${value}`.length,
      square.length
    );
    let left = +square.substring(0, square.length - `${value}`.length);

    left + right == value && target.push(value);

    return target;
  }, []);

  console.log(!result.length ? "INVALID RANGE" : result.join(" "));
}
