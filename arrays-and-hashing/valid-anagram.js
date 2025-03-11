// Valid Anagram

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true

// Example 2:
// Input: s = "jar", t = "jam"
// Output: false

// Constraints:
// s and t consist of lowercase English letters.

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    var sLetterCounts = this.#getLetterCountsOfString(s);
    var tLetterCounts = this.#getLetterCountsOfString(t);

    if (sLetterCounts.size != tLetterCounts.size) return false;

    for (const [key, value] of sLetterCounts) {
      if (!tLetterCounts.has(key)) return false;
      if (value != tLetterCounts.get(key)) return false;
    }

    return true;
  }

  /**
   * @param {string} s
   * @return {Map}
   */
  #getLetterCountsOfString(s) {
    var letterCounts = new Map();
    for (const char of s) {
      if (letterCounts.has(char)) {
        letterCounts.set(char, letterCounts.get(char) + 1);
      } else {
        letterCounts.set(char, 1);
      }
    }
    return letterCounts;
  }
}

// Time complexity: O(n + m)
// Space complexity: O(1)
