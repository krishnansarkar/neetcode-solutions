class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var partA = "";
        var partB = "";
        for (const str of strs) {
            partA += str.length + ",";
            partB += str;
        }

        return strs.length + "!" + partA + partB;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        var lengths = [];
        var substr = "";
        while (str[i] != "!") {
            substr += str[i];
            i++;
        }
        var stringCount = parseInt(substr);
        while (lengths.length < stringCount) {
            i++;
            substr = "";
            while (str[i] != ",") {
                substr += str[i];
                i++;
            }
            lengths.push(parseInt(substr));
        }

        var result = [];
        i++;
        let lengthIndex = 0;
        while (lengthIndex < lengths.length) {
            substr = "";
            let charIndex = 0;
            while (charIndex < lengths[lengthIndex]) {
                substr += str[i];
                i++;
                charIndex++;
            }
            result.push(substr);
            lengthIndex++;
        }
        return result;
    }
}

// var solution = new Solution();
// var encodedMessage = solution.encode(["neet", "code", "love", "you"]);
// console.log(encodedMessage);
// console.log(solution.decode(encodedMessage));

// Time-complexity: O(n)
// Space-complexity: O(n)
