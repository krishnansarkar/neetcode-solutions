// Valid Parentheses

// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example 1:
// Input: s = "[]"
// Output: true

// Example 2:
// Input: s = "([{}])"
// Output: true

// Example 3:
// Input: s = "[(])"
// Output: false
// Explanation: The brackets are not closed in the correct order.

// Constraints:
// 1 <= s.length <= 1000

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var stack = [];

        var popCheckStack = (stack, check) => {
            var o = stack.pop();
            if (o != check) return false;
            return true;
        };
        console.log(s);
        for (const p of s) {
            console.log(stack);
            switch (p) {
                case "(":
                case "[":
                case "{":
                    stack.push(p);
                    break;
                case ")":
                    if (!popCheckStack(stack, "(")) return false;
                    break;
                case "]":
                    if (!popCheckStack(stack, "[")) return false;
                    break;
                case "}":
                    if (!popCheckStack(stack, "{")) return false;
                    break;
            }
        }
        return stack.length == 0;
    }
}

var solution = new Solution();
console.log(solution.isValid("([{}])"));
console.log(solution.isValid("[(])"));
console.log(solution.isValid("["));

// Time-complexity: O(n)
// Space-complexity: O(n)
