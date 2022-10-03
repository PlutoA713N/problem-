//in this code hacker rank annoyed me by not including some parameters and in the function body (result line) 
//Took some time , I scratched my head why there's no output...at all without knowing about this


function serviceLane(n, cases){
    let ar = ([].concat(...cases))
    let store = [];
    for(let i=0;i<ar.length;i+=2){
     var x = store.push(Math.min(...n.slice(ar[i],ar[i+1]+1)))
    }
    return store;
}
serviceLane([1, 2, 2, 2, 1],[[2, 3],[1, 4],[2, 4],[2, 4],[2, 3]])
//
//Other coder solution
function serviceLane(n, width, cases) {
  let results = [];

  cases.reduce((target, items) => {
    let min = width[items[0]];

    for (let i = items[0]; i <= items[1]; i++) {
      width[i] < min && (min = width[i]);
    }

    results.push(min);

    return target;
  }, []);

  return results;
}
