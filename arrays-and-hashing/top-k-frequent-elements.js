// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]

// Constraints:
// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} k
//      * @return {number[]}
//      */
//     topKFrequent(nums, k) {
//         var numCounts = new Map();

//         for (const num of nums) {
//             if (numCounts.has(num)) numCounts.set(num, numCounts.get(num) + 1);
//             else numCounts.set(num, 1);
//         }

//         var numCountsArray = [];
//         for (const [key, value] of numCounts) {
//             numCountsArray.push([key, value]);
//         }
//         numCountsArray.sort((a, b) => {
//             if (a[1] > b[1]) return -1;
//             if (a[1] < b[1]) return 1;
//             return 0;
//         });

//         var result = [];
//         for (let i = 0; i < k; i++) {
//             result.push(numCountsArray[i][0]);
//         }

//         return result;
//     }
// }

// Time-complexity: O(n log n)
// Space-complexity: O(n)

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var numCounts = new Map();
        for (const n of nums) {
            if (numCounts.has(n)) numCounts.set(n, numCounts.get(n) + 1);
            else numCounts.set(n, 1);
        }
        console.log(numCounts);
        var frequencyBucket = Array.from({ length: nums.length }, () => []);
        for (const [key, value] of numCounts) {
            frequencyBucket[value - 1].push(key);
        }

        var result = [];
        for (let i = frequencyBucket.length - 1; i >= 0; i--) {
            // console.log(frequencyBucket[i]);
            for (const n of frequencyBucket[i]) {
                // console.log(`--${n}\n`);
                result.push(n);
                if (result.length == k) return result;
            }
        }
    }
}

var solution = new Solution();
console.log(solution.topKFrequent([1], 1));
