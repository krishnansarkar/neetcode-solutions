// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 1000
// -10^5 <= nums[i] <= 10^5

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        var results = new Map();
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (nums[i] == nums[i + 1]) continue;

            let frontPointer = i + 1;
            let backPointer = nums.length - 1;
            while (frontPointer < backPointer) {
                while (nums[i] + nums[frontPointer] + nums[backPointer] > 0)
                    backPointer--;
                if (
                    frontPointer < backPointer &&
                    nums[i] + nums[frontPointer] + nums[backPointer] == 0
                ) {
                    let triple = [
                        nums[i],
                        nums[frontPointer],
                        nums[backPointer],
                    ];
                    results.set(triple.toString(), triple);
                }
                frontPointer++;
            }
        }
        console.log(loops);

        return [...results.values()];
    }
}

// var solution = new Solution();
// console.log(solution.threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(solution.threeSum([0, 1, 1]));
// console.log(solution.threeSum([0, 0, 0, 0]));
// console.log(solution.threeSum([-2, 0, 1, 1, 2]));
// console.log(
//     solution.threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
// );

// Time-complexity: O(n^2)
// Space-compleixty: O(n)
