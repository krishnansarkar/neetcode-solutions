// Generate Parentheses

// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

// Example 1:
// Input: n = 1
// Output: ["()"]

// Example 2:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// You may return the answer in any order.

// Constraints:
// 1 <= n <= 7

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        var result = [];
        this.#_generateParenthesis(0, 0, "", result, n);
        return result;
    }

    #_generateParenthesis(openCount, closedCount, s, res, n) {
        // console.log(`${s}\t${openCount}\t${closedCount}`);
        if (openCount == closedCount && closedCount == n) {
            res.push(s);
            // console.log("PUSH");
        }

        if (openCount < n) {
            this.#_generateParenthesis(
                openCount + 1,
                closedCount,
                s + "(",
                res,
                n
            );
        }
        if (closedCount < openCount) {
            this.#_generateParenthesis(
                openCount,
                closedCount + 1,
                s + ")",
                res,
                n
            );
        }
    }
}

// var solution = new Solution();
// console.log(solution.generateParenthesis(2));

// Time-complexity: ?
// Space-compleixty: ?
