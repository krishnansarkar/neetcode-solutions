// Products of Array Except Self

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in
// O(n) time without using the division operation?

// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]

// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]

// Constraints:
// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var totalProduct = 1;
        var indexOfZero = -1;
        for (let i = 0; i < nums.length; i++) {
            let n = nums[i];
            if (n == 0) {
                if (indexOfZero == -1) indexOfZero = i;
                else {
                    indexOfZero = -2;
                    totalProduct = 0;
                    break;
                }
            } else {
                console.log(i, n);
                totalProduct *= n;
            }
        }

        var result = [];
        if (indexOfZero == -1) {
            for (const n of nums) {
                result.push(totalProduct / n);
            }
        } else if (indexOfZero == -2) {
            result = Array.from({ length: nums.length }, () => 0);
        } else {
            result = Array.from({ length: indexOfZero }, () => 0);
            result.push(totalProduct);
            result = [
                ...result,
                ...Array.from(
                    { length: nums.length - indexOfZero - 1 },
                    () => 0
                ),
            ];
        }
        return result;
    }
}

// var solution = new Solution();
// console.log(solution.productExceptSelf([1, 2, 4, 6]));
// console.log(solution.productExceptSelf([-1, 0, 1, 2, 3]));
// console.log(solution.productExceptSelf([-1, 0, 1, 0, 3]));

// Time-complexity: O(n)
// Space-complexity: O(n)
