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
