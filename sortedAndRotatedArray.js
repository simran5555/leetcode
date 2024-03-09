//LEETCODE 1752 - function to check if array is rotated and sorted 

var check = function(nums) {

    if (nums.length <= 1) {
        return true;
    }

    let min = nums[0];
    let minIndices = [0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            minIndices = [i];
        } else if (nums[i] === min) {
            minIndices.push(i);
        }
    }

    for (let index of minIndices) {
        const rotatedArray = nums.slice(index).concat(nums.slice(0, index));

        // Check if the rotated array is sorted
        let sorted = true;
        for (let j = 0; j < rotatedArray.length - 1; j++) {
            if (rotatedArray[j] > rotatedArray[j + 1]) {
                sorted = false;
                break;
            }
        }

        if (sorted) {
            return true;
        }
    }

    return false;
};
var nums = [7,9,1,1,1,3];
console.log(check(nums));

//attempt 2
var check = function(nums) {
     let occurance = 0;
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] > nums[i+1]) occurance++;
    }
    nums[nums.length-1] > nums[0] && occurance++;
    return occurance < 2 ? true : false; 
};

var nums = [2,1,3,4]
console.log(check(nums)]
