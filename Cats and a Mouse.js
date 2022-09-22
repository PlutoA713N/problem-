https://www.hackerrank.com/contests/mountblue-technologies/challenges/cats-and-a-mouse/submissions/code/1349085721
function catAndMouse(x,y,z){
    if(x == y || Math.abs(z - y) == Math.abs(z - x)){
       // console.log("c");
        return "Mouse C";
    }
    if(Math.abs(z-y) < Math.abs(z-x)){
        console.log("b")
        return "Cat B";
    }else {
        console.log("a")
        return "Cat A";
    }
}
catAndMouse(5,2,4);
