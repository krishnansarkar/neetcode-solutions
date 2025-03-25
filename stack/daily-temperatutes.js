// Daily Temperatures

// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

// Example 1:
// Input: temperatures = [30,38,30,36,35,40,28]
// Output: [1,4,1,2,1,0,0]

// Example 2:
// Input: temperatures = [22,21,20]
// Output: [0,0,0]

// Constraints:
// 1 <= temperatures.length <= 1000.
// 1 <= temperatures[i] <= 100

class BruteForceSolution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        var result = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length - 1; i++) {
            let startTemp = temperatures[i];
            for (let ii = i + 1; ii < temperatures.length; ii++) {
                let endTemp = temperatures[ii];
                if (endTemp > startTemp) {
                    result[i] = ii - i;
                    break;
                }
            }
        }

        return result;
    }
}

// var solution = new Solution();
// console.log(solution.dailyTemperatures([30, 38, 30, 36, 35, 40, 28]));

// Time-complexity: O(n^2)
// Space-complexity: O(n)

class StackSolution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        var result = new Array(temperatures.length).fill(0);
        var stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const currentTemp = temperatures[i];
            while (
                stack.length > 0 &&
                currentTemp > temperatures[stack[stack.length - 1]]
            ) {
                const startTempIndex = stack.pop();
                result[startTempIndex] = i - startTempIndex;
            }
            stack.push([i]);
        }

        return result;
    }
}

var solution = new StackSolution();
console.log(solution.dailyTemperatures([30, 38, 30, 36, 35, 40, 28]));

// Time-complexity: O(n)
// Space-complexity: O(n)
