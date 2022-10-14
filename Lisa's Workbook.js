//it can be solvable by while loops and my ternary solution missing some logic
//Failed 5 cases (3,5,7,9,10)
function workbook(n,k,arr){
    let x = 1;y = 0,count = 0;
    let pages = arr.map((v)=> Math.ceil(v/k));
    let total = pages.reduce((a,b)=>a+b);
    let maxProb = arr.reduce((a,b)=> a+b)
   console.log(arr,pages,total,maxProb)
   let sums = 0;
    while(x <= total){
        if(x <= arr[y]){
            sums += 3;
            if(x <= sums){
                count++
            }
        }else{
            sums += arr[y]
        }
    x++
    if(x > pages[y]){
        y++;
    }
    console.log(count)
    }
   
}
workbook(5,3,[4,2,6,1,10]);

function workbook(n,k,arr){
    let x = 1;y = 0,count = 0;
    let pages = arr.map((v)=> Math.ceil(v/k));
    let total = pages.reduce((a,b)=>a+b);
    let maxProb = arr.reduce((a,b)=> a+b)
   //console.log(arr,pages,total,maxProb)
   let sums = 0;
    while(x <= total){
        x<=arr[y]  ? sums += k : sums += arr[y] - sums;
        x<=sums ? count++ : 0;
       console.log(sums,count)
        if(sums >= arr[y]){
         y++;
         sums = 0
        }
        x++
    }
}
workbook(5,3,[4,2,6,1,10]);
//workbook(2,3,[4,2])

//Other coders solutions
    function workbook(n, k, arr) {
        let j = 0, pagehit = 0, pages = 0;
        for(let i = 0; i < arr.length; i++) {
            j = 0; 
            while(++j <= arr[i]) {
                if(j % k === 1 || k == 1) pages++;
                
                if(pages === j)  {
                    pagehit++;
                    //break;
                }            
                //j++;
            }   
        }
        return pagehit;
    }


// Complete the workbook function below.
function workbook(n, k, arr) {
  let result = 0;
  let page = 1;

  for (let i of Array.from({ length: n }, (value, index) => index)) {
    const problems = arr[i];

    for (let j of Array.from(
      { length: problems },
      (value, index) => index + 1
    )) {
      j === page && result++;

      j !== problems && !(j % k) && page++;
    }

    page++;
  }

  return result;
}

//Other coders
function lisaWorkBook(n, k, arr) {
  let page = 0;
  let simi = 0;
  for (let i = 1; i <= arr.length; i++) {
    let currElement = arr[i - 1];
    let count = 0;
    page++;
    for (let j = 1; j <= currElement; j++) {
      if (count === k) {
        page++;
        count = 0;
      }
      count++;
      if (page === j) {
        simi++;
      }
    }
  }
  return simi;


function workbook(n, k, arr) {
    // Write your code here 
let prob=0; let cap=0; let pg=0; let count=0; let cta=0;
for(let i=0;i <arr.length;i++)
 {
   prob=0;
   if (cap !== i+1) {
     pg++;
    }
   cap = i+1;
   for (let j=0;j<arr[i];j++) {
           prob=j+1;
           count++;
           if (prob == pg) {
               cta++;
           }     
       if (count == k && prob != arr[i]) {
            pg++;
            count=0;
       }  
   }
     count=0;
 }
 return (cta);
}
