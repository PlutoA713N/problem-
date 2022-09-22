function gameOfStones(n){
    return (n % 7 <= 1) ? "Second" : "First";
}
gameOfStones(15);

//Here focusing on base cases makes things easier to solve the rest ..
Focusing on "Second" helped a lot
