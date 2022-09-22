https://www.hackerrank.com/contests/mountblue-technologies/challenges/marcs-cakewalk/submissions/code/1349082698
function marcCakewalk(calorie){
    let input = calorie.sort((a,b) => b-a);
    let counter = 0;
    for(let j = 0; j < calorie.length;j++){
        counter += (Math.pow(2,j) * input[j]);
    }
    return (counter);
}
marcCakewalk([7, 4, 9, 6,]);
