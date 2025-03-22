// Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

// Example 1:
// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5
// Explanation: ((1 + 2) * 3) - 4 = 5

// Constraints:
// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        var stack = [];
        // console.log(tokens);
        // console.log(stack);
        for (const t of tokens) {
            switch (t) {
                case "+":
                    var b = stack.pop();
                    var a = stack.pop();
                    stack.push(a + b);
                    break;
                case "-":
                    var b = stack.pop();
                    var a = stack.pop();
                    stack.push(a - b);
                    break;
                case "*":
                    var b = stack.pop();
                    var a = stack.pop();
                    stack.push(a * b);
                    break;
                case "/":
                    var b = stack.pop();
                    var a = stack.pop();
                    stack.push(Math.trunc(a / b));
                    break;
                default:
                    stack.push(parseInt(t));
                    break;
            }
            // console.log(stack);
        }
        return stack.pop();
    }
}

// var solution = new Solution();
// console.log(solution.evalRPN(["2", "1", "+", "3", "*"]));
// console.log(solution.evalRPN(["1", "2", "+", "3", "*", "4", "-"]));
// console.log(solution.evalRPN(["4", "13", "5", "/", "+"]));
// console.log(
//     solution.evalRPN([
//         "10",
//         "6",
//         "9",
//         "3",
//         "+",
//         "-11",
//         "*",
//         "/",
//         "*",
//         "17",
//         "+",
//         "5",
//         "+",
//     ])
// );

// Time-complexity: O(n)
// Space-complexity: O(n)
