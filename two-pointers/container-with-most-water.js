// Container With Most Water

// You are given an integer array heights where heights[i] represents the height of the ith bar.
// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:
// Input: height = [1,7,2,5,4,7,3,6]
// Output: 36

// Example 2:
// Input: height = [2,2,2]
// Output: 4

// Constraints:
// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var max = 0;
        var frontIndex = 0;
        var backIndex = heights.length - 1;

        while (frontIndex < backIndex) {
            let frontHeight = heights[frontIndex];
            let backHeight = heights[backIndex];
            let containerArea =
                Math.min(frontHeight, backHeight) * (backIndex - frontIndex);
            // console.log(
            //     " " +
            //         "[" +
            //         frontIndex +
            //         "," +
            //         backIndex +
            //         "] [" +
            //         frontHeight +
            //         "," +
            //         backHeight +
            //         "] = " +
            //         containerArea
            // );
            max = Math.max(max, containerArea);
            if (frontHeight < backHeight) {
                frontIndex++;
            } else {
                backIndex--;
            }
        }
        return max;
    }
}

var solution = new Solution();
console.log(solution.maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
console.log(solution.maxArea([1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6]));

// Time-complexity: O(n)
// Space-complexity: O(1)
