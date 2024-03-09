//leetcode 2124 - to check if all as appear before bs
var checkString = function(s) {
    let occurence = true;
    for( let i = 0; i<s.length; i++){
        if(s[i]>s[i+1]) occurence = false
    }
    return occurence
};

let string = [a,b,a,a,b]
console.log(checkString(string))
