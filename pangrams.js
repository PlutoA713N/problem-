https://www.hackerrank.com/contests/mountblue-technologies/challenges/pangrams/submissions/code/1349452363
function pangrams(s){
    let regex = /([a-z])(?!.*\1)/gi;
    let output = (s.match(regex).length == 26);
    return output ? 'pangram' : 'not pangram'
    
    console.log(s.match(regex).length);

    
}
pangrams("We promptly judged antique ivory buckles for the next prize");
pangrams("We promptly judged antique ivory buckles for the prize");

// By using objects - by another Coder
function pangrams(s) {
        let hash = {};
        s = s.toLowerCase();
        for(let i = 0; i < s.length; i++) {
            if(s[i] !== ' ') hash[s[i]] = s[i];
        }
        return Object.keys(hash).length === 26 ? 'pangram' : 'not pangram';
    }
//by counting the keys length - codeforjs.com
