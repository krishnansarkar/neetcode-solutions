// Longest Repeating Character Replacement

// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:
// Input: s = "XYYX", k = 2
// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

// Example 2:
// Input: s = "AAABABB", k = 1
// Output: 5

// Constraints:
// 1 <= s.length <= 1000
// 0 <= k <= s.length

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        var charCounts = new Map();
        var left = 0;
        var right = 0;
        var longestLength = 0;

        var getMaxCharCount = (charCount) => {
            var max = 0;
            for (const [_, v] of charCount) {
                if (v > max) {
                    max = v;
                }
            }
            return max;
        };

        while (right < s.length) {
            //console.log(s.slice(left, right + 1));
            const rightChar = s.charAt(right);
            charCounts.set(rightChar, (charCounts.get(rightChar) ?? 0) + 1);
            while (right - left + 1 - getMaxCharCount(charCounts) > k) {
                const leftChar = s.charAt(left);
                charCounts.set(leftChar, charCounts.get(leftChar) - 1);
                left++;
            }
            longestLength = Math.max(longestLength, right - left + 1);
            right++;
        }

        return longestLength;
    }
}

// Time-complexity: O(n)
// Space-complexity: O(n)

const solution = new Solution();
console.log(solution.characterReplacement("XYYX", 2)); // 4
console.log(solution.characterReplacement("AAABABB", 1)); // 5
