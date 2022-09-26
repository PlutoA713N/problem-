#First two programs are failed... for few cases
function gridChallenge(grid){
    var ar = [];
    var store = (grid.map((x) => x.split("").sort().join("")));
    for(let i=0;i<grid.length;i++){
        if(store[i].charCodeAt(i) < store[i+1].charCodeAt(i)){
        console.log("y");
        return "YES";
    }else{
    console.log("n");
    return "NO";
    }
   }
}
gridChallenge(['mpxz','abcd','wlmf'])

function gridChallenge(grid){
    var ar = [];
    var store = (grid.map((x) => x.split("").sort().join("")));
    for(let i=0;i<store.length-1;i++){
        if(store[i] < store[i+1] == false){
            return "NO";
        }else{
            return "YES";
    }
}
gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])

//other coders solution
function gridChallenge(grid) {
    let fixed = grid.map((data) => data.split("").sort().map((data) => data.charCodeAt(0)));

    for (let i = 1; i < fixed.length; i++) {
        let temp = fixed[i - 1];

        for (let j = 0; j < fixed[i].length; j++) {
            if (fixed[i][j] < temp[j]) {
                return "NO";
            }
        }
    }

    return "YES";
}


function gridChallenge(grid: string[]): string {
    // Write your code here
    let sortedGrid = grid.map(letters => letters.split('').sort().join(''))
    
    for (let i=0; i < sortedGrid.length - 1; i++) {
        let currentLetters = sortedGrid[i].split('')
        let nextLetters = sortedGrid[i + 1].split('')
        let lastCurrentLetter = currentLetters[currentLetters.length - 1]
        let firstCurrentLetter = currentLetters[0]
        let firstNextLetter = nextLetters[0]
        let lastNextLetter = nextLetters[nextLetters.length - 1]

        if (firstCurrentLetter > firstNextLetter || lastCurrentLetter > lastNextLetter)
         return "NO"
    }

    return "YES"
}

function gridChallenge(grid) {
    // Write your code here
var nGrid = grid.map((row)=>{
    return row.split("").sort().join("");
});
var len = grid[0].length;
for(let i=0; i< len; i++){
    var arr = '';
    nGrid.map((row, ind)=>{
        arr+= nGrid[ind].substring(i,i+1);
    });
    if(arr != arr.split("").sort().join("")){
        return 'NO';
    }
}

return 'YES';
}

function gridChallenge(grid: string[]): string {
  const sortedGrid = [];
  const gridLength = grid.length;

  // Create a sorted grid
  for (let i = 0; i < gridLength; i += 1) {
    const chars = grid[i].split('').sort();
    sortedGrid.push(chars.join(''));
  }

  // Join the grid into a long text in order to do a single
  // passthrough and check if the columns are also sorted. 
  const sortedText = sortedGrid.join('');

  // In each iteration checks the current char with the equivalent
  // char of the next column. Iterates only to the second-to-last
  // column because the last column is checked by looking ahead.
  for (let i = 0; i < sortedText.length - gridLength; i += 1) {
    if (sortedText[i] <= sortedText[i + gridLength]) {
      continue;
    } else {
      return 'NO';
    }
  }

  return 'YES';
}


function isSorted(s) {
        for(let i = 1; i < s.length; i++) {
            if(s[i - 1].charCodeAt() > s[i].charCodeAt()) return false;
        }
        return true;
    }

    function gridChallenge(grid) {
        // Write your code here
        let j = 1, i = 0;
        grid = grid.map((s) => s.split('').sort().join(''));
        while(true) {
            if(j == grid.length) {
                i++;
                j = 1;
            }
            if(i == grid[0].length) return 'YES';
            if(grid[j - 1][i] > grid[j][i]) return 'NO';
            j++;
        }
        return 'YES'
    }


function gridChallenge(grid) {
    // Write your code here
    let sortedGrid = grid.map(item => {
        let temp = item.split("").sort()
        return temp;
    })
    // console.log(sortedGrid)
    let columnSorted = []
    for(let i = 0; i<sortedGrid[0].length; i++){
        let temp = "";
        for(let j = 0; j<sortedGrid.length; j++){
            // console.log(sortedGrid[j])
            temp += sortedGrid[j][i];
        }
        columnSorted.push(temp)
    }
    console.log(columnSorted);
    let filteredColumn = columnSorted.filter(item => {
        let t = item.split("").sort().join("")
        console.log(t," : ",item)
        return item === t;
    })
    return filteredColumn.length === columnSorted.length?"YES":"NO";
}

