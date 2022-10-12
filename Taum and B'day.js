 //Failed code
   let black = b*bc,minCost = 0;
    let white = w*wc;
    let prices = Math.max(black,white)
    let cheap = Math.min(black,white)
    let total = black+white
    let min = Math.min(bc,wc)
    let max = Math.max(bc,wc)
    let diff = Math.abs(bc-wc)
    if(diff < z){
         minCost = (min+z)*(max/prices) + cheap;
        console.log(cheap)
        return cheap;
    }else if(diff > z){
        minCost = (min+z)*(min/prices) + cheap;
        return minCost;
    }


//Failed for 2 cases, reason is those 2 cases are big ints , my logic is correct need to think broadly
function taumBday(b, w, bc, wc, z) {
    let black = b*bc
    let bswap = b * (wc+z);
    let white = w*wc;
    let wswap = w * (bc+z);
    let total = 0
    if(black <= bswap) total += black;
    if(bswap <= black) total += bswap;
    if(white <= wswap) total += white;
    if(wswap <= white) total += wswap
  console.log(total)
    
}
taumBday(3,6,9,1,1)

function taumBday(b, w, bc, wc, z) {
    let black = b*bc
    let bswap = b * (wc+z);
    let white = w*wc;
    let wswap = w * (bc+z);
    let total = 0;
  let gift1 = Math.min(black,bswap)
  let gift2 = Math.min(white,wswap)
   total = gift1+gift2;
  console.log(total)
  //return total;
    
}
taumBday(3,6,9,1,1)
taumBday(3,5,3,4,1)

//Other coders
function taumBday(b, w, bc, wc, z) {
        return BigInt(b) * BigInt(Math.min(bc, wc + z)) + BigInt(w) * BigInt(Math.min(wc, bc + z));
    }

function taumBday(b, w, bc, wc, z) {
    let min = (a, b) => a > b ? b : a;
    [b, w, bc, wc, z] = [b, w, bc, wc, z].map(n => BigInt(n));
    return b * min(bc, wc + z) + w * min(wc, bc + z);
}

let blackCost = BigInt(bc),
        whiteCost = BigInt(wc),
        blackGifts = BigInt(black),
        whiteGifts = BigInt(white),
        conversionCost = BigInt(convertCost),
        blackToWhite = BigInt(blackCost + conversionCost),
        whiteToBlack = BigInt(whiteCost + conversionCost),
        finalBlackCost = (blackCost < whiteToBlack) ? blackCost : whiteToBlack,
        finalWhiteCost = (whiteCost < blackToWhite) ? whiteCost : blackToWhite;

    return (finalBlackCost * blackGifts) + (finalWhiteCost * whiteGifts);

}
