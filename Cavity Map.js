function cavityMap(grid) {
    const g = grid
    for (let i = 1; i < g.length - 1; i++)
        for (let j = 1; j < g[i].length - 1; j++)
            if (+Math.max(g[i-1][j], g[i+1][j], g[i][j-1], g[i][j+1]) < +g[i][j])
                g[i] = g[i].replace(/./g, (c, i) => i == j ? 'X' : c)
    
    return g
}



function cavityMap(grid) {
    for(let i = 1; i < grid.length - 1; i++){
        for(let j = 1; j < grid[i].length - 1; j++){
            const cell = Number(grid[i][j]);
            
            if(Math.max(
                grid[i + 1][j],
                grid[i - 1][j],
                grid[i][j + 1],
                grid[i][j - 1]
            ) < cell) {
                const rowAsArray = grid[i].split('');
                rowAsArray[j] = "X";
                grid[i] = rowAsArray.join('');
            }
        }
    }
    
    return grid;
}

function cavityMap(grid) {
    // Turn grid into a 2D array
    const twoDArr = grid.map(ele => ele.split(''));
    
    // Loop through 2D array checking values against neighbours
    for(let i = 1; i < twoDArr.length - 1; i++) {
        for(let j = 1; j < twoDArr[i].length - 1; j++) {
            if(horizontalCheck(twoDArr, i, j) && verticalCheck(twoDArr, i, j)) {
              twoDArr[i][j] = 'X'; 
            }
        }
    }
    const newGrid = twoDArr.map(ele => ele.join(''));
    return newGrid;
}

// Check against horizontal values
function horizontalCheck(arr, column, row) {
    if(arr[column][row] > arr[column][row - 1] && arr[column][row] > arr[column][row + 1]) {
        return true;
    } else {
        return false;
    }
}

// Check against vertical values
function verticalCheck(arr, column, row) {
    if(arr[column][row] > arr[column - 1][row] && arr[column][row] > arr[column + 1][row]) {
        return true;
    } else {
        return false;
    }
}
