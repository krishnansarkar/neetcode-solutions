// Valid Palindrome

// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:
// Input: s = "tab a cat"
// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:
// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var frontPointer = 0;
        var backPointer = s.length - 1;
        while (true) {
            while (
                frontPointer < backPointer &&
                !this.#isAlphanuemeric(s.charAt(frontPointer))
            )
                frontPointer++;
            while (
                backPointer > frontPointer &&
                !this.#isAlphanuemeric(s.charAt(backPointer))
            )
                backPointer--;
            if (frontPointer >= backPointer) return true;
            if (
                s.charAt(frontPointer).toLowerCase() !=
                s.charAt(backPointer).toLowerCase()
            )
                return false;
            frontPointer++;
            backPointer--;
        }
    }

    #isAlphanuemeric(c) {
        return (
            (c >= "0" && c <= "9") ||
            (c >= "a" && c <= "z") ||
            (c >= "A" && c <= "Z")
        );
    }
}

// var solution = new Solution();
// console.log(solution.isPalindrome("Was it a car or a cat I saw?"));
// console.log(solution.isPalindrome("tab a cat"));

// Time-complexity: O(n)
// Space-complexity: O(1)
