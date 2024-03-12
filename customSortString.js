// leetcode - 791 : to sort a given string according to the given order and add the rest as it is

var customSortString = function(order, s) {
    let result = ""
    for (let i = 0; i< order.length; i++){
        for (let j =0; j<s.length; j++){
            if (order[i]===s[j]) result += order[i]
        }
    }

    if (result.length < s.length) {
        for(let k = 0; k< s.length; k++){
            if (!order.includes(s[k])) result += s[k];
        }
    }
    return result;
};

var string = "abcd"
var order = "cba"

customSortString(order, string)
