function flippingMatrix(matrix) {
  // Write your code here
  let n = matrix.length / 2;
  let max;
  let total = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      max = Math.max(
        matrix[x][y],
        matrix[x][matrix.length - 1 - y],
        matrix[matrix.length - 1 - x][y],
        matrix[matrix.length - 1 - x][matrix.length - 1 - y]
      );

      total += max;
    }
  }

  return total;
}


function flippingMatrix(matrix) {
// Write your code here
let n = matrix.length / 2;
let max = 0;
let total = 0;

    for(let row = 0; row < n; row++) {
    for(let col = 0; col < n; col++) {
        max = 0;
        max = Math.max(matrix[row][col], max);
        max = Math.max(matrix[row][n*2 - 1 - col], max);
        max = Math.max(matrix[n*2 - 1 - row][col], max);
        max = Math.max(matrix[n*2 - 1 - row][n*2 - 1 - col], max);

        total += max;
    }
} 
return total;
}

The flipping matrix looks for the largest numbers that could end up in top left most quadrant.
The first step is to determine n, which is matrix.length / 2. This gives the number of rows and columns in the top-left quadrant.
We will loop through all the numbers in that quadrant with a nested for loop of rows then columns and compare with the number on the right, bottom left and bottom right that correspond to that location. It's like writing the matrix on a piece of paper and folding it into 4 and the numbers that are on top of each other when folded would be compared.
For example, the first iteration is to check is [0][0] which is 112, [0][3] which is 119, [3][0] which is 62 and [3][3] which is 108. We must find the max out of these numbers.
The trick is to get the code to look at the cells in the matrix with which it can be flipped.
The four numbers that are compared in every iteration for the max are [row][col], [row][(n * 2) - 1 - col], [(n * 2) - 1 - row][col] and [(n * 2) - 1 - row][(n * 2) - 1 - col] where n * 2 is the number of elements in each row and column. We minus 1 to get the array positions, then we minus the row or col to reference the next innermost row or column. For instance, where n = 4, col 0 would compare with col 7, col 1 would compare with col 6, col 2 would compare with col 5 and col 3 would compare with col 4. Similarly for rows.

function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    var sum = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            let coordinates = reflect([[x,y]], n, 'x');
            coordinates = reflect(coordinates, n, 'y');
            let matrix_extract = coordinates.map(coord => {return matrix[coord[0]][coord[1]]});
            sum += Math.max(...matrix_extract);
        }
    }
    return sum;
}

/**
 * Gets the coordinate transformations that identify the swappable locations for the given coordinates.
 * 'flip' == reflections in x or y axis, therefore there are only 3 other positions any point in the matrix can swap with.
 * So for a 4x4 grid: [0,0] reflects in x=2 to produce [0,3]
 * Then [0,0],[0,3] reflects in y=2 to produce [3,0],[3,3]
 * Axis reflection point and matrix index are not the same, thus require adjustment to get from one to the other.
 * Axis (x or y):     0   1   2   3   4
 * Axis-Matrix Index: | 0 | 1 | 2 | 3 |
 * @param {Array} coordinates To be transformed.
 * @param {Number} reflection_point Point on the axis to perform the reflection in.
 * @param {String} axis Flag. Which axis to be transformed along.
 * @returns {Array} Coordinates and transformed coordinates.
 */
function reflect(coordinates, reflection_point, axis) {
    let pos = 0;
    if (axis === 'x') {
        pos = 1;
    }
    let results = [...coordinates];
    for (let coord of coordinates) {
        let axis_val = coord[pos],
            reflection_distance = reflection_point - axis_val - 1,
            axis_val_new = reflection_point + reflection_distance;
        if (pos) {
            results.push([coord[0], axis_val_new]);
        } else {
            results.push([axis_val_new, coord[1]]);
        }
    }
    return results;
}
