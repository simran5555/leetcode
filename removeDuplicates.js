// leetcode - 26 : to remove duplicate numbers from an array so that it only consists of unique numbers 

var removeDuplicates = function(nums) {
    let i = 0;
    let k = 1;
    while (i < nums.length - 1) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1); 
        } else {
            i++;
            k++;
        }
    }
    return k;
};

let nums = [1,2,2,2,4,4,4,7,8,8,8];
removeDuplicates(nums);
