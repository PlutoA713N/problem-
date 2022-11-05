// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];
    let min = 100;
    let cost = (s, squares) => {

        return [...s.map(value => value.join('')).join('')].reduce((target, item, index) => {
            target += Math.abs(+item - +squares[index])

            return target;
        }, 0)
    };

    squares.forEach((item, index) => {
        let value = cost(s, squares[index]);

        (value < min) && (min = value);
    });

    return min;
}


function formingMagicSquare(s) {
    // Write your code here
    let min = Number.POSITIVE_INFINITY;
    let squareMatrix = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];
    squareMatrix.forEach((item) => {
        let cost = Math.abs(s[0][0] - item[0]) + Math.abs(s[0][1] - item[1]) + Math.abs(s[0][2] - item[2]) + Math.abs(s[1][0] - item[3]) + Math.abs(s[1][1] - item[4]) + Math.abs(s[1][2] - item[5]) + Math.abs(s[2][0] - item[6]) + Math.abs(s[2][1] - item[7]) + Math.abs(s[2][2] - item[8]);
        cost < min ? min = cost : Number.POSITIVE_INFINITY;
    });
    return min;
}
