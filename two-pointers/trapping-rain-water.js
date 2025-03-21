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
        var frontIndex = 0;
        var backIndex = height.length - 1;
        var result = 0;
        let indexi = Array.from({ length: height.length }, (_, i) => i);
        while (frontIndex < backIndex) {
            console.log(`[${indexi}]`);
            console.log(`[${height}]`);
            {
                while (height[frontIndex] <= height[frontIndex + 1])
                    frontIndex++;
                let p = frontIndex + 1;
                let tentativeCapacity = 0;
                while (height[frontIndex] > height[p] && p < backIndex) {
                    tentativeCapacity += height[frontIndex] - height[p];
                    p++;
                }
                if (
                    p < backIndex ||
                    (p == backIndex && height[frontIndex] < height[backIndex])
                ) {
                    result += tentativeCapacity;
                    frontIndex = p;
                }
                console.log(`[${frontIndex},${p},${tentativeCapacity}]`);
            }
            {
                while (height[backIndex] <= height[backIndex - 1]) backIndex--;
                let p = backIndex - 1;
                let tentativeCapacity = 0;
                while (height[backIndex] > height[p] && p > frontIndex) {
                    tentativeCapacity += height[backIndex] - height[p];
                    p--;
                }
                if (p >= frontIndex) result += tentativeCapacity;
                console.log(`[${backIndex},${p},${tentativeCapacity}]`);
                backIndex = p;
            }

            console.log("---");
        }

        return result;
    }
}

// var solution = new Solution();
// console.log(solution.trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
// console.log(solution.trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log(solution.trap([0, 2, 0]));
// console.log(solution.trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
// console.log(solution.trap([4, 2, 3]));
// console.log(solution.trap([4, 4, 4, 7, 1, 0]));

// Time-complexity: O(n)
// Space-complexity: O(1)
