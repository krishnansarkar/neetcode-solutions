// Group Anagrams

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]

// Example 3:
// Input: strs = [""]
// Output: [[""]]

// Constraints:
// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var anagramMap = new Map();
        for (const str of strs) {
            var letterCountsString = this.#getLetterCountsString(str);
            if (anagramMap.has(letterCountsString)) {
                var sublist = anagramMap.get(letterCountsString);
                sublist.push(str);
            } else {
                anagramMap.set(letterCountsString, [str]);
            }
        }

        var result = [];
        for (const [_, value] of anagramMap) {
            result.push(value);
        }

        return result;
    }

    #getLetterCountsString(str) {
        var letterCounts = new Map();

        for (const c of str) {
            if (letterCounts.has(c)) {
                letterCounts.set(c, letterCounts.get(c) + 1);
            } else {
                letterCounts.set(c, 1);
            }
        }

        var result = [];
        for (const [key, value] of letterCounts) {
            result.push(`${key}${value}`);
        }
        result.sort();
        return result.toString();
    }
}

// var test = new Solution();
// console.log(test.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));

// Time-complexity: O(n)
// Space-complexity: O(n)
