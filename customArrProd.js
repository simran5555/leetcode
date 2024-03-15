//238. Product of array except self

var productExceptSelf = function(nums) {
    let prodArr = [];
    for (let i=0; i<nums.length; i++){
        let prod = 1;
        for(let j =0; j<nums.length; j++){
            if(nums[i]!==nums[j]) prod = prod*nums[j]
        }
        prodArr.push(prod)
    }
    return prodArr;
};


var productExceptSelf = function(nums) {
    let prodArr = new Array(nums.length).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;

    console.log(prodArr)
    // Calculate the product of all numbers to the left of each number
    for (let i = 0; i < nums.length; i++) {
        prodArr[i] *= leftProduct;
        leftProduct *= nums[i];
        console.log(prodArr)
        console.log(leftProduct)
    }

    // Calculate the product of all numbers to the right of each number
    for (let i = nums.length - 1; i >= 0; i--) {
        prodArr[i] *= rightProduct;
        rightProduct *= nums[i];
        console.log(prodArr)
        console.log(rightProduct)
    }

    return prodArr;
};


nums = [1,2,3,4]
productExceptSelf(nums)
