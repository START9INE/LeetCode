Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

 

Constraints:

    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */


// Given an array of nums
//runningSum[i] = sum(num[0]...nums[i])
/// return the running sum of nums

// Test Cases:

// nums = [1,2,3,4] => [1,3,6,10]  Explanation:[1, 1+2, 3+3, 6+4].
// nums = [1,1,1,1] => [1, 2, 4, 5]  Explanation:[1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// nums = [3,1,2,10,1] => [3,4,6,16,17]

// Constraints:
// 1 <= nums.length <=1000
// -10^6 <= nums[i] <=10^6


const runningSum = function (nums) {
    // Loop through nums[i], 0 <= i < nums.length -1
    for (let i = 0; i < nums.length -1 ; i++ ) {
        //inset nums[i] + num[i+1] into a "temp" variable
        let temp = nums[i]+ nums[i+1];
        // insert temp into the following element  num[i+1]
        nums[i+1] = temp;
    }
    return nums;
}
// For more info on solution see: https://codesandbox.io/s/running-sum-of-1d-array-vlnu9?file=/src/index.js
