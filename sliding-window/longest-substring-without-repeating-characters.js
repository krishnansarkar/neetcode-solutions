// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.
// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: s = "zxyzxyz"
// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:
// Input: s = "xxxx"
// Output: 1
// Constraints:

// 0 <= s.length <= 1000
// s may consist of printable ASCII characters.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var charSet = new Set();
        var left = 0;
        var right = 0;
        var maxLength = 0;
        while (right < s.length) {
            const currentChar = s.charAt(right);
            while (charSet.has(currentChar)) {
                charSet.delete(s.charAt(left));
                left++;
            }
            charSet.add(currentChar);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength;
    }
}

const solution = new Solution();
console.log(solution.lengthOfLongestSubstring("zxyzxyz")); // 3
console.log(solution.lengthOfLongestSubstring("xxxx")); // 1
console.log(solution.lengthOfLongestSubstring("pwwkew")); // 3
console.log(solution.lengthOfLongestSubstring("")); // 0
console.log(solution.lengthOfLongestSubstring("a")); // 1
console.log(solution.lengthOfLongestSubstring("abcabcbb")); // 3
console.log(solution.lengthOfLongestSubstring(" ")); // 1
console.log(solution.lengthOfLongestSubstring("au")); // 2
console.log(solution.lengthOfLongestSubstring("tmmzuxt")); // 5
console.log(solution.lengthOfLongestSubstring("aab")); // 2
