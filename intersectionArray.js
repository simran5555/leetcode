//leetcode - 349 : to find intersection array of two given arrays

var intersection = function(nums1, nums2) {
    let i, j;

    let resultArr= [];

    for(i=0;i<nums1.length;i++){
        for (j=0;j<nums2.length;j++) {
            if (nums1[i] === nums2[j] && !resultArr.includes(nums1[i])) {
                resultArr.push(nums1[i]);
            }
        }
    }
    return resultArr;
};

let x = [1,2,2,1]
let y = [2,4]
intersection(x,y)
