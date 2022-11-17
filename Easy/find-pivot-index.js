
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0



// Constraints:

//     1 <= nums.length <= 104
//     -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
// Will be given array of ints (nums)
// check each index if all values to the left are equal to all values to the right
// Return the index that satisfies the above condition
// If no value exists return -1 (left most index)

var pivotIndex = function(nums) {
    // Declare variable pivotIndex to hold default value of -1 (returned if no such index exists)
    var pivotIndex = -1
    // Iterate through the array (Including the last index)
    for (let i = 0; i < nums.length; i++){
    // Delcare sumLeft that holds the sum of all values to the left
    let sumLeft = nums.slice(0, i).reduce((pv, cv) => pv + cv, 0)
    // Declare sumRight that holds the sum of all values to the right
    // Note that the starting index for .slice is i + 1 because we don't want to include the current index.
    let sumRight = nums.slice(i + 1, nums[nums.length]).reduce((pv, cv) => pv + cv, 0)
    // Check if sumLeft is === to sumRight
        if (sumLeft === sumRight) {
    // If it is we assign the current index to pivotIndex
           return pivotIndex = i
        }

}
return pivotIndex
}
