// Trapping Rain Water

// You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
// Return the maximum area of water that can be trapped between the bars.

// Example 1:
// Input: height = [0,2,0,3,1,0,1,3,2,1]
// Output: 9

// Constraints:
// 1 <= height.length <= 1000
// 0 <= height[i] <= 1000

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var leftMaxes = new Array(height.length).fill(0);
        var rightMaxes = new Array(height.length).fill(0);

        leftMaxes[0] = height[0];
        for (let i = 1; i < height.length; i++) {
            leftMaxes[i] = Math.max(leftMaxes[i - 1], height[i]);
        }

        rightMaxes[height.length - 1] = height[height.length - 1];
        for (let i = height.length - 2; i >= 0; i--) {
            rightMaxes[i] = Math.max(rightMaxes[i + 1], height[i]);
        }

        let result = 0;
        for (let i = 0; i < height.length; i++) {
            result += Math.max(
                0,
                Math.min(leftMaxes[i], rightMaxes[i]) - height[i]
            );
        }

        // console.log(leftMaxes);
        // console.log(height);
        // console.log(rightMaxes);

        return result;
    }
}

var solution = new Solution();
// console.log(solution.trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
// console.log(solution.trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log(solution.trap([0, 2, 0]));
// console.log(solution.trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
// console.log(solution.trap([4, 2, 3]));
// console.log(solution.trap([4, 4, 4, 7, 1, 0]));
// console.log(solution.trap([4, 2, 0, 3, 2, 5]));

// Time-complexity: O(n)
// Space-complexity: O(1)
