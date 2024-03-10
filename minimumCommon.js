/**
leetcode - 2540 : to find least minimum common number between 2 arrays in a non-decreasing order
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let common = Infinity;
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            common = nums1[i];
            break;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return common !== Infinity ? common : -1;
};

let x = [2,3,4,5]
let y = [1,2,4,6]
getCommon(x,y)
