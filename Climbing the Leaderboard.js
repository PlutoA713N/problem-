//After a long time
2 wrongs && few time outs
let i = [100, 90, 90, 80, 75, 60]
let j = [50, 65, 77, 90, 102]
let x = [...new Set(i)].sort((a,b)=> b-a), ar = []
var flow = 1;
    var flow1 = 1;
j.map((v)=> {x.forEach((s,i)=>{
    if(v >= x[0] && flow){
        ar.push(1)
        flow = 0;
    }
    if(v < x[x.length-1] && flow1){
        ar.push(x.length+1)
        flow1 = 0;
    }
    if(v >= s && v < x[i-1]){
        ar.push(i+1)
    }
})})
return ar;

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let arr = [...new Set(ranked)];
    let len  = arr.length;
    let currScore = 0;
    let res = [];
    for(let i=0;i<player.length; i++) {
        currScore=player[i];
        if(currScore>=arr[0]) {
            res.push(1);
            continue;
        } else if(currScore<arr[len-1]) {
            res.push(len+1);
            continue;
        } else if(currScore===arr[len-1]) {
            res.push(len);
            continue;
        }
        let flag = false;
        let l=0,h=len-1, m = Math.ceil((l+h)/2);
        while(l<=h) {
            if(currScore === arr[m]) {
                flag = true;
                res.push(m+1);
                break;
            } else if(currScore > arr[m]) {
                h = m-1;
            } else {
                l = m+1;
            }
            m= Math.ceil((l+h)/2);
        }
        if(!flag) res.push(m+1);
    }
    return res;
}


function climbingLeaderboard(scores, alice) {

    console.log(scores, alice);

    let positions = [];
    let distScore = [...new Set(scores)];
    let aliceIndex = 0;
    let i = distScore.length - 1;
    alice.forEach(element => {

        while (i >= 0) {
            if (element >= distScore[i]) {
                i--;
            } else {
                positions.push(i + 2);
                break;
            }
        }
        if (i < 0) positions.push(1);

    });

    return positions;
}


function climbingLeaderboard(ranked, player) {
  const uniqueRanked = [...new Set(ranked)];
  const result = [];
  let j = uniqueRanked.length - 1;

  for (let p in player) {
    while (uniqueRanked[j] <= player[p]) {
      j--;
    }
    result.push(j + 2);
  }

  return result;
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    // Complete this function
    let values = [...new Set(scores)];
    let rank = values.length - 1;

    return alice.reduce((target, item, index) => {
        while (item > values[rank] && rank > 0) rank--;

        target.push((item >= values[rank]) ? rank + 1 : rank + 2);

        return target;
    }, []);
}

function climbingLeaderboard(ranked, player) {
    const result = [];
    const newArr = [...new Set(ranked)];
    for(let score of player){
        result.push(lowerBound(newArr, score) + 1);
    }
    return result;
}

const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] <= target) right = mid;
        else left = mid + 1;
    }

function climbingLeaderboard(ranked, player) {
    const result = [];
    const newArr = [...new Set(ranked)];
    for(let score of player){
        result.push(lowerBound(newArr, score) + 1);
    }
    return result;
}


const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] <= target) right = mid;
        else left = mid + 1;
    }

//Using stacks
function climbingLeaderboard(scores, alice) {
    // get the unique ranks sorted descending
    scores = Array.from(new Set(scores));

    const player_ranks = [];
    for (const score of alice) {
        while (scores && score >= scores[scores.length - 1])
            scores.pop()
        player_ranks.push(scores.length + 1)
    }

    return player_ranks


function climbingLeaderboard(scores, alice) {
    // get the unique ranks sorted descending
    scores = scores.reduce((ranking, score) => {
        if (score !== ranking[ranking.length - 1]) {
            ranking.push(score);
        }
        return ranking;
    }, [scores[0]]);

    const player_ranks = [];
    for (const score of alice) {
        while (scores && score >= scores[scores.length - 1])
            scores.pop()
        player_ranks.push(scores.length + 1)
    }

//Git
function climbingLeaderboard(scores, alice) {
  let rank = [];
  for (let i = 0; i < scores.length; i++) {
    if (rank.length === 0) {
      rank.push(scores[i]);
    } else {
      if (rank[rank.length - 1] === scores[i]) {
        continue;
      }
      rank.push(scores[i]);
    }
  }
  
  let res = [];
  let lowestRank = rank.length;
  for (let i = 0; i < alice.length; i++) {
    while (alice[i] >= rank[lowestRank - 1] && lowestRank > 0) {
      rank.pop;
      lowestRank--;
    }
    res.push(lowestRank + 1);
  }
  return res;
}
}


//Using binary tree
Function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
while (true) {
    let mid = Math.floor((start + end) / 2);
// base cases
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
      return mid - 1;
    }
// recursion
    if (score < uniqueScores[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
