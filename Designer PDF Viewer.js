//My code
function designPdfViewer(h, word){
    var len = word.length, ar = [];
    var char = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0;i<len;i++){
       let x = char.indexOf(word[i]);
       ar.push(h[x])
       console.log(x,ar)
    }
    var output = Math.max(...ar) * len;
    return output;
    //console.log(output,len)
}
designPdfViewer([1, 3, 1, 3, 1, 4, 1 , 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba')
